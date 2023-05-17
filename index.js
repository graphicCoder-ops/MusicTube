const express = require("express");
const fn = require("./json_parsing");
const serp = require("./serp.js");
const yt = require("youtube-dl-exec");
const path = require("path");
const bodyParser = require("body-parser");
const urlencode = bodyParser.urlencoded({ extended: false });
const app = express();
var stri = "nah";
app.set("view engine", "ejs");

app.get("/audio", (req, res) => {
  res.render("index", { video_url: fn[3], data_url: fn[1] });
});
app.get("/audio/:uid", (req, res) => {
  console.log(req.params.uid);
  const youtube = yt(req.params.uid, {
    dumpSingleJson: true,
    noWarnings: true,
    noCallHome: true,
    noCheckCertificate: true,
    preferFreeFormats: true,
    youtubeSkipDashManifest: true,
  }).then((out) => {
    fn[3] = fn[0](out);
    res.redirect("/audio");
    //stri = JSON.stringify(out);
  });
});
app.post("/search", urlencode, (req, res) => {
  serp[0](req.body.searchtext, res);

  /**/
});
app.post("/audio/search", urlencode, (req, res) => {
  serp[0](req.body.searchtext, res);

  /**/
});
app.get("/json", (req, res) => {
  res.send(fn[3]);
});
app.listen(8080, () => {
  console.log("listening at http://localhost:8080/audio");
});
