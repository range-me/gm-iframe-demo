const express = require("express");
const path = require("path");
const app = express();
const port = 1234

app.get("/ecrm-meeting-registration", (req, res) => {
  res.set("Content-Type", "text/html")
  // current X-Frame-Options header should be removed and replaced with Content-Security-Policy
  // res.set("X-Frame-Options", "sameorigin")
  res.set("Content-Security-Policy", "frame-ancestors http://rangeme-test.com:1234;")

  res.sendFile(path.join(__dirname, "/children.html"));
})

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html")
  res.sendFile(path.join(__dirname, "/index.html"));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})