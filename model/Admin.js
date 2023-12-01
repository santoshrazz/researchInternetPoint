const mongoose = require("mongoose");
const schema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})
const adminModel = mongoose.model("admin", schema)

module.exports = adminModel;
