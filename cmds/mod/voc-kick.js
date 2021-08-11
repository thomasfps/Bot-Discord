 const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    const member = message.mentions.members.first();

    if(!message.member.hasPermission("ADMINISTRATOR") ||! message.guild.owner) return message.channel.send("T'as pas la perm CHEH")
    if (!member) return console.log("Invalid member");
    member.voice ? member.voice.setChannel(null) : "";

    const embed = new MessageEmbed()
    .setTitle("⚠️ **- Log Voice Kick**")
    .setColor('#cd3333')
    .setDescription(`**Action**: Faite par ${message.author}. \ Membre kick ${member}.`)
 
  client.channels.cache.get('815634404239736923').send(embed);

}
module.exports.help = {
    name: 'voc-kick'
}