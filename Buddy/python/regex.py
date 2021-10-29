import re

sayhi = re.compile('(xin\s(chào|chao)|hi|hello|chào|chao|yo)\skenshin', re.IGNORECASE)
bodyshaming = re.compile('(b(\W+|\d+)*é(\W+|\d+)*(o|0))|(l(\W+|\d+)*ợ(\W+|\d+)*n)', re.IGNORECASE)
binhbeo = re.compile('bình\sbéo', re.IGNORECASE)
badWord = re.compile('((d|đ|l)(\W+|\d+)*(i|ị)(\W+|\d+)*(t|\+))|(d(.+)*m)', re.IGNORECASE)
covid = re.compile('((th(ô|o)ng(\s+|\w+|\W+|)tin)|(infor(\w+)?))(\s+|\w+\|\W+|)(.+)?covid', re.IGNORECASE)
weather = re.compile('((info(w+)*|th(o|ô)ng(.+)*tin))(.+)*((weather)|((thoi|thời)(.+)*(tiet|tiết)))', re.IGNORECASE)