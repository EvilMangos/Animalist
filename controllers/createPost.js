module.exports = (req, res) => {
  User.create(
    {
      ...req.body,
      author: req.session.userId,
      datePosted: new Date(),
    },
    (error, article) => {
      if (error) alert(error.errors.message);
      res.redirect("/posts");
    }
  );
};
