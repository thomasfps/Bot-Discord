//Here the command starts
module.exports = {

    run: async (client, message, args, user, text, prefix) => {
        console.log(`|----> uptime utilisé sur le serveur :  ${message.guild.name} `)

        function duration(ms) { 
            const sec = Math.floor(ms / 1000 % 60).toString();
            const min = Math.floor(ms / (60*1000) % 60).toString();
            const hrs = Math.floor(ms / (60*60*1000) % 60).toString();
            const days = Math.floor(ms / (24*60*60*1000) % 60).toString();
            return `\`${days} Days\`, \`${hrs} Hours\`, \`${min} Minutes\`, \`${sec} Seconds\``
        }
        message.reply(`:white_check_mark: **${client.user.username}** is since ${duration(client.uptime)} online`); //sending the uptime
    }
}
module.exports.get = {
    name: "uptime"
}