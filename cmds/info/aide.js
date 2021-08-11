const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {

    console.log(`|----> aide utilisé sur le serveur :  ${message.guild.name} `)
    message.delete();

    const home = new Discord.MessageEmbed()
        .setTitle('<:ltFixing:802513054105468948> Accueil ')
        .setDescription('**Voici nos commandes principales**')
        .addField('`+aide`', 'Affiche ce panel', true)
        .addField('`+qrcode`', 'Affiche le qrcode du bot', true)
        .addField('`+demande`', 'propose une suggestion', true)
        .setImage('https://media.giphy.com/media/OFX0SVqNj1Hqjcxnlm/giphy.gif')
        .setColor("#cd0000")
        .setTimestamp()

    const moderation = new Discord.MessageEmbed()
        .setTitle('<:Info:791748415020072960> Modération ')
        .addField('`+clear`', 'Supprime les messages demander')
        .addField('`+mute`', 'Mute un utilisateur ')
        .addField('`+ban`', 'Bloque un utilisateur de ton serveur')
        .addField('`+kick`', 'Exclue un utilisateur')
        .addField('`+lock`', 'Ferme le salon de ton choix')
        .addField('`+unlock`', 'Re-ouvre le salon de ton choix')
        .addField('`+ban-list`', 'Pour voir le ban-list')
        .addField('`+snipe`', 'Pour voir les message delete')
        .setColor("#cd3333")
        .setTimestamp()

    const fun = new Discord.MessageEmbed()
        .setTitle('<:Info:791748415020072960> Fun ')
        .addField('`+calin`', 'Fait un calin ', true)
        .addField('`+dors`', 'Dors tranquillement .. ', true)
        .addField('`+imposteur`', 'Imposteur among us ', true)
        .addField('`+amongus`', 'régénérer un gif Among US', true)
        .addField('`+dance`', 'Dance sur la piste ! ', true)
        .addField('`+naruto`', 'régénérer un gif Naruto', true)
        .addField('`+blague`', 'régénérer une blague au hasard', true)
        .addField('`+fou`', 'devient fou  ', true)
        .addField('`+furax`', 'devient énerver ', true)
        .addField('`+kiss`', 'Fait un bisous ', true)
        .addField('`+fume`', 'Allume une clope et fume  ', true)
        .addField('`+gay`', 'Calcul ton % de gay  ', true)
        .addField('`+minecraft`', 'Site minecraft-France', true)
        .setColor("#1FFF00")
        .setTimestamp()

    const info = new Discord.MessageEmbed()
        .setTitle('<:Info:791748415020072960> Information ')
        .addField('`+avatar`', 'Regarde l\'avatar de l\'utilisateur')
        .addField('`+stat`', 'Regarde les informations du bot')
        .addField('`+infoserver`', 'Regarde les informations du serveur')
        .addField('`+infouser`', 'Regarde les informations de l\'utilisateur')
        .addField('`+infochannel`', 'Regarde les informations du channel')
        .addField('`+uptime`', 'pour connaitre depuis combien de temps le bot est en ligne')
        .addField('`+vocal`', 'pour savoir combien de personne en vocal')
        .addField('`+djs`', 'permet de rechercher dans la doc')
        .addField('`+voice`', 'Pour voir le nombre de personne en voc')
        .addField('`+suggest`', 'Pour une suggestion')
        .setColor("#ffffff")
        .setTimestamp()

    const utility = new Discord.MessageEmbed()
        .setTitle('<:Info:791748415020072960> Utilitaires ')
        .addField('`+addnote`', 'Crée une note')
        .addField('`+note`', 'Regarde t\'es note')
        .addField('`+ascii`', 'écrire en ascii')
        .addField('`+ping`', 'Regarde la latence du bot')
        .addField('`+invite`', 'Crée une invation unique')
        .addField('`+anime`', 'Regarde les détails d\' un anime ')
        .addField('`+suggestion`', 'Crée une suggestion')
        .addField('`+calc`', 'Pour un calcul')
        .setColor("#66cd00")
        .setTimestamp()

    const admin = new Discord.MessageEmbed()
        .setTitle('<:Info:791748415020072960> Administration ')
        .addField('`+addemoji`', 'ajoute l\'emoji de ton choix')
        .addField('`+dm`', 'Envoie un message privé')
        .addField('`+sondage`', 'Crée un sondage')
        .addField('`+setregle`', 'Ajoute les règles dans un channel')
        .addField('`+nuke`', 'Après exécution de la commande, le channel dans lequel vous avez exécuté la commande va être delete puis recrée à l identique')
        .addField('`+unbanall`', 'Pour Unban all avec autorisation direction ou + ')
        .addField('`+nick`', 'pour rename les gens')
        .addField('`+la`', 'Pour voir qui est Admin')
        .addField('`+restart`', 'Pour restart le bot')
        .setColor("#000000")
        .setTimestamp()

    const profil = new Discord.MessageEmbed()
        .setTitle('<:Info:791748415020072960> Profil ')
        .setDescription('D\'autres fonctions arrivent ..')
        .addField('`+profil`', 'Regarde ton profil ou celui d\'un autre en le mentionnant')
        .addField('`+setage`', 'Modifie ton âge sur ton profil')
        .addField('`+setcitation`', 'Ajoute une citation sur ton profil')
        .addField('`+setpref`', 'Ajoute ta choses préférer dans le monde entier')
        .setColor("#7fffd4")
        .setTimestamp()

    const autre = new Discord.MessageEmbed()
      .setTitle('<:Autre:791748415020072960>')
      .addField('`+ping`', 'pour voir votre ping')
      .addField('`+image`', 'Pour cherché une image')
      .addField('`+setup`', 'Pour faire fonctionné les suggestion')
      .setColor("#003EFF")
      .setTimestamp()

    const nsfw = new Discord.MessageEmbed()
        .setTitle('<:Info:791748415020072960> NSFW ')
        .addField('`+chatte`', '<:Y46532449302659082Y4:792716834050277416>', true)
        .addField('`+4k`', '<:Y46532449302659082Y4:792716834050277416>', true)
        .addField('`+anal`', '<:Y46532449302659082Y4:792716834050277416>', true)
        .addField('`+cul`', '<:Y46532449302659082Y4:792716834050277416>', true)
        .addField('`+gif`', '<:Y46532449302659082Y4:792716834050277416>', true)
        .addField('`+hentai`', '<:Y46532449302659082Y4:792716834050277416>', true)
        .addField('`+holo`', '<:Y46532449302659082Y4:792716834050277416>', true)
        .addField('`+kanna`', '<:Y46532449302659082Y4:792716834050277416>', true)
        .addField('`+kitsune`', '<:Y46532449302659082Y4:792716834050277416>', true)
        .addField('`+seins`', '<:Y46532449302659082Y4:792716834050277416>', true)
        .setTimestamp()

    

    const pages = [
        home,
        info,
        fun,
        moderation,
        profil,
        utility,
        admin,
        autre,
        nsfw
        
    ]

    const emojiList = ["⬅️", "➡️"];
    const timeout = '120000';

    pagination(message, pages, emojiList, timeout)
}

module.exports.get = {
    name: 'aide'
}