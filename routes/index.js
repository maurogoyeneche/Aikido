const publicRoutes = require("./publicRoutes");
const adminRoutes = require("./adminRoutes");
const mailRoute = require("./mailRoute");

module.exports = (app) => {
  // app.use(publicRoutes);
  // app.use("/admin", adminRoutes);
  app.use(mailRoute);
};
