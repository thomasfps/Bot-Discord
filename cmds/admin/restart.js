const Discord = require('discord.js')
const { prefix } = require("../../config.json")

module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR")) return await message.channel.send("Tu n'a pas la permissions pour cette commande !").delete({timeout: 5000});
message.channel.send('🔄 **Le bot redémarre...**').then(async(m) => {
        await bot.destroy();
        bot.login(process.env.TOKEN)
        await m.edit(`🔄 **Le bot à redémarrer.**`)
        console.log("Le bot a été redémarrer !")
    })
    
        } 
        
        module.exports.config = {
            name: "restart",
            aliases: [],
        }