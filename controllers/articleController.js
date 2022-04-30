const { Article } = require("../models");

const show = async (req, res) => {
  const articles = await Article.findAll();
  res.json(articles);
};

const store = async (req, res) => {
  const newArticle = await Article.create(req.body);
  res.json(newArticle);
};

const update = async (req, res) => {
  const { title, content, image } = req.body; // para evitar descriminar cada parametro del update("title:req.body.title")
  const updateArticle = await Article.update(
    { title, content, image },
    { where: { id: req.body.id } }
  );
  res.json(updateArticle);
};

const destroy = async (req, res) => {
  const destroyArticle = await Article.destroy({
    where: { id: req.params.id },
  });
  res.json(destroyArticle);
};

module.exports = {
  show,
  store,
  update,
  destroy,
};
