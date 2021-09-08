module.exports = (sequelize, Model, DataTypes) => {
  class Article extends Model {}

  Article.init(
    {
      id: {
        type: DataTypes.NUMBER,
      },
      title: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.TEXT,
      },
      likes: {
        type: DataTypes.NUMBER,
      },
    },
    {
      sequelize,
      modelName: "article",
    }
  );

  return Article;
};
