const mongoose = require('mongoose')
const Schema = mongoose.Schema

ProductsSchema = Schema({
    product_code: String,
    product_name: String,
    product_detail: String,
    product_price: String,
    product_manufacture_date: Date,
    product_expired_date: Date
})

module.exports = mongoose.model('products', ProductsSchema)