const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = '$'

client.on('ready', () => {
  console.log(`done`)
      client.user.setGame(`نايم`,"http://twitch.tv/S-F")

  
})


client.login(process.env.BOT_TOKEN)
