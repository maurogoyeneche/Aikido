const express = require("express");
const mailRouter = express.Router();
const mailController = require("../controllers/mailController");

mailRouter.post("/send-mail", mailController.sendMail);

module.exports = mailRouter;
