const seeds = require('../../restaurant.json')
const Restaurant = require('../restaurant')

const db = require('../../config/mongoose')

db.once('open', () => {
  Restaurant.create(seeds.results)
  console.log('done')
})