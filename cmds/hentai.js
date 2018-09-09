const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (bot, message, args,) => {
    if (!message.channel.nsfw) return message.channel.send('Yallah nsfw kanalına!')
    superagent.get('https://nekos.life/api/v2/img/lewd')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setImage(response.body.url)
      .setColor(`RANDOM`)
  message.channel.send(lewdembed);
    })
}

exports.help = {
    name: "hentai",
    description: "",
    usage: "hentai"
};

