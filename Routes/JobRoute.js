const { handlePostJob, getAllJobs } = require("../Controller/JobController");
const verifyUser = require("../middlewares/middlewares");
const jobRoute = require("express").Router();

jobRoute.post('/postJob', verifyUser, handlePostJob);
jobRoute.get("/allJobs", getAllJobs);
module.exports = jobRoute;