const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let oyun = args.slice(0).join(` `);
    if (oyun.length < 1) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Botun Oynuyor Değiştirmek İçin Yazı Yazman Gerek').setColor("RANDOM").setAuthor("Hata"));
  message.delete();
  client.user.setGame(oyun);
  message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Oyun **${oyun}** olarak değiştirildi.`).setColor("RANDOM").setAuthor("Başarılı"));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'oynuyor',
  description: 'Botun Oynadığı Oyunu Değişir',
  usage: 'oynuyor <oyun ismi>'
};