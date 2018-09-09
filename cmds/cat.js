const snek = module.require("snekfetch");
const Discord = require('discord.js')
const api = "http://aws.random.cat/meow";

module.exports.run = async (bot, message, args) => {


	let file = (await snek.get(api)).body.file;
	if(!file) return message.channel.send("Vallaha Bot bozuk değil site bozuk");

	 const embed = new Discord.RichEmbed()
    .setColor('#28df3e')
    .setTitle(':cat:')
    .setImage(file)
    .setFooter("Powered by lelouchus");
    message.channel.send({embed})
    

}
	

module.exports.help = {
	name: "cat"
}