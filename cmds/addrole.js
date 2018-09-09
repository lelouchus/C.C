const Discord = require("discord.js");
let dev = ('191259118156251136');

module.exports.run = async (bot, message, args) => {

  
  if(!message.author.hasPermission('MANAGE_ROLES')) return message.reply("Yoo.");
  if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) return message.channel.send('YEtkimi GEri Ver!!');
  if(!args[0]){ 
    message.reply("Usage: !addrole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Kullaniciyi bulamadim.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Rol BEliRt!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("rolu bulamadim.");

  if(rMember.roles.has(gRole.id)) return message.reply("zaten o role sahip.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
  }catch(e){
    console.log(e.stack);
    message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)
  }
}

module.exports.help = {
  name: "addrole"
}
