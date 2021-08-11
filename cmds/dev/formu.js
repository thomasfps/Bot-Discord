const map = new Map()
const { MessageEmbed } = require("discord.js")
module.exports.run = async (client, message, args) => {
  
  if (!map.has(message.author.id)) {
    map.set(message.author.id, { form: true })
    const arrayQuestions = [{ question: "Aimez vous la glace ?", answer: "", obligatory: true }, { question: "Aimez vous les champignons ?", answer: "", obligatory: true }]
    // pour ajouter une question, faites comme ceci : {question: "votre question", answer: "", obligatory: true/false}, question défini votre question, answer est vide car il contiendra la réponse donnée par l'utilisateur. obligatory doit valoir true ou false (true , l'utilisateur est obligé de répondre / false, il n'est pas obligé)
    // exemples de présentation : const arrayQuestions = [{question: "Aimez vous la tomate ?", answer: "", obligatory: false}, {question: "Etes vous contre le féminisime ?", answer: "", obligatory: true}]
    var presentQuestion = 0
    var answer = false
    const embed = new MessageEmbed()
      .setColor("#36393f")
      .setThumbnail("https://media.discordapp.net/attachments/862424412162359386/866252895409930250/clipboard.png")
      .setDescription([
        `> ✏️ Question numéro **${presentQuestion + 1}**/**${arrayQuestions.length}**`,
        "\u200b",
        `${arrayQuestions[presentQuestion].question}`,
        "\u200b",
        "> ✏️ **Réponse**",
        "\u200b",
        "Aucune"

      ])
    message.channel.send([
      "⬅️ - **Question précédente**",
      "✏️ - **Répondre** / **Modifier la réponse**",
      "➡️ - **Question suivante** / **Envoyer le formulaire**",
      "❌ - **Annuler**"
    ], { embed: embed }).then(async (msg) => {
      const emojis = ["⬅️", "✏️", "➡️", "❌"]
      emojis.forEach(async (e) => await msg.react(e))
      var filterReacts = (reaction, user) => emojis.indexOf(reaction.emoji.name) > -1 && user.id === message.author.id
      const filterMess = (m) => m.author.id === message.author.id
      const collector = msg.createReactionCollector(filterReacts, { idle: 60000 * 60 })
      collector.on("collect", async (reaction) => {
        if (reaction.emoji.name === "⬅️" && presentQuestion - 1 > -1) {
          await reaction.users.remove(message.author.id)
          presentQuestion--
          var currentAnswer = "Aucune"
          if (arrayQuestions[presentQuestion].answer !== "") {
            currentAnswer = arrayQuestions[presentQuestion].answer
          } else {
            answer = false
          }
          embed.setDescription([
            `> ✏️ Question numéro **${presentQuestion + 1}**/**${arrayQuestions.length}**`,
            "\u200b",
            `${arrayQuestions[presentQuestion].question}`,
            "\u200b",
            "> ✏️ **Réponse**",
            "\u200b",
            `${currentAnswer}`
          ])
          await msg.edit(embed)
        } else if (reaction.emoji.name === "✏️") {
          await reaction.users.remove(message.author.id)
          msg.channel.send("Veuillez indiquer la réponse à la question (__si une réponse est déjà présente, celle ci seras modifiée__)").then((mess) => {
            msg.channel.awaitMessages(filterMess, { time: 60000 * 5, max: 1, errors: ['time'] })
              .then(async (collected) => {
                collected.first().delete()
                mess.delete()
                arrayQuestions[presentQuestion].answer = collected.first().content
                answer = "Aucune"
                embed.setDescription([
                  `> ✏️ Question numéro **${presentQuestion + 1}**/**${arrayQuestions.length}**`,
                  "\u200b",
                  `${arrayQuestions[presentQuestion].question}`,
                  "\u200b",
                  "> ✏️ **Réponse**",
                  "\u200b",
                  `${arrayQuestions[presentQuestion].answer}`

                ])
                await msg.edit(embed)
                answer = true
              })
              .catch(console.error)
          })

        } else if (reaction.emoji.name === "➡️") {
          await reaction.users.remove(message.author.id)
          if (arrayQuestions[presentQuestion].obligatory === true && answer === false) {
            msg.channel.send(`${message.author}, cette question est **obligatoire** !`).then((mess) => {
              mess.delete({ timeout: 3500 })
            })
          } else if (presentQuestion + 1 < arrayQuestions.length) {
            presentQuestion++
            var currentAnswer = "Aucune"
            if (arrayQuestions[presentQuestion].answer !== "") {
              currentAnswer = arrayQuestions[presentQuestion].answer
            } else {
              answer = false
            }
            embed.setDescription([
              `> ✏️ Question numéro **${presentQuestion + 1}**/**${arrayQuestions.length}**`,
              "\u200b",
              `${arrayQuestions[presentQuestion].question}`,
              "\u200b",
              "> ✏️ **Réponse**",
              "\u200b",
              `${currentAnswer}`

            ])
            msg.edit(embed)
          } else if (presentQuestion + 1 === arrayQuestions.length) {
            embed.setDescription([
              "> ✉️ Formulaire terminé, il va être envoyé automatiquement dans un autre salon."
            ])
            map.delete(message.author.id)
            msg.edit(embed)
            msg.reactions.removeAll()
            // ID A MODIFIER ICI
            const channel = client.channels.cache.get("861397202727206912")
            presentQuestion = 0
            embed.setDescription([
              `> ✏️ Question numéro **${presentQuestion + 1}**/**${arrayQuestions.length}**`,
              "\u200b",
              `${arrayQuestions[presentQuestion].question}`,
              "\u200b",
              "> ✏️ **Réponse**",
              "\u200b",
              `${arrayQuestions[presentQuestion].answer}`
            ])
            channel.send("Formulaire de " + ` **${message.author.tag}**`, { embed: embed }).then(async (msg) => {
              await msg.react("⬅️")
              await msg.react("➡️")
              filterReacts = (reaction) => emojis.indexOf(reaction.emoji.name) > -1
              const newcollector = msg.createReactionCollector(filterReacts, { idle: 60000 * 60 })
              newcollector.on("collect", async (reaction) => {
                if (reaction.emoji.name === "⬅️") {
                  if ((presentQuestion - 1) === -1) {

                  } else {
                    presentQuestion--
                    currentAnswer = "Aucune"
                    if (arrayQuestions[presentQuestion].answer !== "") {
                      currentAnswer = arrayQuestions[presentQuestion].answer
                    }


                    embed.setDescription([
                      `> ✏️ Question numéro **${presentQuestion + 1}**/**${arrayQuestions.length}**`,
                      "\u200b",
                      `${arrayQuestions[presentQuestion].question}`,
                      "\u200b",
                      "> ✏️ **Réponse**",
                      "\u200b",
                      `${currentAnswer}`
                    ])
                    await msg.edit(embed)
                  }

                } else if (reaction.emoji.name === "➡️") {
                  if (presentQuestion + 1 > arrayQuestions.length - 1) {

                  } else {
                    presentQuestion++
                    currentAnswer = "Aucune"
                    if (arrayQuestions[presentQuestion].answer !== "") {
                      currentAnswer = arrayQuestions[presentQuestion].answer
                    }
                    embed.setDescription([
                      `> ✏️ Question numéro **${presentQuestion + 1}**/**${arrayQuestions.length}**`,
                      "\u200b",
                      `${arrayQuestions[presentQuestion].question}`,
                      "\u200b",
                      "> ✏️ **Réponse**",
                      "\u200b",
                      `${currentAnswer}`
                    ])
                    msg.edit(embed)
                  }

                }
              })
            })
          }
        } else if (reaction.emoji.name === "❌") {
          await reaction.users.remove(message.author.id)
          msg.channel.send("Annulation..").then(async (mess) => {
            await msg.delete()
            await mess.delete()
            map.delete(message.author.id)
          })
        }
      })




    })
  } else {
    return;
  }

}