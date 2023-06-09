function tourl(out) {
  console.log(out.requested_formats);
  return out.requested_formats[1].url;
}
var audio_string = "Cannot get Audio Stream url for audio";
const data = [
  {
    text: "Hello to the Other Side!",
    url: "https://yt3.ggpht.com/ytc/AAUvwnjLXM7NgDeo3N4f5puZe5Thbv2QOlNgH6CMoHDhzw=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    text: "Rick Roll",
    url: "https://yt3.ggpht.com/ytc/AAUvwni36SveDisR-vOAmmklBfJxnnjuRG3ihzfrwEfORA=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    text: "UwU vibes!",
    url: "https://yt3.ggpht.com/ytc/AAUvwngMGZ-EFCcsO9w8BwxJbGFLv9TPBt6iamIIwRWa=s68-c-k-c0x00ffffff-no-rj",
  },
];
function todata(SearchedData) {
  var data = [];
  for (var i in SearchedData) {
    data[i] = {};
    data[i].text = SearchedData[i].title;
    data[i].url = SearchedData[i].thumbnail.url;
    data[i].id = SearchedData[i].id;
  }
  return data;
}
module.exports = [tourl, data, todata, audio_string];
