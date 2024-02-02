const express = require("express");
const json_functions = require("./json_parsing");
const searchYoutube = require("./Search.js");
const yt = require("youtube-dl-exec");
const path = require("path");
const bodyParser = require("body-parser");
const urlencode = bodyParser.urlencoded({ extended: false });
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  json_functions[3]="";
  res.render("index", { video_url: "", data_url: [] });
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
    
    json_functions[3] = json_functions[0](out);
    res.render("index", { video_url: json_functions[3], data_url: json_functions[1] });
    
  });
});
app.post("/search", urlencode, (req, res) => {
  searchYoutube[0](req.body.searchtext, res);
  json_functions[3]="";
  /**/
});
app.post("/audio/search", urlencode, (req, res) => {
  searchYoutube[0](req.body.searchtext, res);
  json_functions[3]="";

  /**/
});
app.get("/json", (req, res) => {
  res.send(json_functions[3]);
});
app.listen(8080, () => {
  console.log("listening at port 8080");
});
