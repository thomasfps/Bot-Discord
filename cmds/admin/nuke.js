const Discord = require('discord.js')


module.exports.run = async(bot, message, args) => {

    console.log(`|----> nuke utilisé sur le serveur :  ${message.guild.name} `)
    
    
    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
        return message.channel.send("<:warning:825854427574697994> **You don't have permission!*")
    }

    message.channel.send('***Nuking... <a:load:825861514988486676>***')
    
    await message.channel.clone().then

    ((ch) =>{ch.setParent(message.channel.parent.id);

    ch.setPosition(message.channel.position);

    message.channel.delete().then

    (ch.send('**:checked:   Channel has been successfully nuked** \n https://imgur.com/LIyGeCR'))

   });
}

module.exports.config = {
    name: 'nuke'
}