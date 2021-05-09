const mongoose = require('mongoose')

const userStockTemplate = new mongoose.Schema({
    username:{
        type: String,
        required:true
    },
    symbol:{
        type: String,
        required:true
    },
    quantity:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('userstock',userStockTemplate)