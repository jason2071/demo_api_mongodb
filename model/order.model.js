const mongoose = require('mongoose')
const Schema = mongoose.Schema

OrdersSchema = Schema({
    product_id: String,
    qty: Number,
})
module.exports = mongoose.model('orders', OrdersSchema)