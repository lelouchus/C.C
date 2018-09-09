const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const fs = require("fs");


const prefix = botSettings.prefix;

String.prototype.turkishToLower = function(){
	var string = this;
	var letters = { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" };
	string = string.replace(/(([İIŞĞÜÇÖ]))/g, function(letter){ return letters[letter]; })
	return string.toLowerCase();
}	


const bot = new Discord.Client({
    disableEveryone: true
});
bot.commands = new Discord.Collection();
bot.mutes = require("./mutes.json");


fs.readdir("./cmds/", (err, files) => {
    if (err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if (jsfiles.length <= 0) {
        console.log("no commands to load");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("ready", () => {
    console.log(`Ready ${bot.user.username}`);
    bot.user.setActivity("new +help");


    bot.setInterval(() => {
        for (let i in bot.mutes) {
            let time = bot.mutes[i].time;
            let guildId = bot.mutes[i].guild;
            let guild = bot.guilds.get(guildId);
            let member = guild.members.get(i);
            let mutedRole = guild.roles.find(r => r.name === "Muted");
            if (!mutedRole) continue;

            if (Date.now() > time) {
                console.log(`${i} is now able to be unmuted`);

                member.removeRole(mutedRole);
                delete bot.mutes[i];
                fs.writeFile("./mutes.json", JSON.stringify(bot.mutes), err => {
                    if (err) throw err;
                    console.log(`i have unmuted ${member.user.tag}.`);
                });
            }
        }
    }, 5000)
});

bot.on("message", async message => {
    if (message.channel.type === "dm") return;

    }
    let messageArray = message.content.split(/\s+/g);
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if (!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length))
    if (cmd) cmd.run(bot, message, args);



});

bot.login(botSettings.token);
