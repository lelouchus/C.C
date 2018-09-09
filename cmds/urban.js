
const urban = require('relevant-urban'), 
  Discord = require('discord.js'); 


exports.run = async (bot, message, args, tools) => {

 
  if (!args[0]) return message.channel.send(`***Aranıcak kelimeyi de yazsan iyi olur***`);
  
  
  let res = await urban(args.join(' ')).catch(e => { 

    return message.channel.send('***Bulamadım valla***');
  });


  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(res.word) 
    .setURL(res.urbanURL) 
    .setDescription(`**Definition:**\n*${res.definition}*\n\n**Example:**\n*${res.example}*`)
    .addField('Author', res.author, true) 
    .addField('Rating', `**\`Upvotes: ${res.thumbsUp} | Downvotes: ${res.thumbsDown}\`**`) 

  
  if (res.tags.length > 0 && res.tags.join(' ').length < 1024) {
    
    embed.addField('Tags', res.tags.join(', '), true) 
  }


  message.channel.send(embed); 

}
exports.help = {
    name: "urban",
    description: "",
    usage: "urban"
};

