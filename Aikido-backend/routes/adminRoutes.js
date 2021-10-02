const express = require("express");
const adminRouter = express.Router();
const articleController = require("../controllers/articleController");

// Rutas del Admin:
// ...
adminRouter.get("/", articleController.show); //dashboard admin article list
adminRouter.post("/article", articleController.store);
adminRouter.patch("/article/:id", articleController.update);
adminRouter.delete("/article/:id", articleController.destroy);

module.exports = adminRouter;
