const { MessageEmbed } = require("discord.js");
const sendError = require("../../util/error");

module.exports = {
    info: {
        name: "leave",
        aliases: ["goaway", "disconnect", "bye"],
        description: "Leave The Voice Channel!",
        usage: "Leave",
    },

    run: async function (client, message, args) {
        let channel = message.member.voice.channel;
        if (!channel) return sendError("Je suis désolé mais vous devez être dans un vocal!", message.channel);
        if (!message.guild.me.voice.channel) return sendError("Je ne suis dans aucun vocal!", message.channel);

        try {
            await message.guild.me.voice.channel.leave();
        } catch (error) {
            await message.guild.me.voice.kick(message.guild.me.id);
            return sendError("Essayer de quitter le canal vocal....", message.channel);
        }

        const Embed = new MessageEmbed()
            .setAuthor("Leave Voice Channel", "https://github.com/navaneethkm004/my-images/blob/main/giphy.gif?raw=true")
            .setColor("#fffdd0")
            .setTitle("Success")
            .setDescription("🎶 Left The Voice Channel.")
            .setTimestamp();

        return message.channel.send(Embed).catch(() => message.channel.send("🎶 Left The Voice Channel :C"));
    },
};