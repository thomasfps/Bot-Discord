const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    let arg = message.content.split(" ").slice(1);
    let thingToEcho = arg.join(" ")
    if (!args[0]) {
        var error_one = new Discord.MessageEmbed()
            .setDescription("❌ Merci d'inclure un message pour effectuer cette commande.")
            .setColor("#ff4040")
        message.channel.send(error_one)
    } else {
        var color = new Discord.MessageEmbed()
            .setDescription(thingToEcho)
            .setColor("#000000")
            .setFooter(`Envoyé par ${message.author.tag}`, message.author.avatarURL)
        message.channel.send(color)
        message.delete()
    }
}

module.exports.get = {
    name: "noir"
}