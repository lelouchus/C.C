const fs = module.require("fs");	

module.exports.run = async (bot, message, args) => {
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Buna yetkin yok");

		let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
		if (!toMute) return message.channel.sendMessage("Kimi muteleyeceğimi belirtmediniz");

		if(toMute.id === message.author.id) return message.channel.sendMessage("Kendini muteleyemezsin :D");
		if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.sendMessage("Sen kimsin de onu muteliyorsun :DD");

		
		let role = message.guild.roles.find(r => r.name === "Muted");
		if(!role) {
		try{
			role = await message.guild.createRole({
				name: "Muted",
				color: "000000",
				permissions: []
			});

			message.guild.channels.forEach(async (channel, id) => {
				await channel.overwritePermissions(role, {
					SEND_MESSAGES: false,
					ADD_REACTIONS: false,
				});
			});
		} catch(e) {
			console.log(e.stack);
		}
	}	
	
	if(toMute.roles.has(role.id)) return message.channel.sendMessage("Zaten Muteli");

	bot.mutes[toMute.id] = {
		guild: message.guild.id,
		time: Date.now() + parseInt(args[1]) * 1000
	}

	await toMute.addRole(role);

	fs.writeFile("./mutes.json", JSON.stringify(bot.mutes, null, 4), err => {
		if(err) throw err;
		message.channel.send("Muteledim");
	});
}

module.exports.help = {
	name: "mute"
}