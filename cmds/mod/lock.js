const { colors } = require("../../colors.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "lock",
    },
    run: async (client, message) => {
    if (message.member.hasPermission("MANAGE_CHANNELS")) {
        if (message.channel.name.startsWith("🔒-")) {
            message.reply(new MessageEmbed()
    .setColor("#cd0000")
    .setDescription("Ce channel est déja bloqué.")

    .setTimestamp());
        }
        else {
            message.channel.updateOverwrite(message.guild.roles.everyone, {
                   SEND_MESSAGES: false
            })
            message.channel.setName(`🔒-${message.channel.name}`);

            message.channel.send(new MessageEmbed()
    .setColor("#cd0000")
    .setTitle('Salon Bloqué')
    .setDescription(`Ce salon est actuellement bloqué.\nModérateur: ${message.author.tag}`)
    .setTimestamp());

        }
    }
    else {
        message.reply(new MessageEmbed()
    .setColor("#cd0000")
    .setDescription("Vous n'aveza pas la permission suivante : `MANAGE_CHANNELS`.")
    .setTimestamp());
    }
}
}