const express = require('express')
const app = express()
require("dotenv").config()
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) =>

    res.send('Home Page!')


)



app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))