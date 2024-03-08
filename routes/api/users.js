const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../../models/User')

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  [
    check('name', 'Vous devez entrer un nom').not().isEmpty(),
    check('email', 'Vous devez entrer un email valide')
      .isEmail()
      .not()
      .isEmpty(),
    check(
      'password',
      'Vous devez entrer un mot de passe de 6 caractères ou plus',
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    // Check for errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { name, email, password, userType, isAdmin } = req.body

    try {
      // See if user exists
      let user = await User.findOne({ email })
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Cet utilisateur existe déjà' }] })
      }
      // Get users gravatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      })

      // Create user
      user = new User({
        name,
        email,
        userType,
        isAdmin,
        avatar,
        password,
      })
      // Encrypt password

      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(password, salt)

      // Save user
      await user.save()

      // Return jsonwebtoken

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
