const Discord = require('discord.js')
const client = new Discord.Client()

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setAuthor('Hata')
  .setDecription('Bu Komutu Özel Mesajlarda Kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.channel.sendEmbed(new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor('Hata')
  .setDescription('Banlanacak Kişiyi Yazmalısın'))
  if (reason.length < 1) return message.channel.sendEmbed(new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor('Hata')
  .setDescription('Ban Sebebini Yazmalısın.'))

  if (!message.guild.member(user).bannable) return message.channel.sendEmbed(new Discord.RichEmbed()
  .setAuthor('Hata')                                                                       .setColor('RANDOM')
  .setDescription('Yetkilileri Banlayamazsın'))
  message.guild.ban(user, 2);

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .addField('Eylem:', 'Sunucudan Yasaklama')
    .addField('Yasaklanan Kullanıcı:', `${user.username}#${user.discriminator}`)
    .addField('Yasaklayan Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Yasaklama Sebebi:', reason);
  return message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz Kişiyi Sunucudan Yasaklar.',
  usage: 'ban [kullanıcı] [sebep]'
};