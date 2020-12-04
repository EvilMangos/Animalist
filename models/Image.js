const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let imageSchema = Schema({
  name: String,
  desc: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});

const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
