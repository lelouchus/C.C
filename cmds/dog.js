const superagent = require('superagent')
const Discord = require('discord.js')
exports.run = async (client, message, args, tools) => {
    
    const { body } = await superagent
    .get('https://dog.ceo/api/breeds/image/random');
    const embed = new Discord.RichEmbed()
    .setColor('#28df3e')
    .setTitle("Hav Hav :dog2:")
    .setImage(body.message)
    .setFooter("Powered by lelouchus");
    message.channel.send({embed})
    

}

module.exports.help = {
	name: "dog"
}