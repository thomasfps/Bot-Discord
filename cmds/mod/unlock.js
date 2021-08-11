const { colors } = require("../../colors.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "unlock"
    },
    run: async (client, message) => {
    if (message.member.hasPermission("MANAGE_CHANNELS")) {
        if (message.channel.name.startsWith("🔒-")) {
            message.channel.updateOverwrite(message.guild.roles.everyone, {
                SEND_MESSAGES: null
            });
            message.channel.setName(`${message.channel.name.slice(2)}`);

            message.channel.send(new MessageEmbed()
          .setTitle('Salon Débloqué')
    .setColor("#a1ee33")
    .setDescription(`Le channel à été débloqué.\n\n Modérateur: **${message.author.tag}**.`)
        .setTimestamp());
        }
        else {
            message.reply(new MessageEmbed()
    .setColor("#a1ee33")
    .setDescription("Ce channel n'est pas bloqué.")
        .setTimestamp());
        }
    }
    else {
        message.reply(new MessageEmbed()
    .setColor("#a1ee33")
    .setDescription("Vous n'avez pas la permission `MANAGE_CHANNELS`.")
        .setTimestamp());
    }
}
}