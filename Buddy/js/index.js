const api = require('./api.js')
const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
})

// const mySecret = process.env['TOKEN']
client.login('ODc3NTQxMDM1NDkwODIwMTQ4.YR0Hxg.Dj6H29DFhWImDopLvHgVjEq1yBk')
