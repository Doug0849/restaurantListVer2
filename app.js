const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.get('/', (req,res) => {
  res.send('This is Server')
})

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

app.listen(port, () => {
  console.log('Server is running on https://localhost:3000')
})