const Discord = require('discord.js');
const math = require('mathjs');

module.exports.run = async (client, message, args) => {

        if (!args[0]) return message.channel.send(`Veuillez entrer quelque chose à Calculer !`);

        let result;
        try {
            result = math.evaluate(args.join(" ").replace(/[x]/gi, "*").replace(/[,]/g, ".").replace(/[÷]/gi, "/"));
        } catch (e) {
            return message.channel.send("Veuillez entrez une Calculation Valide ! \n\n **__Liste des Calculations :__** \n\n `1.` **Équation sqrt** - `sqrt(3^2 + 4^2) = 5` \n `2.` **Unités à Unités : ** - `2 inch to cm = 0.58` \n `3.` **Expressions Complexes : ** - `cos(45 deg) = 0.7071067811865476` \n `4.` **Expressions Mathématiques de Base : ** - `+, -, ^, /, decimals` = **2.5 - 2 = 0.5**");
        }

        let embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setFooter(client.user.tag, client.user.displayAvatarURL({dynamic: true, size: 512}))
            .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 512}))
            .addField("**Opération :**", `\`\`\`Js\n${args.join("").replace(/[x]/gi, "*").replace(/[,]/g, ".").replace(/[÷]/gi, "/")}\`\`\``)
            .addField("**Résultat :**", `\`\`\`Js\n${result}\`\`\``)
        message.channel.send(embed);
    };

module.exports.help = {
    name: "calc"
}