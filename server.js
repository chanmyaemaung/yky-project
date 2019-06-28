const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
require('./configs/keys') // DB
const methodOverride = require('method-override')
const expressSanitizer = require('express-sanitizer');
const log = console.log
// Init app
const app = express()


// View engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Set public folder
app.use(express.static(path.join(__dirname, 'public')))

// Body Parser middleware
// parse application/x-www.form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true // Really important!
}))
// parse application/json
app.use(bodyParser.json())

// Mount express-sanitizer middleware here
app.use(methodOverride("_method"));
app.use(expressSanitizer());


// Set routes
const index = require('./routes/index')
const destination = require('./routes/destination')
const team = require('./routes/team')
const gallery = require('./routes/gallery')
const blog = require('./routes/blog')
const contact = require('./routes/contact')


// Middleware
app.use('/', index)
app.use('/destination', destination)
app.use('/team', team)
app.use('/gallery', gallery)
app.use('/blog', blog)
app.use('/contact', contact)

// Start the server
const port = process.env.PORT || 4444
app.listen(port, () => {
    log(`Server is running on port >>> ${port} <<<<`)
})