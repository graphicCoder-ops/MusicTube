const YouTube = require("youtube-sr").default;
const fn = require("./json_parsing");
link = "nah";
function results(url, res) {
  YouTube.search(url, { limit: 10 })
    .then((x) => {
      fn[1] = fn[2](x);
      console.log(link);
      res.render("index", { video_url: fn[3], data_url: fn[2](x) });
    })
    .catch(console.error);
}
module.exports = [results, link];
