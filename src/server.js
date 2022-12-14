"use strict";

const express = require("express");
const app = express();

app.use(express.json());

module.exports = {
  app: app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log(`I'm listnening on port ${PORT}`);
    });
  },
};
