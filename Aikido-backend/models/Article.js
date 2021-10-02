module.exports = (sequelize, Model, DataTypes) => {
  class Article extends Model {}

  Article.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true,
        isAlphanumeric: true,
        max: 70,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
        notEmpty: true,
        min: 3,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      deletedAt: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "article",
    }
  );

  return Article;
};
