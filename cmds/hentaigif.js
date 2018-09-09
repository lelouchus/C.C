const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/Random_hentai_gif`);
    if (!message.channel.nsfw) return message.reply(" Burada kullanamazsin kocm nsfw kanalina.");
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Hentai sanattir.")
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter("Powered by lelouchus");

    message.channel.send(hentaiEmbed);

}

module.exports.help = {
    name: "2dgif"
}