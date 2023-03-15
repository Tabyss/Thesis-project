const express = require("express");
const cors = require("cors");
const router = require("./routes");

require("dotenv").config();

const app = express();
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
