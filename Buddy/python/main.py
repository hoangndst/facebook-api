import os
import discord
from api import covid19_mess, weather_mess
from discord.ext import commands
from regex import *
from server import activate

TOKEN = os.environ['TOKEN']

client = discord.Client()
client = commands.Bot(command_prefix="")
@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))


@client.event
async def on_message(message):
  match = sayhi.search(message.content)
  match_1 = bodyshaming.search(message.content)
  match_2 = binhbeo.search(message.content)
  match_3 = badWord.search(message.content)
  match_4 = covid.search(message.content)
  match_5 = weather.search(message.content)
  if message.author == client.user:
      return
  if match:
    await message.channel.send('Xin chào ' + message.author.name + '!\n~ Phi Thiên Ngự Kiếm')
  elif match_2:
    await message.channel.send('Gì cơ Bình á, lần này bạn đúng mẹ nó rồi!')
  elif match_1:
    await message.channel.send('Đừng body shaming bạn eii!')
  if match_3:
    await message.channel.send('Ngôn từ vô văn hóa')
  if match_4:
    await message.channel.send(covid19_mess)
  if match_5:
    await message.channel.send(weather_mess)
activate()
client.run(TOKEN)