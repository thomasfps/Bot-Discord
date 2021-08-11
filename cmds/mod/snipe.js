const Discord = require('discord.js')
const fs = require("fs");



module.exports.run = async (client, message, args) => {
  const msg = client.snipes.get(message.channel.id)
  const embedd = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription("💥 | Il y a rien a snipe!")
    if(!msg) return message.channel.send(embedd)
    const embed = new Discord.MessageEmbed()
    .setAuthor(msg.author.username , msg.author.displayAvatarURL({dynamic : true }))
    .setDescription(msg.content)
    .setColor("RANDOM")
    .setTimestamp() 
    if(msg.image)embed.setImage(msg.image)
    
    message.channel.send(embed)
}
module.exports.help = {
    name: "snipe"
}