const User = require("../models/User");

module.exports = async (req, res) => {
  if (req.body.confirmPassword === req.body.password) {
    User.create(req.body, (error, user) => {
      if (error) alert(error.errors.message);
      res.redirect("/");
    });
  }
};
