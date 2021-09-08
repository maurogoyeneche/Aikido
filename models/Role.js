module.exports = (sequelize, Model, DataTypes) => {
  class Role extends Model {}

  Role.init(
    {
      type: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "role",
    }
  );

  return Role;
};
