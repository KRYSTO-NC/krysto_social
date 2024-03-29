const express = require('express')
const router = express.Router()
const auth = require('../../middlewares/auth')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const config = require('config')
const bcrypt = require('bcryptjs')

const User = require('../../models/User')

// @route    GET api/auth
// @desc     Get auth route
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')
    res.json(user)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    POST api/auth
// @desc     Auhenticate user & get token
// @access   Public
router.post(
  '/',
  [
    check('email', 'Vous devez entrer un email valide')
      .isEmail()
      .not()
      .isEmpty(),
    check('password', 'Vous devez entrer un mot de passe').exists(),
  ],
  async (req, res) => {
    // Check for errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { name, email, password } = req.body

    try {
      // See if user exists
      let user = await User.findOne({ email })
      if (!user) {
        return res.status(400).json({
          errors: [{ msg: 'les identifiants de connection son invalides' }],
        })
      }

      // Compare password
      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        return res.status(400).json({
          errors: [{ msg: 'les identifiants de connection son invalides' }],
        })
      }

      const payload = {
        user: {
          id: user.id,
        },
      }

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 }, // Change to 3600 in production
        (err, token) => {
          if (err) throw err
          res.json({ token })
        },
      )
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
    }
  },
)

module.exports = router
