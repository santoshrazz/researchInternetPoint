require("dotenv").config();
const express = require("express");
const cookieParsar = require("cookie-parser")
require("./Connector/Connector");
const adminRoute = require("./Routes/Admin");
const cors = require("cors");
const jobRoute = require("./Routes/JobRoute");
const customerRouter = require("./Routes/Customer_Route");
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
// app.use(cors())
app.use(cors({
    origin: 'https://researchinternetpoint.onrender.com',
    credentials: true, // Allow sending cookies and other credentials
}));
app.use(cookieParsar());
app.use(express.urlencoded({ extended: true }))
app.use("/admin", adminRoute);
app.use("/job", jobRoute);
app.use("/customer", customerRouter);
app.listen(PORT, () => {
    console.log(`listining at PORT ${PORT}`);
})