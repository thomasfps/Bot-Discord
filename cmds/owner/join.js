module.exports.run = async(bot, message, args) => {

    message.delete();

    if (message.author.id !== "562667788645171201")
        return message.channel.send(`Vous n'avez pas la permission.`);
    if (!message.member.voice.channel)
        return message.channel.send(":x: Vous n'ètes pas connectez à un Vocal !");
    message.member.voice.channel.join();
    message.channel.send(":white_check_mark: Connecté au Vocal !")
}

module.exports.get = {
    name: 'join',
}