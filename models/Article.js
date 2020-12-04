const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  photo: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  datePosted: {
    type: Date,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
