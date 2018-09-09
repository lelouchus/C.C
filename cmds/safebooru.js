const Discord = require('discord.js');
const fs = require('fs');
const booru = require('booru');
module.exports.run = async (bot, message, args) => {
    var urlArray = new Array();
    booru.search("konan", [args[0], args[1]], { limit: 1, random: true })
        .then(booru.commonfy)
        .then(images => {

            for (let image of images) {
                  let embed = new Discord.RichEmbed()
        .addField('test', 'teest')
        .setImage(image.common.file_url)
        .setFooter("Powered by lelouchus");
        message.channel.send(embed);
            
    
 }       
        
  
});
    }
module.exports.help = {
    name: "booru"
}