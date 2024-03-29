const path = require("path")
const express = require('express')
const session = require('express-session');
const nodemailer = require("nodemailer");
const connectDB = require('./server/config/dbConnection')
const bodyParser = require('body-parser')
const router = require('./server/routes')
const { countRequest } = require('./server/middleware/request')
const app = express()
require("dotenv").config()
const PORT = process.env.PORT || 5500;
const mongoose = require('mongoose')
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.set("views", path.join(__dirname, 'server', 'views'))

app.set('view engine', 'ejs')


// Configure session middleware
app.use(session({
  secret: 'jakazapro',
  resave: false,
  saveUninitialized: true
}));

connectDB();
app.use(countRequest)

app.use(router)

// routes
// app.use(require('./server/routes/page'));
// app.use(require('./server/routes/api/project'))
// app.use(require('./server/routes/api/skill'))
app.use('/email', require('./server/routes/api/mail'));

app.use('/*', (req, res) => {
  res.render('404')
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
