require('dotenv').config()
require('./database/db')
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')

// Instatntiate
const app = express()

// Port
let port = process.env.PORT || 5000

// Paths
const view = path.join(__dirname, './templates/views')
const layout = path.join(__dirname, './templates/layouts/main.ejs')

// Body Parser & JSON
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Template Engine
app.set('view engine', 'ejs')
app.set('views', view)

// Layout
app.use(expressLayouts)
app.set('layout', layout)

// Routes
app.use('/', require('./templates/routes/route'))

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})
