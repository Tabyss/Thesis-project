const express = require("express");
const cors = require("cors");
const router = require("./routes");
const app = express();
require("dotenv").config();

const session =require("express-session")
const SequelizeStore = require("connect-session-sequelize");
const {sequelize}  = require("./models")
const sessionStore = SequelizeStore(session.Store)
const store = new sessionStore({
  db: sequelize
})

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);

(async () => {
  await sequelize.sync();
})();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(router);

app.listen(process.env.APP_PORT, () => {
  console.log("Server is going...");
});
