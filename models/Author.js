module.exports = (sequelize, Model, DataTypes) => {
  class Author extends Model {}

  Author.init(
    {
      firstname: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "author",
    }
  );

  return Author;
};
