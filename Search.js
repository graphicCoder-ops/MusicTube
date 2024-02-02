const YouTube = require("youtube-sr").default;
const json_functions = require("./json_parsing");
link = "Unknown Link";

async function results(url, res) {
  await YouTube.search(url, { limit: 50 ,fetchAll:true})
    .then((x) => {
      //console.log(x);
      json_functions[1] = json_functions[2](x); 
      res.render("index", { video_url: json_functions[3], data_url: json_functions[1] });
    })
    .catch(console.error);
}

module.exports = [results, link];
