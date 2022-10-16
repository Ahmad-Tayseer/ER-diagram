"use strict";

const users = (sequelize, DataTypes) =>
  sequelize.define("users", {
    name: {
      type: DataTypes.STRING,
    },

    contactNumber: {
      type: DataTypes.STRING,
    },

    emailAddress: {
      type: DataTypes.STRING,
    },
  });

module.exports = users;
