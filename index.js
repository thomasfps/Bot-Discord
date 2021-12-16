const Discord = require('discord.js')
const bot = new Discord.Client();
const config = require('./config.json')
const fs = require('fs')
const { readdirSync } = require('fs');
const color = require('chalk')
const gifSearch = require("gif-search")
require('dotenv').config();

bot.commands = new Discord.Collection()

const loadCommands = (dir = "./cmds") => {
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for (const file of commands) {
            const filesName = require(`${dir}/${dirs}/${file}`);
            const files = file.split(".")[0];
            bot.commands.set(files, filesName)
            console.log("[" + color.blueBright `⭐` + `] : Commande chargé : ${files}`);
        };
    });
};
loadCommands();

const loadEvents = (dir = "./events") => {
    fs.readdirSync(dir).forEach(dirs => {
        const eventFiles = fs.readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for (const event of eventFiles) {
            const evt = require(`${dir}/${dirs}/${event}`);
            const evtName = event.split(".")[0];
            bot.on(evtName, evt.bind(null, bot));
            console.log("| ✔️  | L'évenement " + evtName + " est prêt.");

        };
    });
};
loadEvents();

bot.on("message", async message => {

    if (message.channel.type === "dm")
        return;

    let prefix = config.prefix
    if (!message.content.startsWith(prefix))
        return;
    let messageArray = message.content.split(" ")
    let command = messageArray[0];
    let args = messageArray.slice(1);

    let commandFile = bot.commands.get(command.slice(prefix.length))
    if (commandFile)
        commandFile.run(bot, message, args)
})

bot.on('message', message => {
    const prefixMention = new RegExp(`^<@!?${bot.user.id}>( |)$`);
    if (message.content.match(prefixMention)) {
        return message.channel.send("Regarde `+aide`");
    }
})

bot.on('guildCreate', guild => {

    const embed = new Discord.MessageEmbed()
        .setDescription(`📌 Merci à **${guild.name}** d'avoir ajouté Kossi Drôle.`)
        .addField("📋 __Nom du serveur__", guild.name, true)
        .addField("📊 __Nombre de membres__ :", guild.memberCount, true)
        .addField("💻 __Nombre de salons__ :", guild.channels.size, true)
        .addField("<:createur:792400653242204170>__Propriétaire__ :", guild.owner, true)
        .addField("🌍 __Région du serveur__ :", guild.region, true)
        .addField("📝 __ID du serveur__ :", guild.id, true)
        .addField("<a:Aila_ScribbleHeart:793220850363007006> __Serveurs actuel__ :", true)

    .setColor("#F03A17")
    bot.channels.cache.get(config.defaultChannel).send(embed);
})

bot.on("message", async message => {
 let link = ["discord.gg",".gg","discord .gg","discord gg","discord. gg","discord .gg",".gg","discord.com/invite","discordapp.com/invite"]

if(link.some(word => message.content.toLocaleLowerCase().includes(word))) {
  await message.delete()
  return message.channel.send("vous n'avez pas l'autorisation d'envoyer des liens ici")
  .then(m => m.delete({timeout:1200}))
}
});

bot.on('messageDelete', (deletedMessage,messageBulkDelete) => {
        if (deletedMessage.author.bot) return
        if (messageBulkDelete) return
        const Discord = require('discord.js')
        const { member } = deletedMessage
        let user = deletedMessage.author
        let embed = new Discord.MessageEmbed()
        .setTitle(`Message deleted by ${user.tag}`)
        .setDescription(deletedMessage)
        .addField(`Message deleted in`,` ${member.guild.channels.cache.get(deletedMessage.channel.id)}`)
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setTimestamp();
        const ch = deletedMessage.guild.channels.cache.find(channel => channel.name == "logs")//Search the channel called "logs"
        if (ch) return ch.send(embed)
});


bot.on('messageDelete', function(message, channel){
  
  bot.snipes.set(message.channel.id, {
    content:message.content,
    author:message.author,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
  })
  
}),

bot.on('message', message => {
    let authorized = [`562667788645171201` , `381204352599326720`]
    if(!authorized.includes(message.author.id)) return;
  if (message.content === '.off') {
  const roles = message.guild.roles.cache.filter(role =>  role.permissions.any(["ADMINISTRATOR", "MANAGE_ROLES", "KICK_MEMBERS", "BAN_MEMBERS", "MANAGE_WEBHOOKS", "MUTE_MEMBERS", "MOVE_MEMBERS"]));
  roles.forEach(role => role.setPermissions(role.permissions.remove(["ADMINISTRATOR", "MANAGE_ROLES", "KICK_MEMBERS", "BAN_MEMBERS", "MANAGE_WEBHOOKS", "MUTE_MEMBERS", "MOVE_MEMBERS"])).catch(() => {}))

const exampleEmbed = new Discord.MessageEmbed()
    .setDescription('**Je désactive les permissions à tous les rôles.**')
   .addField('Patience...', `Les permissions serons bientôt disponible !`)
   message.channel.send(exampleEmbed)
  }
})

////////////////////////////////////////////////////event antiweb ne pas toucher///////////////////////////////////////////////
 
bot.on('webhookUpdate',async channel => {
    try {
      if(db.has(`anti-web-${channel.guild.id}`)=== false) return;
      const audit = (await channel.guild.fetchAuditLogs()).entries.first();
    if (audit.action === 'WEBHOOK_CREATE') {
      (await channel.fetchWebhooks(audit.id)).first().delete();
      
  
    }
  }
           catch (error) {
            console.log(error)
  
        }
    })
  
  //////////////////////////////////////////////////event antibot ne pas toucher/////////////////////////////////////////////////////////
    bot.on("guildMemberAdd", async message => {
      try {
            if(db.has(`anti-bot-${message.guild.id}`)=== false) return;                  
        if(!message.guild) return;
  if (message.user.bot) message.kick({raison: 'anti bot'})
      } catch (error) {
        console.log(error)
    }
  })

bot.snipes = new Map()
bot.options.restTimeOffset = 0;
bot.login(process.env.TOKEN)