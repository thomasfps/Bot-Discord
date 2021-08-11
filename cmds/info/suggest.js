const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    const content = args.join(' ')
    const channel = message.guild.channels.cache.find(c => c.name === "suggest")
    if(!channel) return await message.guild.channels.create(`suggest`, {
        type: 'text',
    });


    channel.updateOverwrite(message.guild.roles.everyone, {
        "VIEW_CHANNEL": false
    });
        if(!content) message.channel.send('Veuillez saisir une suggestion !')
        message.channel.send('Votre suggestion à bien été envoyée !')
        const embed = new Discord.MessageEmbed()
        .setTitle('Suggestion Command')
        .setDescription(content)
        .setTitle((`Voici le suggestion faite par ${message.author.tag}`))
        .setTimestamp()
        channel.send(embed)
}