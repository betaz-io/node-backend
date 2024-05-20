const controller = require("../controllers/queue.controller");

module.exports = function (app) {
  app.post("/updateNFTQueue", controller.updateNFTQueue);
};