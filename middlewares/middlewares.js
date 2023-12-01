const jwt = require("jsonwebtoken");

const verifyUser = async (req, res, next) => {
    try {
        const cookie = req.cookies;
        if (!cookie) {
            return res.status(400).json({ message: "Cookie Not Found" });
        }
        const finalCookie = cookie['uttam'];
        jwt.verify(finalCookie, 'myKeyisMyKey', (err, data) => {
            if (err) {
                return res.status(400).json({ message: "User Not Verified" });
            }

            req.id = data.id;
            next();
        })
    } catch (error) {
        console.log(error);
    }
}
module.exports = verifyUser;
