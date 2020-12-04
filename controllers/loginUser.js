const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = (req, res) => {
  const e_mail = req.body.logE_mail;
  const password = req.body.logPassword;
  User.findOne({ e_mail: e_mail }, (error, user) => {
    if (user) {
      bcrypt.compare(password, user.password, (error, same) => {
        if (same) {
          req.session.userId = user._id;
          res.redirect("/");
        } else {
          res.redirect("/signIn", { err: true });
        }
      });
    }
  });
};
