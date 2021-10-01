module.exports = (sequelize, Model, DataTypes) => {
  class Article extends Model {}

  Article.init(
    {
      title: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.TEXT,
      },
      // likes: {
      //   type: DataTypes.INT,
      // },
    },
    {
      sequelize,
      modelName: "article",
    }
  );

  return Article;
};
