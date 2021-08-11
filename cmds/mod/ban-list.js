const Discord = require("discord.js");
const talkedRecently = new Set();

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const permi = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`<a:sharkno:837781529982664785> | Il vous manque la permission \`BAN_MEMBERS\` pour effectuer cette commande`)
     return message.channel.send(permi)
     }
const bans = new Map();
            message.guild.fetchBans().then(g => {
                bans[g.id] = g;
                let banlist = (`${bans[g.id].map(ge => `\n ${ge.user.tag} : <@${ge.user.id}>`).join('\n')}`)
                        try {     
                let noembed = new Discord.MessageEmbed()
  .setColor("RANDOM")
                .setDescription(`<a:sharkno:837781529982664785> | Il n'y a aucun utilisateur bannis sur ce serveur.`)
                .setAuthor(`Membre banni sur ${message.guild.name}`)
               .setFooter('Utilisateur utilisant cette commande ' + message.author.tag, message.author.avatarURL())
                if(banlist.length === 0) return message.channel.send(noembed)
                const embed = new Discord.MessageEmbed()
                    .setDescription(banlist)
                    .setAuthor(`Membre banni sur ${message.guild.name}`)
                .setColor("RANDOM")
                message.channel.send(embed)
                      } catch (err) {
        const embed = new Discord.MessageEmbed()
            .addField(`Banni sur le serveur`, `<a:sharkno:837781529982664785> | Désolé, mais votre serveur comporte trop d'utilisateurs bannis. Je ne peux donc pas l'afficher. Discord ne le permet pas.`)
            .setColor("RANDOM")
            .setTimestamp()
        message.channel.send(embed)
                      }

        });
    }


    exports.help = {
  name: 'banlist'
};