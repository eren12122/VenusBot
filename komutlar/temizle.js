const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    const mesajsayisi = parseInt(args[0])
    if(!mesajsayisi) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('RANDOM').setDescription("Silinecek Mesaj Sayısı'nı Giriniz").setAuthor('Hata'))
    if(mesajsayisi > 99) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('RANDOM').setDescription("99 Adetten Fazla Mesaj Silemem").setAuthor('Hata'))
    message.channel.bulkDelete(mesajsayisi + 1)
    message.channel.sendEmbed(new Discord.RichEmbed().setColor('RANDOM').setAuthor("Başarılı").setDescription(`${mesajsayisi} Adet Mesaj Sildim`)).then(message => message.delete(5000));
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sil'],
  permLevel: 1,
};

exports.help = {
  name: 'temizle',
  description: 'Yazdığınız Kadar Mesaj Siler.',
  usage: 'temizle [mesaj sayısı]'
};
