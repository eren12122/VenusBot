const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
	const pingozel = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .addField("Botu Sunucuna Ekle", `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=536168563086458881&scope=bot&permissions=8)`, true)
    return message.channel.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet', 'bot-ekle', 'botu-davet-et', 'botekle', 'invite', 'bot-davet'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun Davet Linkini Gönderir.',
  usage: 'davet'
};