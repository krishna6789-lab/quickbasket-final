const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    phone: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", UserSchema);