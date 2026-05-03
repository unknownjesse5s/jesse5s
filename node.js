const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

const user = {
  username: "admin",
  password: "123456" // nanti harus di-hash!
};

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    res.send("Login berhasil!");
  } else {
    res.send("Username atau password salah");
  }
});

app.listen(3000);