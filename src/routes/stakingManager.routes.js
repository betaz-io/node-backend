const controller = require("../controllers/stakingManager.controller");

module.exports = function (app) {
  app.post("/updatePendingUnstake", controller.updatePendingUnstake);
  app.post("/getPendingUnstake", controller.getPendingUnstake);
  app.post("/updateHistoryStaking", controller.updateHistoryStaking);
  app.post("/getHistoryStaking", controller.getHistoryStaking);
  app.post("/getRewardByCaller", controller.getRewardByCaller);
};
