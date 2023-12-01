const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
        require: true,
    },
    startDate: {
        type: Date,
        require: true,
    },
    lastDate: {
        type: Date,
        require: true
    },
    noOfPost: {
        type: Number,
        require: true
    },
    officialLink: {
        type: String,
        require: true
    }
}, { timestamps: true })

const jobModel = mongoose.model("job", jobSchema);

module.exports = jobModel;