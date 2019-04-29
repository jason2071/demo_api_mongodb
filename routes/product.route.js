const Product = require('../model/product.model')

exports.findAll = async (req, res) => {
    const product = await Product.find()
    res.status(200).send({result : product})
}
