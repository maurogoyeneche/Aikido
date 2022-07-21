const express = require("express");
const adminRouter = express.Router();
const articleController = require("../controllers/articleController");
const checkJwt = require("express-jwt/lib");

// Rutas del Admin:
// ...

// adminRouter.use(
//   checkJwt({ secret: process.env.TOKEN_KEY, algorithms: ["HS256"] })
// );
// adminRouter.get("/", articleController.show); //dashboard admin article list
// adminRouter.post("/article", articleController.store);
// adminRouter.patch("/article/:id", articleController.update);
// adminRouter.delete("/article/:id", articleController.destroy);

// module.exports = adminRouter;
