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
    const swearWords = ["!play", "+urban", "!skip", "!remove"];
    if (message.channel.id === '256763767776477184') {
        if (swearWords.some(word => message.content.includes(word))) {
            message.delete();
            message.reply('Hey Bot Kanallarını kullan https://lelouchus.s-ul.eu/tIQAmUvg').then(message => message.delete(8100));

        }
        if (message.author.id === '235088799074484224')
            message.delete()
       		  // if (message.author.id == '191259118156251136')
        		 // message.react('😡') 

    }
    if (message.content == "smas") {
        message.channel.sendMessage("https://lelouchus.s-ul.eu/UO0P3Gug");
    }
    if (message.content == "akef") {
        message.channel.sendMessage("https://lelouchus.s-ul.eu/VOTjX71J");
    }
    if (message.content === "memet") {
        message.channel.send("https://lelouchus.s-ul.eu/xW3i7vRk");
    }
    if (message.content == "sa") {
        message.reply("Aleyküm Selam hoşgeldin");
    }
    if (message.content == "memetburak") {
        message.channel.send("https://lelouchus.s-ul.eu/cLz2yJTD");
    }
    if (message.content == "triggered") {
        message.channel.send("https://lelouchus.s-ul.eu/l2vOQ8Lx");
        message.delete()
    }
    if (message.content == "sülo") {
        message.channel.send("https://lelouchus.s-ul.eu/6tWNjGav");
    }
    if (message.content === "mehmet") {
        message.channel.send("https://lelouchus.s-ul.eu/pgzrIRJY");
    }
    if (message.content == "smug") {
        message.channel.send("https://lelouchus.s-ul.eu/6tn7zNkF");
        message.delete()
    }
    if (message.content == "hmmm") {
        message.channel.send("https://lelouchus.s-ul.eu/8oK7ezKs");
    }
    if (message.content == "gay") {
        message.channel.send("https://lelouchus.s-ul.eu/9wU8hxJg");
        message.delete()
    }
    if (message.content == "yamero") {
        message.channel.send("https://lelouchus.s-ul.eu/GLBdLKZ2");				
        message.delete()
    }
    if (message.content === "serat") {
        message.channel.send("https://lelouchus.s-ul.eu/u2FYdHXA")
    }
     if (message.content === "infinite gay") {
        message.channel.send("https://lelouchus.s-ul.eu/6vGNFZNz")
        message.delete()
    }
    if (message.content === "gods") {
        message.channel.send("https://lelouchus.s-ul.eu/lfgWin6i")
       message.delete()
    }

    if (message.content === "rekt") {
        message.channel.send("https://lelouchus.s-ul.eu/T4OUSnct")
       message.delete()
    }
    if (message.content == "buldok c.c") {
        message.channel.send(" hey hey hey yarrağı yedin!! https://lelouchus.s-ul.eu/wZutIXTG");
    }
    if (message.content == "ağla") {
        message.channel.send(" http://i.imgur.com/3K8DRrU.gif");
    }
     if (message.content == "cry") {
        message.channel.send(" http://i.imgur.com/3K8DRrU.gif");
    }
    let messageArray = message.content.split(/\s+/g);
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if (!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length))
    if (cmd) cmd.run(bot, message, args);



});

bot.login(botSettings.token);