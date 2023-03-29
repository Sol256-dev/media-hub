const express = require("express");
const cors = require("cors");
const createError = require("http-errors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

const apiRoutes = require("./routes/api.route");
const apiUsers = require("./routes/api.users");

app.get("/", async (req, res, next) => {
  res.send({
    status: 200,
    message: "Awesome it works 🐻 ",
    api_documentation:
      "https://documenter.getpostman.com/view/24961611/2s93RNzapr#72085a2c-80a0-41e0-82b4-7a2a72eb5a60",
  });
});

app.use("/api/v1/media", cors(), apiRoutes);
app.use("/api/v1/users", cors(), apiUsers);
app.use("/api/v1/", cors(), require("./routes/api.supportTables"));

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
