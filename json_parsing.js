function DataToUrl(out) {
  //console.log(out);
  return out.requested_formats[1].url;
}

var audio_url= "https://livesim2.dashif.org/vod/testpic_2s/audio.mpd"; // Default link
const data = [];

function toData(SearchedData) {
  var data = [];
  for (var i in SearchedData) {
    data[i] = {};
    data[i].text = SearchedData[i].title;
    data[i].url = SearchedData[i].thumbnail.url;
    data[i].id = SearchedData[i].id;
  }
  return data;
}

module.exports = [DataToUrl, data, toData, audio_url];
