    const { MessageEmbed } = require("discord.js");

    module.exports.run = async (client, message, args) => {
    
            if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("**Vous n'avez pas la permission pour ajouter le rôle a l'utilisateur! - [MANAGE_ROLES]**");
            if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("**Je n'est pas la permissions pour ajouter le rôle a l'utilisateur! - [MANAGE_ROLES]**");
            
            if (!args[0]) return message.channel.send("**Veuillez mentionner le rôle! 🤖**")
    
            let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!rMember) return message.channel.send("**Veuillez mentionner le membre!**");
            if (rMember.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('**Impossible d\'ajouter le rôle!**')
    
            let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(rp => rp.name.toLowerCase() === args.slice(1).join(' ').toLocaleLowerCase());
            if (!args[1]) return message.channel.send("**Veuillez mentionner le rôle! 🤖**")
    
            if (!role) return message.channel.send("**Impossible d'identifier le role!**")
    
            if (role.managed) return message.channel.send("**Impossible d'ajouter le rôle!**")
            if (message.guild.me.roles.highest.comparePositionTo(role) <= 0) return message.channel.send('**Role Is Currently Higher Than Me Therefore Cannot Add It To The User!**')
    
            if (rMember.roles.cache.has(role.id)) return message.channel.send("**L'utilisateur a déjà le rôle!**")
            if (!rMember.roles.cache.has(role.id)) await rMember.roles.add(role.id);
            var sembed = new MessageEmbed()
                .setColor("GREEN")
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setDescription(`Le rôle a bien été ajouté a l'utilisateur ${rMember.user.username}`)
            message.channel.send(sembed)
    
            const embed = new MessageEmbed()
                .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
                .setColor("#ff0000")
                .setThumbnail(rMember.user.displayAvatarURL({ dynamic: true }))
                .setFooter(message.guild.name, message.guild.iconURL())
                .addField("**Moderation**", "addrole")
                .addField("**Role ajouté a**", rMember.user.username)
                .addField("**Role ajouté **", role.name)
                .addField("**Ajouter par**", message.author.username)
                .addField("**Date**", message.createdAt.toLocaleString())
                .setTimestamp();
    
            message.author.send(embed)
    }    

    module.exports.get = {
    name: 'add'
}