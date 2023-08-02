const express = require('express')
const app = express()
const port = 3000

// const expressLayouts = require('express-ejs-layouts')
const path = require('path')

// app.use(expressLayouts)
app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('layout', './layouts/master')

app.get('/', (req, res) => {
  res.render('pages/index')
})

app.get('/ben', (req, res) => {
  res.send('asdfsdf')
})
app.get('/about', (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1
  res.render('pages/about', { rand: num })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
