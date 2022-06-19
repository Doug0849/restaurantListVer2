const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const Restaurant = require('../restaurant')
const User = require('../user')
const restaurantSeeds = require('../../restaurant.json').results
const db = require('../../config/mongoose')

const SEED_USER = [{
  name: 'user1',
  email: 'user1@example.com',
  password: '12345678',
  restaurant: restaurantSeeds.slice(0, 3)
},
{
  name: 'user2',
  email: 'user2@example.com',
  password: '12345678',
  restaurant: restaurantSeeds.slice(3, 6)
},
]

db.once('open', () => {
  Promise.all(Array.from(SEED_USER, seedUser => {
    return bcrypt
      .genSalt(10)
      .then(salt => bcrypt.hash(seedUser.password, salt))
      .then(hash =>
        User.create({
          name: seedUser.name,
          email: seedUser.email,
          password: hash
        })
      )
      .then(user => {
        const userId = user._id
        seedUser.restaurant.forEach(restaurant => {
          restaurant.userId = userId
        })
        return Restaurant.create(seedUser.restaurant)
      })
  }))
    .then(() => {
      console.log('seeds create finished.')
      process.exit()
    })
})