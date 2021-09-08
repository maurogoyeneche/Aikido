const { User } = require("../models");

const showRegister = (req, res) => {
  res.render("home");
};

const store = async (req, res) => {
  try {
    const user = await User.create(req.body);
    // res.render("home");
    res.json(user);
  } catch (error) {
    console.log(error);
    res.redirect("back");
  }
};

const update = (req, res) => {};

const destroy = (req, res) => {};

module.exports = {
  showRegister,
  store,
  update,
  destroy,
};
