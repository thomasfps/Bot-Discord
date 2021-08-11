const Discord = require("discord.js")
module.exports.run = async(bot, message, args) => {

    let embedsupport = new Discord.MessageEmbed()
        .setTitle("Un soucis ?")
        .addField("Tu peux rejoindre le support du bot a l'invitation :  ", " ou bien nous contacter a l'adresse email suivant : baboujoto@gmail.com ")
        .setImage("https://media.giphy.com/media/mK5lxpZD3WWGyT7OhY/giphy.gif")
        .setColor(0xBBA2F7)
        .setFooter('Développer par ! Crêpes Sauvages#7209')
    message.channel.send(embedsupport)

    console.log(`|----> support utilisé sur le serveur :  ${message.guild.name} `)

}

module.exports.get = {
    name: 'support'
}