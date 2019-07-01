const express = require('express')
const path = require('path')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const expressSanitizer = require('express-sanitizer');
const jsonData = require('./public/data/data.json')
const log = console.log
// Init app
const app = express()


// Model Config
require('./models/posts')

// DB Config
const db = require('./configs/keys').mongoURI

// Connect to MongoDB
mongoose.connect(db, {
        useNewUrlParser: true
    })
    .then(() => log('MongoDB Connected...'))
    .catch(err => log(err))



// View engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Set public folder
app.use(express.static(path.join(__dirname, 'public')))

// Body Parser middleware
app.use(express.urlencoded({
    extended: true
}))

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

// catch error handleing
app.use((req, res) => {
    res.status(404).render('404', {
        title: 'Yay Kyi Yar Travel & Tour: Search Yay Kyi Yar Myanmar Hotels, Cheap Flights, Vacations, Tours',
        navTitle: 'Yay Kyi Yar',
        company: 'Travel & Tour Co., Ltd.',
        jsonData: jsonData
    })
})

// Start the server
const port = process.env.PORT || 4444
app.listen(port, () => {
    log(`Server is running on port >>> ${port} <<<<`)
})