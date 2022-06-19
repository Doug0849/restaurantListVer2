const express = require('express')
const router = express.Router()

const Restaurants = require('../../models/restaurant')

router.get('/', (req, res) => {
  const userId = req.user._id
  Restaurants.find({ userId })
    .lean()
    .sort({ _id: 'asc' }) //asc(ascending)正序 desc(descending)反序
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

router.get('/sort', (req, res) => {
  const [property, sortBy] = req.query.sort.split('_')
  Restaurants.find()
    .lean()
    .sort({ [property]: sortBy }) //asc(ascending)正序 desc(descending)反序
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
  }
)


router.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const reg = new RegExp(keyword, 'i')

  Restaurants.find({
    $or: [
      { name: { $regex: reg } },
      { category: { $regex: reg } },
    ]
  })
    .lean()
    .then(restaurants => {
      if (!restaurants.length) {
        return res.render('null', { keyword })
      }
      return res.render('index', { restaurants, keyword })
    })
    .catch(error => console.log(error))
})

module.exports = router