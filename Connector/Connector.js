const mongoose = require("mongoose");
const URL = process.env.MONGODB_URI

const connect = mongoose.connect(URL).then(() => {
    console.log("Db connected");

}).catch(() => {
    console.log("Couldn't Connect to DB");
})