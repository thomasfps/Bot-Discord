let nameguild = args[0]
if (!nameguild) {
  nameguild = "Server Template"
}
try {
  message.guild.createTemplate(`${nameguild}`, "Template généré").then(template => message.channel.send(`:white_check_mark: **Voici le lien vers le modèle du serveur :**\n https://discord.new/${template.code}`))
  .catch(err => message.channel.send(":x: Je ne parviens pas à créer une template !\n*Verifiez que je possède les permissions suffisantes ou alors un modèle est déja existant pour ce serveur*"))
  


} catch {
  message.channel.send("Je ne parviens pas à créer une template !\n*Verifiez que je possède les permissions suffisantes ou alors un modèle est déja existant pour ce serveur*")
}