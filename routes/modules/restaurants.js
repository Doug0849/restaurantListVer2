const express = require('express')
const router = express.Router()

const Restaurants = require('../../models/restaurant')

router.get('/new', (req, res) => {
  return res.render('new')
})
//為什麼放到後面就不能使用了?

router.post('/new', (req, res) => {
  const userId = req.user._id
  const { name, name_en, category, location, google_map, phone, image, description } = req.body
  return Restaurants.create({ name, name_en, category, location, google_map, phone, image, description, userId })
    .then(() => res.redirect('/'))
})

router.get('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Restaurants.findOne({ _id, userId })
    .lean()
    .then(restaurant => res.render('show', { restaurant }))
    .catch(error => console.log(error))
})

router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Restaurants.findOne({ _id, userId })
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  const { name, name_en, category, location, google_map, phone, image, description } = req.body
  return Restaurants.findOne({_id, userId})
    .then(restaurant => { 
      restaurant = Object.assign(restaurant, req.body)
      return restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Restaurants.findOne({ _id, userId })
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router