const path = require("path")
const express = require('express')
<<<<<<< Updated upstream
const nodemailer = require("nodemailer");
const connectDB = require('./server/config/dbConnection')
=======
>>>>>>> Stashed changes
const bodyParser = require('body-parser')
const { countRequest } = require('./server/middleware/request')
const app = express()
require("dotenv").config()
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose')
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
const connectDB = require('./server/config/dbConnection');
app.use(express.static(path.join(__dirname, 'public')))
app.set("views", path.join(__dirname, 'server', 'views'))
app.set('view engine', 'ejs')


<<<<<<< Updated upstream
connectDB();
app.use(countRequest)
=======
//middleware

>>>>>>> Stashed changes

// routes
app.use(require('./server/routes/page'));
app.use(require('./server/routes/api/project'))
app.use('/email', require('./server/routes/api/mail'));

<<<<<<< Updated upstream

// app.get('/', (req, res) => {
//     const data = "Data";
//     res.render('index', { data })
// })

// app.get('/_index', (req, res) => {
//     res.render('_index')
// })




=======
app.get('/_index', (req, res) => {
    res.render('_index')
})
>>>>>>> Stashed changes

app.use('/*', (req, res) => {
  res.render('404')
})


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
