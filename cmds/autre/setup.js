module.exports.run = async (client, message, args) => {
    const channel = message.guild.channels.cache.find(c => c.name === "suggest")
    if(!channel) return await message.guild.channels.create(`suggest`, {
        type: 'text',
    });


    channel.updateOverwrite(message.guild.roles.everyone, {
        "VIEW_CHANNEL": false
    });
}