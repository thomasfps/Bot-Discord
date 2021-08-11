 const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let KickedUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!KickedUser) {
        return message.channel.send('L\'utilisateur' + KickedUser + 'n\'a pas été trouvez !')
    }

    let KickReason = args.slice(1).join(" ");
    KickedUser.send(`Vous venez d'étre kick pour ${KickReason} par ${message.author}`)
    if(!KickReason) KickReason = 'Pas de raison fournie.'
    if(!message.member.hasPermission('KICK_MEMBERS')) {
        return message.channel.send(`Tu n'a pas la permission d'exuté cette commnde !`)
    }
    if(KickedUser.hasPermission('KICK_MEMBERS')) {
        return message.channel.send(`Vous n'avez pas la perssone vus qu'ell'a le permission de kick !`)
    }

    let KickEmbed = new Discord.MessageEmbed()
    .setDescription('NAME')
    .setColor('#cd3333')
    .addField('Utilisateur', `${KickedUser} (ID: ${KickedUser.id})`)
    .addField('Modérateur', `${message.author} (ID: ${message.author.id})`)
    .addField('Salon ou la commande a été effectué',  message.channel)
    .addField('Raison du kick', KickReason)

    let KickChannel = message.guild.channels.cache.get('815634404239736923');
    if(!KickChannel) {
        return message.channel.send('Salon Introuvable crée en un !')
        
    }
    setTimeout(() => {
    message.guild.member(KickedUser).kick(KickReason)
    KickChannel.send(KickEmbed)
    message.member.send(`Tu a bien kick ${KickedUser}`)
    }, 1000)
}
module.exports.config = {
    name: 'kick'
}