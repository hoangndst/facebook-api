import requests
import json
import datetime
now = datetime.datetime.now()


day = [ "chủ nhật", "thứ Hai", "thứ Ba", "thứ Tư", "thứ Năm", "thứ Sáu", "thứ Bảy"];
day1 = day[now.weekday()]

covid19 = requests.get("https://api.covid19api.com/dayone/country/vietnam");
covid19_data = json.loads(covid19.text)
today = covid19_data[-2]
yesterday = covid19_data[-3]
increase = today['Confirmed'] - yesterday['Confirmed']
increase_mess = "";
if increase == 0:
  increase_mess = "";
elif increase > 0:
  increase_mess = 'tăng ' + str(increase) + ' ca so với ngày hôm qua! 😢'
else:
  increase_mess = 'giảm ' + str(abs(increase)) + ' ca so với ngày hôm qua! 😊'

confirmed = today['Confirmed']
recovered = today['Recovered']
deaths = today['Deaths']

covid19_mess =  "🦠 𝕊𝔸ℝ𝕊-ℂ𝕠𝕍-𝟚 ⁉️ \n" + "Số ca mắc Covid19 tính đến nay tại Viêt Nam là: " + str(confirmed) +", " + increase_mess + "\nSố ca tử vong là: " + str(deaths) + "\nSố ca phục hồi là: " + str(recovered) + "\nHãy hạn chế ra ngoài, ở nhà học tập trau dồi kiến thức cùng IU xinh đẹp nhé! 😻"


weather = requests.get('http://api.openweathermap.org/data/2.5/weather?q=Hanoi,10000,VN&units=metric&lang=vi&appid=0407f9d8e492e0998287575717078017')
weather_data = json.loads(weather.text)
w_today = weather_data["weather"][0]['description']
feels_like = weather_data["main"]['feels_like']
temp_min = weather_data["main"]['temp_min']
humidity = weather_data["main"]['humidity']

weather_mess = "🌦 Thời tiết "+ str(day1) + " | " + str(now.date()) + "\nThời tiết hôm nay: " + str(w_today) + "\nNhiệt độ cảm giác: " + str(feels_like) + "°C." + "\nNhiệt độ thấp nhất: " + str(temp_min) + "°C." + "\nĐộ ẩm: " + str(humidity) + "%."
print(weather_mess)