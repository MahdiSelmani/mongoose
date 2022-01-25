const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    brand: {
        type: String,
    required: true},
    color: String,
    energy: String,
    type: String
})

module.exports = mongoose.model('Car', carSchema);