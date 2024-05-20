const controller = require("../controllers/saleManager.controller");

module.exports = function (app) {
  app.post("/addWhitelist", controller.addWhitelist);
  app.post("/updateWhitelist", controller.updateWhitelist);
  app.post("/getWhitelist", controller.getWhitelist);
};