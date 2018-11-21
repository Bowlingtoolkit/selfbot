const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`done`)
      client.user.setGame(`Nothing. .. `,"http://twitch.tv/S-F")

  
})


client.login(process.env.BOT_TOKEN)
