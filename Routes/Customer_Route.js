const customerRouter = require("express").Router();
const { saveCustomer, getCustomer, deleteCustomer } = require("../Controller/Customer_Controller");

customerRouter.post("/saveDetails", saveCustomer)
customerRouter.get("/getDetails", getCustomer)
customerRouter.get("/deleteCustomer:id", deleteCustomer)

module.exports = customerRouter;