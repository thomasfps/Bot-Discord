const fetch = require('node-fetch')
module.exports = {
    name: "docs",
    description: "cherche dans la doc!",
    run: async(client, message, args) => {
        const query = args.join(" ")
        if(!query) return message.reply("Veuillez spécifier que voulez-vous rechercher dans la doc!")
        fetch(`https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(data => {
            message.channel.send({ embed: data})
        })
    }
}