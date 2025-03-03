const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/place", async (req, res) => {
    const { userId, items } = req.body;
    const order = new Order({ userId, items });
    await order.save();
    res.json(order);
});

router.get("/list", async (req, res) => {
    const orders = await Order.find().populate("userId", "phone");
    res.json(orders);
});

module.exports = router;