var charset = require('charset');
var http = require('http');
 
http.get('http://nodejs.org/', function (res) {
  res.on('data', function (chunk) {
    console.log(charset(res.headers, chunk));
    // or console.log(charset(res, chunk));
    res.destroy();
  });
});
var request = require('request');
var charset = require('charset');
var jschardet = require('jschardet');
 
request({
  url: 'http://discordapp.com',
  encoding: null
}, function (err, res, body) {
  if (err) {
    throw err;
  }
  enc = charset(res.headers, body);
  enc = enc || jschardet.detect(body).encoding.toLowerCase();
  console.log(enc);
});

const Lolibooru = require("node-lolibooru");
const loli = new Lolibooru();
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

loli.getLoli(1, 1, "ecu8080").then((data) => {

 const embed = new Discord.RichEmbed()
    .setColor('#28df3e')
    .setTitle("H:")
    .setImage(data.file_url)
    .setFooter("Powered by lelouchus")
    message.channel.send({embed})





});
}

module.exports.help = {
    name: "loli2",
    category: "loli2"
}