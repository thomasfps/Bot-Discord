const discord = require('discord.js')

module.exports.run = async (client, message, args) => {

        const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');

        let count = 0;
        let counter = 0;
        for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
        let Embed = new discord.MessageEmbed()
            .setTitle("<:loud_sound:825551660993609728> __Salons vocaux__")
            .setDescription("Il y a actuellement <:loud_sound:825551660993609728> **" + count + " ** personnes en vocal sur le serveur.")
            .setColor(`RED`)
            .setFooter(`${client.user.username}`)
            .setTimestamp()
        message.channel.send(Embed)

    }

module.exports.help = {
    name: "vocal",
  }