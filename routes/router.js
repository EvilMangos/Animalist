const { Router } = require("express");
const router = Router();

router.get("/", (req, res, next) => {
  res.render("home", {
    title: "Home page",
  });
});

module.exports = router;
