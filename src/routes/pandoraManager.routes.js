const controller = require("../controllers/pandoraManager.controller");

module.exports = function (app) {
  app.post("/updateNftByCaller", controller.updateNftByCaller);
  app.post("/getNftByCaller", controller.getNftByCaller)
  app.post("/getPandoraYourBetHistory", controller.getPandoraYourBetHistory)
};
