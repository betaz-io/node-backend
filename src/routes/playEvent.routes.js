const controller = require("../controllers/playEvent.controller");

module.exports = function (app) {
  app.post("/getEventsByPlayer", controller.getEventsByPlayer);
  app.post("/getEvents", controller.getEvents);
  app.post("/getRareWins", controller.getRareWins);
};
