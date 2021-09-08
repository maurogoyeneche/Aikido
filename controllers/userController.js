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

const update = async (req, res) => {
  const { username, email, city, address } = req.body;
  const user = await User.update(
    {
      username,
      email,
      city,
      address,
    },
    { where: { email: req.body.email } }
  );
  res.render("home", { user });
};

const destroy = async (req, res) => {
  const user = await User.destroy({ where: { email: req.body.email } });
  res.render("home");
};

module.exports = {
  showRegister,
  store,
  update,
  destroy,
};
