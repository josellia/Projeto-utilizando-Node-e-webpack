const { Schema, model } = require('mongoose');


const DogShema = new Schema({
    name: { type: String, required: true },
    breed: { type: String, required: true },
    imagePath: { type: String },
    created_at: { type: Date, default: Date.now }

});

module.exports = model('dog', DogShema);