const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
  
    if (!message.channel.nsfw) return message.reply("Bura nsfw kanali mi pic!");

    var subreddits = [
        'NSFW_Wallpapers',
        'SexyWallpapers',
        'HighResNSFW',
        'nsfw_hd',
        'UHDnsfw'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setFooter("2d>3d")
                .setImage(url);
            message.channel.send({
                embed
            });
        })
}





exports.help = {
    name: "3d",
    description: "",
    usage: "3d"
};