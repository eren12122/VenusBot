const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message) => {
  let rol = message.mentions.roles.first()
  
  db.set(`otorol_${message.guild.id}`, rol.id)
  message.channel.send(`Otorol <@&${rol.id}> Olarak Ayarlandı!`)
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: 'otorol',
  description: 'Sunucuya Gelen Kişiye Belirlediğiniz Rolu Verir',
  usage: 'otorol <@rol>'
};