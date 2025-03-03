const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/login", async (req, res) => {
    const { phone } = req.body;
    let user = await User.findOne({ phone });
    if (!user) {
        user = new User({ phone });
        await user.save();
    }
    res.json({ userId: user._id, isAdmin: user.isAdmin });
});

module.exports = router;