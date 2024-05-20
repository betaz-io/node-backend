const controller = require("../controllers/email.controller");

module.exports = function (app) {
  app.post("/sendEmail", controller.sendEmail);
  app.post("/getSubcribeEmail", controller.getSubcribeEmail);
  app.post("/getEmailExist", controller.getEmailExist);
};
