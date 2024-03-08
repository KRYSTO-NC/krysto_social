const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const auth = require('../../middlewares/auth')
const Article = require('../../models/Article')
const User = require('../../models/User')

// @route    GET api/articles
// @desc     Get all articles
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const articles = await Article.find()
      .sort({ date: -1 })
      .populate('user', ['name', 'avatar', 'id'])
    res.json(articles)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    GET api/articles/:id
// @desc     Get article by ID
// @access   Private

router.get('/:id', auth, async (req, res) => {
  try {
    const article = await Article.findById(req.params.id)
    if (!article) {
      return res.status(404).json({ msg: 'Article not found' })
    }
    res.json(article)
  } catch (err) {
    console.error(err.message)
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Article not found' })
    }
    res.status(500).send('Server Error')
  }
})

// @route    POST api/articles
// @desc     Create a article
// @access   Private

router.post(
  '/',
  [auth, [check('title', 'Le titre est requis').not().isEmpty()]],
  [auth, [check('text', 'Le text est requis').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    try {
      const user = await User.findById(req.user.id).select('-password')
      const newArticle = new Article({
        user: req.user.id,
        title: req.body.title,
        text: req.body.text,
      })

      const article = await newArticle.save()
      res.json(article)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  },
)

// @route    DELETE api/articles/:id
// @desc     Delete a article
// @access   Private

router.delete('/:id', auth, async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id)
    if (!article) {
      return res.status(404).json({ msg: 'Article non trouvée' })
    }

    res.json({ msg: 'Article suprimée' })
  } catch (err) {
    console.error(err.message)
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Article supprimée avec succés' })
    }
    res.status(500).send('Server Error')
  }
})

module.exports = router
