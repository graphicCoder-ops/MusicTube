const YouTube = require("youtube-sr").default;
const fn = require("./json_parsing");
link = "nah";

function results(url, res) {
  YouTube.search(url, { limit: 10 })
    .then((x) => {
      fn[1] = fn[2](x); // use different approach for this
      //console.log(x);
      //console.log(fn[3]);
      res.render("index", { video_url: fn[3], data_url: fn[1] });
    })
    .catch(console.error);
}

module.exports = [results, link];
