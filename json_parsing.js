function tourl(out) {
  return out.formats[0].url;
}
var audio_string = "nah";
const data = [
  {
    text: "yellow",
    url: "https://yt3.ggpht.com/ytc/AAUvwnjLXM7NgDeo3N4f5puZe5Thbv2QOlNgH6CMoHDhzw=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    text: "best",
    url: "https://yt3.ggpht.com/ytc/AAUvwni36SveDisR-vOAmmklBfJxnnjuRG3ihzfrwEfORA=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    text: "smooth",
    url: "https://yt3.ggpht.com/ytc/AAUvwngMGZ-EFCcsO9w8BwxJbGFLv9TPBt6iamIIwRWa=s68-c-k-c0x00ffffff-no-rj",
  },
];
function todata(link) {
  var data = [];
  for (var i in link) {
    data[i] = {};
    data[i].text = link[i].title;
    data[i].url = link[i].thumbnail.url;
    data[i].id = link[i].id;
  }
  return data;
}
module.exports = [tourl, data, todata, audio_string];
