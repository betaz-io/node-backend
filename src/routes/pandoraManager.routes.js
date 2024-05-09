const controller = require("../controllers/pandoraManager.controller");

module.exports = function (app) {
  app.post("/updateNftByCallerAndNftId", controller.updateNftByCallerAndNftId);
  app.post("/getNftByCaller", controller.getNftByCaller);
  app.post("/getPandoraYourBetHistory", controller.getPandoraYourBetHistory);
  app.post("/getPandoraBetHistory", controller.getPandoraBetHistory);
  app.post("/getPandoraRewardHistory", controller.getPandoraRewardHistory);
  app.post("/getNftUsedByCaller", controller.getNftUsedByCaller);
  app.post("/getHashByRequestId", controller.getHashByRequestId);
};
