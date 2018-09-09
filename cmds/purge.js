let devs = ("254859606168174592", '191259118156251136');
module.exports.run = async (bot, message, args) => {

    if (message.author.id !== devs) 
    if (!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send('YEtkimi GEri Ver!!');

    if (!args[0]) return message.channel.send('hm.');
    if (args[0] <= 1) return message.channel.send('1 mesajı da elinle sil amk uyuzu.');
    if (args[0] > 100) return message.channel.send(`100'den fazla silemezsin`);
    if (isNaN(args[0])) return message.channel.send('Sayı belirtmen lazım knk');

    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Silindi **${args[0]}** .`).then(message => message.delete(1000));
    }).catch().catch((e) => message.channel.send('14 günden eski mesajları silemezsin'));

}

module.exports.help = {
    name: "sil",
    category: "moderation"
}