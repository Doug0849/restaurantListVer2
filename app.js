const express = require('express')
const app = express()
const port = 3000

const methodOverride = require('method-override')
const routes = require('./routes')

require('./config/mongoose')

const exphbs = require('express-handlebars')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true })) //body-parser
app.use(methodOverride('_method'))
app.use(routes)

app.listen(port, () => {
  console.log('Server is started on http://localhost:3000 ...')
})