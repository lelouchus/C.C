module.exports.run = async (bot, message, args) => {

	message.channel.send("DM'lerini kontrol et");
	message.author.send('```Komutlar```\n**+urban**> Urban sözlükte arama yapar. örn:``+urban lel``\n**+avatar**> Avatarınızı gösterir(başkasının avatarı için ``+avatar @someone``\n**+icon**> Server iconunu atar\n**+say**> Bot yazdığınız yazıyı tekrarlar\n**+mute**> Taglediğiniz kullanıcıyı muteler örn:``+mute @someone``\n**+unmute**> Kullanıcının mutesini kaldırır örn:``+unmute @someone``\n**+cat**> Rastgele bir kedi fotosu atar\n**+dog**> Rastgele bir köpek fotosu atar\n**+weather**> Belirttiğiniz konumun hava durumunu atar\n**+ping**> Botun pingini gösterir\n**+trans**>Belirttiğiniz yazıyı belirttiğiniz dile çevirir. örn:``+trans german merhaba``\n**+sil**> Yazıldığı kanaldaki mesajları siler örn:``+sil 5``\n**+hug @someone**> Kucakk\n**+booru**>Random bir anime resmi atar **NOT:**Hala geliştirme aşamasındadır bazi buglari var ve  çok nadir de olsa nsfw foto atabiliyor.\n```NSFW KOMUTLARI```\n**+hentai**\n+**2dgif**\n**+3d**\n**+2dgif**\n**+gif**\n```Reactler```\n***smas***,***akef***,***memet***,***mehmet***,***sülo***,***sa***,***triggered***,***smug***,***hmmm***,***gay***,***infinite gay***,***yamero***,***gods***,***rekt***,***cry***,***ağla***,***buldok c.c*** ');

}

module.exports.help = {
	name: "help"
}