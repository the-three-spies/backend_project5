const express = require("express");

const {  getAllNeedyCase, createNeedyCase,getNeedyCaseByUserId,getNeedyCasebyCategoryId,UpdateNeedyCaseByCaseId, deletNeedyCaseByCaseID, unActiveOrder, getNeedyMoneyCaseByUserId, getNeedyThingsCaseByUserId } = require("../controller/needyCase");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization")





const needyCaseRouter = express.Router();


needyCaseRouter.post("/",authentication,authorization('Create_Case'), createNeedyCase);
needyCaseRouter.get("/", getAllNeedyCase);
needyCaseRouter.get("/myCase",authentication, getNeedyCaseByUserId);
needyCaseRouter.get("/needyCategory/:id", getNeedyCasebyCategoryId);
needyCaseRouter.put("/:id",authentication,authorization('Update_Case'), UpdateNeedyCaseByCaseId);
needyCaseRouter.delete("/:id",deletNeedyCaseByCaseID)
needyCaseRouter.put("/unactive/:id",unActiveOrder)
needyCaseRouter.get("/monyCase",authentication,getNeedyMoneyCaseByUserId)
needyCaseRouter.get("/thingCase",authentication,getNeedyThingsCaseByUserId)
module.exports = needyCaseRouter;
