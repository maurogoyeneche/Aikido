module.exports = (sequelize, Model, DataTypes) => {
  class Comment extends Model {}

  Comment.init(
    {
      content: {
        type: DataTypes.TEXT,
      },
      // likes: {
      //   type: DataTypes.NUMBER,
      // },
    },
    {
      sequelize,
      modelName: "comment",
    }
  );

  return Comment;
};
