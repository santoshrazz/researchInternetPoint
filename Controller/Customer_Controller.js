const customerModel = require("../model/Email.models")
async function saveCustomer(req, res, next) {
    try {
        const { fullName, email, Mob_Number, message } = req.body;
        if (!fullName || !email || !Mob_Number || !message) {
            return res.status(400).json({ message: "Can't get require data to save customer", success: false });
        }
        const result = await customerModel.create({
            fullName, email, Mob_Number, message
        })
        if (!result) {
            return res.status(400).json({ message: "Problem in saving into Db", success: false });
        }
        res.status(201).json({
            message: "User saved successfully",
            success: true
        })
    } catch (error) {
        res.status(404).json({ error });
    }
}

async function getCustomer(req, res, next) {
    try {
        const result = await customerModel.find({});
        if (!result) {
            return res.status(400).json({ message: "Can't find data in DB", success: false });
        }
        res.status(200).json({
            User: result,
            success: true
        })
    } catch (error) {

    }
}
async function deleteCustomer(req, res, next) {
    try {
        const _id = req.params.id;
        const result = await customerModel.deleteOne({ _id });
        if (!result) {
            return res.status(400).json({ message: "Can't Delete data in DB", success: false });
        }
        res.status(200).json({
            User: result,
            success: true
        })
    } catch (error) {

    }
}
module.exports = { saveCustomer, getCustomer, deleteCustomer }