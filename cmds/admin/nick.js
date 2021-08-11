const { MessageEmbed } = require('discord.js');
 
module.exports = {
   
    run: async (bot, message, args) => {
        message.delete();

        if (!message.member.hasPermission(["ADMINISTRATOR"])){
            return message.channel.send({embed : {color : "RED", description : "Tu ne peut pas utiliser cette commande !"}})

        

        }
        let user = message.mentions.users.first();
        if (!user) return message.channel.send({embed : {color : "RED", description : "Merci de mentionner un utilisateur"}})

        let nick = args.slice(1).join(" ");
        if (!nick) return message.channel.send({embed : {color : "RED", description : "Merci de mettre le nouveau pseudo"}})

        let member = message.guild.members.cache.get(user.id);
        
        await member.setNickname(nick, []);
        return message.channel.send({embed : {color : "GREEN", description : `Le pseudo de **${user.tag}** a été changé en **${nick}**`, footer: `pseudo changé par ${nick}`}})



        

    }
}

module.exports.help = {
    name: "nick"
}