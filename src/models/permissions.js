"use strict";

const permissions = (sequelize, DataTypes) =>
  sequelize.define("permissions", {
    name: {
      type: DataTypes.STRING,
    },

    description: {
      type: DataTypes.STRING,
    },
  });

module.exports = permissions;
