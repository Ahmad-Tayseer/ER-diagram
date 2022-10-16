"use strict";

const roles = (sequelize, DataTypes) =>
  sequelize.define("roles", {
    nameInArabic: {
      type: DataTypes.STRING,
    },

    nameInEnglish: {
      type: DataTypes.STRING,
    },
  });

module.exports = roles;
