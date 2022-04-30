const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user) return res.status(401);
  if (!bcrypt.compareSync(req.body.password, user.password))
    return res.status(401);
  const token = jwt.sign({ email: req.body.email }, process.env.TOKEN_KEY);
  res.json({ token: token });
};

/* const logout = async (req, res) => {
  //const { email, token } = req.body;//
  const user = await User.findOne({ where: { email: req.body.email } });
  user.token = "";
  user.save();
  res.status(200).send("usuario deslogueado");
}; */

const showRegister = (req, res) => {
  res.render("home");
};

const store = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = jwt.sign({ id: req.body.id }, process.env.TOKEN_KEY);
    // res.render("home");
    res.json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "meeh" });
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
  res.json("home", { user });
};

const destroy = async (req, res) => {
  const user = await User.destroy({
    where: { email: req.body.email },
    force: true,
  });
  res.render("home");
};

module.exports = {
  showRegister,
  store,
  update,
  destroy,
  login,
  logout,
};
