const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from simple JWT Server");
});

app.post("/login", (req, res) => {
  const user = req.body;
  console.log(user);
  //   DANGER: Do not check password here for serious application
  //   Use proper process for hashing and checking
  //   After completing all authenticatin related verification, issue JWT token
  if (user.password === "123456") {
  } else {
  }
  res.send({ success: true });
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
