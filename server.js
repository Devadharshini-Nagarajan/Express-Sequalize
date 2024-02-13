const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequalize = require("./api/dbConnection");
const userRouter = require("./api/routes/user");
const productRouter = require("./api/routes/product");

const port = process.env.PORT || 3100;
const app = express();

// Sync with SQL DB
sequalize
  .sync({ force: false })
  .then(() => {
    console.log("Tables synced");
  })
  .catch((err) => {
    console.log("Unable to sync tables...", err);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// routers
app.use("/users", userRouter);
app.use("/products", productRouter);

// Custom - If api doesnt get into any of the routes specified abve it comes here
app.use((req, res, next) => {
  const error = new Error("API URL not found");
  error.status = 404;
  next(error); // frwrd this err
});

// Even if api goes inside any route, it will be triggered if anywhere error was thrown
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

app.listen(port);
