const path = require("path")
const express = require('express')
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser')
const app = express()
require("dotenv").config()
const connectDB = require('./server/config/dbConnection')
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')))
app.set("views", path.join(__dirname, 'server', 'views'))
app.set('view engine', 'ejs')



connectDB();

// routes
app.use(require('./server/routes/page'));
app.use('/email', require('./server/routes/api/mail'));


// app.get('/', (req, res) => {
//     const data = "Data";
//     res.render('index', { data })
// })

// app.get('/_index', (req, res) => {
//     res.render('_index')
// })







app.use('/*', (req, res) => {
    res.render('404')
})


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))