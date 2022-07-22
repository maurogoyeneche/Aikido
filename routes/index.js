const mailRoute = require("./mailRoute");

module.exports = (app) => {
  app.use(mailRoute);
};
