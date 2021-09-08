module.exports = (sequelize, Model, DataTypes) => {
  class Role extends Model {}

  Role.init(
    {
      Admin: {
        type: DataTypes.NUMBER,
      },
      Editor: {
        type: DataTypes.NUMBER,
      },
      Reader: {
        type: DataTypes.NUMBER,
      },
    },
    {
      sequelize,
      modelName: "role",
    }
  );

  return Role;
};
