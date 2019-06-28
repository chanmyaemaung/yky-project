const mongoose = require('mongoose')
const log = console.log


const options = {
    useNewUrlParser: true,
    socketTimeoutMS: 60000 //or 90000
}

mongoose.connect('mongodb+srv://chanlay:chanlay123@yaykyiyar-ajgvf.azure.mongodb.net/yky-blog-api?retryWrites=true&w=majority', options).then(
    () => {
        log('MongoDB Connection Succeeded.')
    },
    err => {
        log(err)
    }
);




require('../models/posts')


// mongoose.connect('mongodb+srv://chanlay:chanlay123@yaykyiyar-ajgvf.azure.mongodb.net/yky-blog-api?retryWrites=true&w=majority', {
//     useNewUrlParser: true
// }, (err) => { 
//     if (!err) {
//         log('MongoDB Connection Succeeded.')
//     } else {
//         log('Error in DB connection : ' + err)
//     }
// });