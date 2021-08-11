const Discord = require('discord.js');
const config = require('../../config.json')

module.exports.run = async (bot, message, args) => {
          if (message.author.id !== "562667788645171201")
        return message.channel.send(`Vous n'avez pas la permission.`);
    message.channel.send(`Je quitte ${message.guild.name}`)
setTimeout(() => {
message.guild.leave()
}, 1000)
message.author.send(`Je viens de quitter ${message.guild.name} (${message.guild.memberCount} membres, propriétaire : ${message.guild.owner})`)
}
    
module.exports.help = {
    name: "leave"
}