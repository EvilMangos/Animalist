const { Router, urlencoded } = require("express");
const User = require("../models/User");

const router = Router();

const createUserController = require("../controllers/createUser");
const loginUserController = require("../controllers/loginUser");
const createPostController = require("../controllers/createPost");

router.get("/", async (req, res, next) => {
  let user = await User.findById(loggedIn);
  res.render("home/home", {
    title: "Home page",
    isHome: true,
    loggedIn: loggedIn,
    user: sendUser(user),
  });
});

router.get("/posts", async (req, res, next) => {
  let user = await User.findById(loggedIn);
  res.render("posts/posts", {
    title: "Posts",
    isPosts: true,
    loggedIn: loggedIn,
    user: sendUser(user),
  });
});

router.get("/news", async (req, res, next) => {
  let user = await User.findById(loggedIn);
  res.render("news/news", {
    title: "News",
    isNews: true,
    loggedIn: loggedIn,
    user: sendUser(user),
  });
});

router.get("/about", async (req, res, next) => {
  let user = await User.findById(loggedIn);
  res.render("about/about", {
    title: "About",
    isAbout: true,
    loggedIn: loggedIn,
    user: sendUser(user),
  });
});

router.get("/post/create", async (req, res) => {
  if (req.session.userId) {
    let user = await User.findById(loggedIn);
    res.render("posts/postCreate", {
      title: "Post Creator",
      loggedIn: loggedIn,
      user: sendUser(user),
    });
  } else {
    res.redirect("/");
  }
});

router.get("/logout", async (req, res) => {
  req.session.userId = null;
  res.redirect("/");
});

router.post("/signUp", createUserController);
router.post("/signIn", loginUserController);
router.post("/create/post", createPostController);

module.exports = router;
function sendUser(user) {
  if (!user) {
    user = {
      firstName: null,
      lastName: null,
      e_mail: null,
    };
  }
  return {
    username: user["firstName"] + " " + user["lastName"],
    e_mail: user["e_mail"],
  };
}
