const mongoose = require ('mongoose');

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },   
    genre: String,
    actors: [String],
    description: String
});

const Movies = mongoose.model('Movies', movieSchema)

module.exports = Movies;