const mongoose = require("mongoose");

const customer_Schema = mongoose.Schema({
    fullName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    Mob_Number: {
        type: String,
        require: true,
        unique: true
    },
    message: {
        type: String,
        require: true,
    },
})

const emailModel = mongoose.model("customer", customer_Schema)
module.exports = emailModel;