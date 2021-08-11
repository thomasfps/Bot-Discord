const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    const msg = await message.channel.send(`🏓 Pinging....`); 
    
        msg.edit(`🏓 Pong!
        Ping is ${Math.round(client.ws.ping)}ms`);
}