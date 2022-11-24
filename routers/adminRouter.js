const express = require("express");
const { getNumNeedCase, getNumdonationOrder, getUserNumdonationOrder, getNumActiveCase, getCounter, getSearchAllNeedyCase, getlasetNeedyCase, getinfoUser, getState, getRecentUpdate, } = require("../controller/admin");



const adminRouter = express.Router();

adminRouter.get("/numcase",getNumNeedCase)
adminRouter.get("/numorderDonation",getNumdonationOrder)
adminRouter.get("/numorderDonationUser",getUserNumdonationOrder)
adminRouter.get("/numberofActiv",getNumActiveCase)
adminRouter.get("/counter",getCounter)
adminRouter.get("/search_2",getSearchAllNeedyCase)
adminRouter.get("/lastcase",getlasetNeedyCase)
adminRouter.get("/user",getinfoUser)
adminRouter.get("/state",getState)
adminRouter.get("/update",getRecentUpdate)

module.exports = adminRouter