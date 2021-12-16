const Discord = require("discord.js");
const whitelist = require("./whitelist");

module.exports.run = async(bot, message, args) => {

    message.delete();

    run: async(client, message, args) => {
      

        if(message.author.id !== whitelist.id && 
           message.author.id !== whitelist.id2 && 
           message.author.id !== whitelist.id3 && 
           message.author.id !== whitelist.id4 && 
           message.author.id !== whitelist.id5 && 
           message.author.id !== whitelist.id6 && 
           message.author.id !== whitelist.id7 && 
           message.author.id !== whitelist.id8 && 
           message.author.id !== whitelist.id9 &&
           message.author.id !== whitelist.id10) return;  
        }

    let bicon = bot.user.displayAvatarURL();

    let string = '';
    bot.guilds.cache.forEach(guild => {
        string += guild.name + '\n';
    })

    let botembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(string)
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL())
        .setThumbnail(bicon)

    message.channel.send(botembed);
}