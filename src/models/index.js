"use strict";

const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
const POSTGRES_URI =
  process.env.NODE_ENV === "test" ? "sqlite:memory" : process.env.DATABASE_URL;

const usersModel = require("./users");
const rolesModel = require("./roles");
const permissionsModel = require("./permissions");

let SequelizeOptions =
  process.env.NODE_ENV === "production"
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {};

let sequelize = new Sequelize(POSTGRES_URI, SequelizeOptions);
sequelize.options.logging = false;

const users = usersModel(sequelize, DataTypes);
const roles = rolesModel(sequelize, DataTypes);
const permissions = permissionsModel(sequelize, DataTypes);

users.hasMany(roles, {
  foreignKey: "user_Id",
  sourceKey: "id",
});
roles.belongsTo(users, {
  foreignKey: "user_Id",
  sourceKey: "id",
});

roles.hasMany(permissions, {
  foreignKey: "role_Id",
  sourceKey: "id",
});
permissions.belongsTo(roles, {
  foreignKey: "role_Id",
  sourceKey: "id",
});

module.exports = {
  db: sequelize,
  Users: users,
  Roles: roles,
  Permissions: permissions,
};
