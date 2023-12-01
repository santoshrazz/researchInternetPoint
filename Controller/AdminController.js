const adminModel = require("../model/Admin")
const jwt = require('jsonwebtoken')
// -----------------------> LoginAdmin Function to Login Admin <---------------------------
async function loginAdmin(req, res) {
    try {
        const { email, password } = req.body;
        // Checking if email or password is blank
        if (!email || !password) {
            return res.status(400).json({ message: "Not email or password" });
        }
        // Find admin from Db
        const result = await adminModel.findOne({ email });
        if (!result) {
            return res.status(200).json({ login: false, message: "Wrong Credentials" });
        }
        // Checking Admin Password
        if (result.password === password) {
            const id = result._id;
            const payload = { id: id };
            const jwtToken = jwt.sign(payload, "myKeyisMyKey")
            res.cookie("uttam", jwtToken, { expire: 360000 + Date.now() })
            return res.status(200).json({ login: true, message: "Success", token: jwtToken });
        }
        return res.status(400).json({ login: false, message: "Invalid Password" });
    } catch (error) {
        console.log(error);
        res.json({ message: "Error from catch", error });
    }
}

async function logOut(req, res) {
    try {
        const id = req.id;
        res.cookie('uttam', '', { expires: new Date(0), httpOnly: true });
        res.status(200).json({ Message: "Logout SuccessFully" })
    } catch (error) {
        res.status(400).json({ message: error.message })
        console.log(error.message);
    }
}
async function initialLogin(req, res) {
    try {
        const userId = req.id;
        if (!userId) {
            return res.status(400).json({ message: "Not Logged In" });
        }
        res.status(200).json({ message: "Logged in" });
    } catch (error) {

    }
}
module.exports = { loginAdmin, initialLogin, logOut }