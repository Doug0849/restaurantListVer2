const express = require('express')
const router = express.Router()

const Restaurants = require('../../models/restaurant')

router.get('/', (req, res) => {
  Restaurants.find()
    .lean()
    .sort({ _id: 'asc' }) //asc(ascending)正序 desc(descending)反序
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

router.get('/sort', (req, res) => {
  const sort = req.query.sort
  if (sort === 'A'){
  Restaurants.find()
    .lean()
    .sort({ name: 'asc' }) //asc(ascending)正序 desc(descending)反序
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
  }

  if (sort === 'Z') {
    Restaurants.find()
      .lean()
      .sort({ name: 'desc' }) //asc(ascending)正序 desc(descending)反序
      .then(restaurants => res.render('index', { restaurants }))
      .catch(error => console.log(error))
  }

  if (sort === 'category') {
    Restaurants.find()
      .lean()
      .sort({ category: 'asc' }) //asc(ascending)正序 desc(descending)反序
      .then(restaurants => res.render('index', { restaurants }))
      .catch(error => console.log(error))
  }

  if (sort === 'location') {
    Restaurants.find()
      .lean()
      .sort({ location: 'asc' }) //asc(ascending)正序 desc(descending)反序
      .then(restaurants => res.render('index', { restaurants }))
      .catch(error => console.log(error))
  }
})


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