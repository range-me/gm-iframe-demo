const express = require("express");
const path = require("path");
const cookieParser = require('cookie-parser')
const app = express();
app.use(cookieParser())
const port = 1234

app.get("/ecrm-meeting-registration", (req, res) => {
  res.cookie("cookie-none", "NONE", {maxAge: 90000000000000, httpOnly: true, sameSite: "none"})
  res.cookie("cookie-lax", "LAX", {maxAge: 90000000000000, httpOnly: true, sameSite: "lax"})
  res.cookie("cookie-strict", "STRICT", {maxAge: 90000000000000, httpOnly: true, sameSite: "strict"})
  res.cookie("cookie-not-set", "NOT-SET", {maxAge: 90000000000000, httpOnly: true})
  res.redirect("ecrm-meeting-registration/file")
})

app.get("/ecrm-meeting-registration/file", (req, res) => {
  res.set("Content-Type", "text/html")
  // current X-Frame-Options header should be removed and replaced with Content-Security-Policy
  // res.set("X-Frame-Options", "sameorigin")
  // Production value for frame-ancestors should be "frame-ancestors https://app.rangeme.com https://*.range.me https://range.me;"
  // Staging value for frame-ancestors should be "frame-ancestors https://testing.rangeme.com;"
  res.set("Content-Security-Policy", "frame-ancestors http://rangeme-test.com:1234 http://*.rangeme-test.com:1234 http://rangeme-test2.com:1234;")
  console.log(req.cookies["cookie-none"])
  console.log(req.cookies["cookie-lax"])
  console.log(req.cookies["cookie-strict"])
  console.log(req.cookies["cookie-not-set"])
  res.sendFile(path.join(__dirname, "/children.html"));
})


// called by children.html
app.get("/my-cookies", (req, res)=>{
  let cookies = `${req.cookies["cookie-none"]} ${req.cookies["cookie-lax"]} ${req.cookies["cookie-strict"]} ${req.cookies["cookie-not-set"]}`;
  res.send(cookies || "NO COOKIES")
})

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html")
  res.sendFile(path.join(__dirname, "/index.html"));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})