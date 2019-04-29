const express = require('express')
const mongoose = require('mongoose')
const multipart = require('connect-multiparty')

const app = express()
const multipartMiddleware = multipart()

mongoose.connect('mongodb://localhost:27017/demo', {useNewUrlParser: true})
    .then(db => console.log('db connected'))
    .catch(err => console.log(err))

const order = require('./routes/order.route')
app.get('/order', order.findAll)
app.post('/order/add', multipartMiddleware, order.add)

const product = require('./routes/product.route')
app.get('/product', product.findAll)

app.get('*', (req, res) => {
    res.json({
        results: 'Not Found'
    })
})
app.listen(process.env.PORT || 3000)