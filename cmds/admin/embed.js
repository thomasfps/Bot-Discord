const { MessageEmbed, Message } = require('discord.js');
const { Menu } = require('discord.js-menu');

module.exports.run = async (bot, message, args) => {
            if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send(`You cannot use this command!`)
        }
    let menu = new Menu(message.channel, message.author.id, [
        {
            name: 'main',
            content: new MessageEmbed()
            .setTitle('Dev')
            .addField('`+avatar`', 'Pour avoir votre avatar')
            .addField('`+restart`', 'pour restart le bot avec une WL')
            .addField('`+la`', 'pour voir les administrateur du serveur discord')
            .setFooter('Page 1/5')
            .setColor('02f8ff')
            ,
        reactions: {
        '🛑':'delete',
        '➡️':'next'
        }
        },
        {
            name: "otherPage",
            content: new MessageEmbed()
            .setTitle('EmbedPage2')
            .setFooter('Page 2/5')
            .setColor('02f8ff')
        ,
        reactions: {
        '⬅️':'previous',
        '🛑':'first',
        '➡️':'next'
        }
        },
        {
            name: "otherPage",
            content: new MessageEmbed()
            .setTitle('EmbedPage3')
            .setFooter('Page 3/5')
            .setColor('02f8ff')
        ,
        reactions: {
        '⬅️':'previous',
        '🛑':'first',
        '➡️':'next'
        }
        },
        {
            name: "otherPage",
            content: new MessageEmbed()
            .setTitle('EmbedPage4')
            .setFooter('Page 4/5')
            .setColor('02f8ff')
        ,
        reactions: {
        '⬅️':'previous',
        '🛑':'first',
        '➡️':'next'
        }
        },
        {
            name: "otherPage",
            content: new MessageEmbed()
            .setTitle('EmbedPage5')
            .setFooter('Page 5/5')
            .setColor('02f8ff')
        ,
        reactions: {
        '⬅️':'previous',
        '🛑':'first'
        }
        },
    ], 300000)
    menu.start()
}

module.exports.config = {
    name:'embedpage'
}