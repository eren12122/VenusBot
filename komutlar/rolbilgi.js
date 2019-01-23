const Discord = require("discord.js");
const superagent = require("superagent");
exports.run = async (client,message,args) => {
  var rol = args.join(" ")
  let role = message.guild.roles.find("name", `${rol}`)
  var hata = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor('Hata')
  .setDescription(`Bir Rol Yazın (Veya İsmini Tam Yazın)`);
  if(!role) return message.channel.send(hata);
  var moment = require("moment");
  var temps = moment(message.createdTimestamp).format("LLLL");
  var roleinfoEmbed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField('✏ Rol İsmi', role.name, true)
  .addField('🆔 ID', role.id, true)
  .addField('👥 Role Sahip Kullanıcılar', role.members.size, true)
  .addField('💙 Renk', role.hexColor, true)
  .addField('📣 Etiketleme', role.mentionable ? `\n<a:kirmizi:503934174277926943> Kapalı` : `<a:kirmizi:503934174277926943> Açık`, true)
  .addField('📅 Oluşturulduğu Zaman', moment(role.createdAt).format("LL"), true)
  message.channel.send(roleinfoEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rolinfo', 'rolhakkında', 'rolbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'rolbilgi',
  description: 'Rol Hakkında Bilgi Verir.',
  usage: 'rolbilgi <rolismi>'
};