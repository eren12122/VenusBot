const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('Bu Komutu Özel Mesajlarda Kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.join(' ');
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.channel.sendEmbed(new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription('Kickleyeceğin Kişiyi Etiketlemen Gerek')
  .setAuthor('Hata'))
  
  if (reason.length < 1) return message.channel.sendEmbed(new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor('Hata')
  .setDecription('Sebep Yazmalısın'))
  
  if (!message.guild.member(user).kickable) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('RANDOM').setAuthor('Hata').setDescription('Yetkilileri Sunucudan Atamazsın'))
  message.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .addField('Eylem:', 'Sunucudan atma')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator}`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at'],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz Kişiyi Sunucudan Atar.',
  usage: 'kick [kullanıcı] [sebep]'
};
