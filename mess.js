function message() {
    const token = ""
  
    // Covid 19
    const covid19 = UrlFetchApp.fetch("https://api.covid19api.com/dayone/country/vietnam");
    const data = JSON.parse(covid19);
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
  
  
    // Weather 
    const get_weather = () => {
        const url = "http://api.openweathermap.org/data/2.5/weather?q=Hanoi,10000,VN&units=metric&lang=vi&appid=0407f9d8e492e0998287575717078017";
        return UrlFetchApp.fetch(url);
    };
  
    const w = get_weather();
    const weatherData = JSON.parse(w);
    const w_today = weatherData["weather"][0].description;
    const feels_like = weatherData["main"].feels_like;
    const temp_min = weatherData["main"].temp_min;
    const humidity = weatherData["main"].humidity;
    
    // Date
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
    
    const day1 = day[dayIndex];
    const mess = 
        `👋 Hey các bro! \n` +
        `Buổi sáng ${day1} tốt lành! 😄.\n\n` +
        `🌦 𝕎𝕖𝕒𝕥𝕙𝕖𝕣 𝔽𝕠𝕣𝕖𝕔𝕒𝕤𝕥: \n\n` +
        `Thời tiết hôm nay: ${w_today}.\n` +
        `Nhiệt độ cảm giác: ${feels_like}°C.\n` + 
        `Nhiệt độ thấp nhất: ${temp_min}°C.\n` +
        `Độ ẩm: ${humidity}%.\n\n` +
        `🦠 𝕊𝔸ℝ𝕊-ℂ𝕠𝕍-𝟚 ⁉️ \n\n` +
        `Số ca mắc Covid19 tính đến nay tại Viêt Nam là: ${confirmed}, ${test}.\n` +
        `Số ca tử vong là: ${deaths}.\n` +
        `Số ca phục hồi là: ${recovered}.\n\n` +
        `Hãy hạn chế ra ngoài, ở nhà học tập trau dồi kiến thức cùng IU xinh đẹp nhé! 😻`
    
    
    // List messBot  
    
    const image = {
        "recipient": {
        "id": "4596621120382251"
      },
      "message": {
      "attachment":{
        "type":"image", 
        "payload":{
          "url":"https://newsmd1fr.keeng.net/tiin/archive/images/268/202007/20200726/tinngan_042245_143580851_1.jpg", 
          "is_reusable":true
          }
        }
      }
    }
    const daily = {
      "recipient": {
        "id": "4596621120382251"
      },
      "message": {
        "text": mess
      }
    }
  
  
    const listBot = [daily];
    
    for (let i = 0; i < listBot.length; i++) {
      const app = UrlFetchApp.fetch(`https://graph.facebook.com/v11.0/me/messages?access_token=${token}`,{
      "method": 'post',
      'contentType': 'application/json',
      "payload": JSON.stringify(listBot[i])
      });
    }
  
  } 
  