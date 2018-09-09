module.exports.run = (bot, message, args) => {


const word = ["+say"];

if (message.content.includes(word)) 
	message.delete()

    message.channel.send(args.join(" "))}
    	

    module.exports.help = {
	name: "say"
}