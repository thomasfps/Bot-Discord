const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {

    let test = args.join('+');

    message.channel.send('https://www.minecraft-france.fr/' + test)

}

module.exports.help = {
    name: 'minecraft'
}