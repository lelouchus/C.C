const Discord = require("discord.js");

const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

let {
        body
    } = await superagent
        .get(`https://nekos.life/api/v2/img/smallboobs`);
    if (!message.channel.nsfw) return message.channel.send("Burada kullanamazsin!");

    let hentaiEmbed = new Discord.RichEmbed()
        .setTitle("Al amk loliconu")
        .setColor('RANDOM')
        .setImage(body.url)
        .setColor('RANDOM')

    message.channel.send(hentaiEmbed);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["loli"],
    permLevel: 0

}

exports.help = {
    name: "loli",
    description: "",
    usage: "loli"
};