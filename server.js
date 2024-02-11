const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequalize = require("./api/dbConnection");
const userRouter = require("./api/routes/user");

const port = process.env.PORT || 3100;
const app = express();

// Sync with SQL DB
sequalize
  .sync({ force: true })
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


// Error Handling
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(res.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

app.listen(port);
