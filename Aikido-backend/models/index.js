const { Sequelize, Model, DataTypes } = require("sequelize/types");

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  }
);

const User = require("./User")(sequelize, Model, DataTypes);
const Comment = require("./Comment")(sequelize, Model, DataTypes);
const Article = require("./Article")(sequelize, Model, DataTypes);
const Role = require("./Role")(sequelize, Model, DataTypes);

module.exports = {
  sequelize,
  User,
  Comment,
  Article,
  Role,
};
