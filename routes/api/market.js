const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const auth = require('../../middlewares/auth')
const Market = require('../../models/Market')
const User = require('../../models/User')
const Profile = require('../../models/Profile')

// @route    GET api/markets
// @desc     Get all market
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const markets = await Market.find()
      .sort({ date: -1 })
      .populate('user', ['name', 'avatar', 'id'])
    res.json(markets)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    GET api/markets/:id
// @desc     Get market by ID
// @access   Private

router.get('/:id', auth, async (req, res) => {
  try {
    const market = await Market.findById(req.params.id)
    if (!market) {
      return res.status(404).json({ msg: 'Market not found' })
    }
    res.json(market)
  } catch (err) {
    console.error(err.message)
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Market not found' })
    }
    res.status(500).send('Server Error')
  }
})

// @route    POST api/markets
// @desc     Create a market
// @access   Private

router.post(
  '/',
  [auth, [check('name', 'Le nom est requis').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    try {
      const user = await User.findById(req.user.id).select('-password')
      const newMarket = new Market({
        user: req.user.id,
        name: req.body.name,
        description: req.body.description,
        current: req.body.current,
        from: req.body.from,
        to: req.body.to,
        periodicity: req.body.periodicity,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
      })

      const market = await newMarket.save()
      res.json(market)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  },
)

// @route    DELETE api/markets/:id
// @desc     Delete a market
// @access   Private

router.delete('/:id', auth, async (req, res) => {
  try {
    const market = await Market.findByIdAndDelete(req.params.id)
    if (!market) {
      return res.status(404).json({ msg: 'Marché non trouvée' })
    }
    // Check user
    if (market.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Non authorizé' })
    }

    res.json({ msg: 'Market removed' })
  } catch (err) {
    console.error(err.message)
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Marché supprimée avec succés' })
    }
    res.status(500).send('Server Error')
  }
})

module.exports = router
