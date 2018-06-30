const express = require('express')
const hbs = require('hbs')
const fs = require('fs')
const database = require('mysql')
const validator = require('validator')
const con = database.createConnection({
host: 'localhost',
user: 'root',
password: 'root',
database: 'node'

})


con.connect()
var app = express()
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

hbs.registerHelper('year', () => {

  return new Date().getFullYear()
})




app.get('/', (req, res) => {

// res.send('<h1>my name is jeff</h1>')

res.render('index.hbs', {

  pageTitle: 'Aloosh',
  currentYear: new Date().getFullYear()

})
})

app.get('/about', (req, res) => {

  res.render('about.hbs', {
  pageTitle: 'Aloosh',
  currentYear: new Date().getFullYear()

  })
})

app.get('/addUser', (req, res) => {
var {name, email} = req.query
var sql = `SELECT * FROM users`
  con.query(sql, (err, results) => {

    if(err) throw err;

     res.send(JSON.stringify(results[0]))


  })
})
var i = validator.isEmail('asdsdsdsd@gmail.com')
console.log(i)
app.listen(3000, () => {

  console.log('server is up')
})
