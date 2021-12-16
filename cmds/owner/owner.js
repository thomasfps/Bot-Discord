const Discord = require("discord.js")
const config = require("../../config.json")
module.exports.run = async(client,message,args)=> {
     
    let owner = client.users.cache.find(e => e.id == config.owner)

    message.channel.send(`${owner.tag}(<@${config.owner}>)`)
}
exports.help = {
    name:"owner",
    description:"Show bot owner",
    usage:"owner"
}