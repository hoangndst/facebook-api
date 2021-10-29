const axios = require('axios');

function getCovidMess() {
  return axios.get('https://api.covid19api.com/dayone/country/vietnam')
  .then((out) => {
    const data = out.data;
    const today = data[data.length - 2];
    const yesterday = data[data.length - 3];
    const increase = today.Confirmed - yesterday.Confirmed;
    let test = "";
    if (increase == 0) {
      test = "";
    } else if (increase > 0) {
      test = `tăng ${increase} ca so với ngày hôm qua! 😢`;
    } else {
      test = `giảm ${Math.abs(increase)} ca so với ngày hôm qua! 😊`
    }
    const confirmed = today.Confirmed;
    const recovered = today.Recovered;
    const deaths = today.Deaths;
    let res = `🦠 𝕊𝔸ℝ𝕊-ℂ𝕠𝕍-𝟚 ⁉️ \n` +
              `Số ca mắc Covid19 tính đến nay tại Viêt Nam là: ${confirmed}, ${test}.\n` +
              `Số ca tử vong là: ${deaths}.\n` +
              `Số ca phục hồi là: ${recovered}.\n` +
              `Hãy hạn chế ra ngoài, ở nhà học tập trau dồi kiến thức cùng IU xinh đẹp nhé! 😻`;
    return res;
  })
}

function getWeatherMess() {
  return axios.get('http://api.openweathermap.org/data/2.5/weather?q=Hanoi,10000,VN&units=metric&lang=vi&appid=0407f9d8e492e0998287575717078017')
  .then((out) => {
    const weatherData = out.data;
    const w_today = weatherData["weather"][0].description;
    const feels_like = weatherData["main"].feels_like;
    const temp_min = weatherData["main"].temp_min;
    const humidity = weatherData["main"].humidity;
    var date = new Date();
    var dayIndex = date.getDay();
    var day = [ "chủ nhật", 
                "thứ Hai", 
                "thứ Ba", 
                "thứ Tư", 
                "thứ Năm", 
                "thứ Sáu", 
                "thứ Bảy"
              ];
    let res = `🌦 𝕎𝕖𝕒𝕥𝕙𝕖𝕣 𝔽𝕠𝕣𝕖𝕔𝕒𝕤𝕥: \n` +
              `Thời tiết hôm nay: ${w_today}.\n` +
              `Nhiệt độ cảm giác: ${feels_like}°C.\n` + 
              `Nhiệt độ thấp nhất: ${temp_min}°C.\n` +
              `Độ ẩm: ${humidity}%.\n\n`
    return res;
  })
}

module.exports = {
  covidMess : getCovidMess(),
  weatherMess : getWeatherMess()
}
// export {getCovidMess, getWeatherMess};