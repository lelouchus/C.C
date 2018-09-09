const fs = require("fs");

module.exports.run = async (bot, message, args) => {
		if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Buna yetkin yok");

		let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
		if (!toMute) return message.channel.sendMessage("Kimi muteleyecegimi belirtmediniz");

		if(toMute.id === message.author.id) return message.channel.sendMessage("Kendini muteleyemezsin :D");
		if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.sendMessage("Sen kimsin de onu muteliyorsun :DD");

		
		let role = message.guild.roles.find(r => r.name === "Muted");
		
	    if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("Muteli Değil");

	await toMute.removeRole(role);

	delete bot.mutes[toMute.id];

	fs.writeFile("./mutes.json", JSON.stringify(bot.mutes), err => {
			if(err) throw err;
			message.channel.sendMessage(`Muteyi kaldırdım ${toMute.user.tag}.`);
		});
}

module.exports.help = {
	name: "unmute"
}