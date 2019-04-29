const Order = require('../model/order.model')

exports.findAll = async (req, res) => {
    const order = await Order.aggregate([{
        $lookup: {
            from: "inventory",
            localField: "item",
            foreignField: "sku",
            as: "inventory_docs"
        }
    }])
    res.status(200).send({
        result: order
    })
}

exports.add = async (req, res) => {
    const order = new Order(req.body);
    await order.save((err, rows) => {
        if (err) {
            res.status(500).send({
                error: req.body.name + " is duplicate"
            })
        } else {
            res.status(200).send(rows)
        }
    })
}