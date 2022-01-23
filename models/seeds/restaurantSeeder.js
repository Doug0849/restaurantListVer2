const seeds = require('../../restaurant.json')
const Restaurant = require('../restaurant')

const db = require('../../config/mongoose')

db.once('open', () => {
  for (let i = 0; i < seeds.results.length; i++) {
    Restaurant.create({
      name: seeds.results[i].name,
      name_en: seeds.results[i].name_en,
      category: seeds.results[i].category,
      image: seeds.results[i].image,
      location: seeds.results[i].location,
      phone: seeds.results[i].phone,
      google_map: seeds.results[i].google_map,
      rating: seeds.results[i].rating,
      description: seeds.results[i].description
    })
  }
  console.log('done')
})