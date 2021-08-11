const Discord = require("discord.js")

module.exports.run = async(bot, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR")) {
        message.guild.fetchBans().then(bans => {
            if (bans.size == 0) {message.channel.send("Il n'y a aucun membre banni sur le serveur.")};
            bans.forEach(ban => {
                message.guild.members.unban(ban.user.id);
            });
        }).then(() => message.channel.send("Tous les utilisateurs bannis ont été débanni.")).catch(e => console.log(e))
    } else {message.channel.send("Vous n\'avez pas la permission d'utiliser cette commande")}
}

module.exports.help = {
    name:"unbanall"
}