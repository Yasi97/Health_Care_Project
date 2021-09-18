var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

const app = express();
var mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb Connection success!");
});

const userRouter = require("./routes/getInfo");
app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on port:${PORT}`);
});
