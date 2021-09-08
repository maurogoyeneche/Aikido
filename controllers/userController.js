const { User } = require("../models");

const show = (req, res) => {
  res.render("userRegister");
};

const store = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.render("home");
  } catch (error) {
    console.log(error);
    res.redirect("back");
  }
};

const update = (req, res) => {};

const destroy = (req, res) => {};

module.exports = {
  show,
  store,
  update,
  destroy,
};
