const express = require("express");
const publicRouter = express.Router();
const pageController = require("../controllers/pagesController");
const userController = require("../controllers/userController");
const mailController = require("../controllers/mailController");

// Rutas del Públicas:
publicRouter.get("/", pageController.showHome);
publicRouter.get("/register", userController.showRegister);
publicRouter.post("/users", userController.store);
publicRouter.post("/token", userController.login);
// publicRouter.post("/logout", userController.logout);
publicRouter.patch("/users", userController.update);
publicRouter.delete("/users", userController.destroy);
//  publicRouter.get("/article/:slug", pageController.showArticle);
// publicRouter.get("/login", pageController.showLogin);
// publicRouter.get("/register", pageController.showRegister);
// publicRouter.post("/login", userController.login);
publicRouter.post("/send-mail", mailController.sendMail);

module.exports = publicRouter;
