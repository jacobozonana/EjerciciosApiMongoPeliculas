const mongoose = require('mongoose');
const { config } = require('../config')

mongoose.connect(
    config.db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(()=> console.log ('Connected to MongoDB'))
    .catch (()=> console.log ('Error of database conection'))


