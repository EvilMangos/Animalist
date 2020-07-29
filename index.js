const express = require("express");
const hbs = require("hbs");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const homeRouter = require("./routes/router");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.engine(
  "hbs",
  exphbs({
    layoutsDir: "views/layouts",
    defaultLayout: "layout",
    extname: "hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials(__dirname + "/views/partials");

app.use(homeRouter);

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://EvilMango:13579qwe@beginnereu.95whs.mongodb.net/animalist",
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );
    app.listen(PORT, () => {
      console.log(`Server has been started on ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

start();
