const adminRoute = require("express").Router();
const { loginAdmin, initialLogin, logOut } = require("../Controller/AdminController");
const verifyUser = require("../middlewares/middlewares");
adminRoute.get("/", () => {
    console.log("Working");
})
adminRoute.post("/login", loginAdmin)
adminRoute.get("/initLogin", verifyUser, initialLogin)
adminRoute.get("/logOut", verifyUser, logOut)

module.exports = adminRoute;