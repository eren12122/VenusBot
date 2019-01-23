const Discord = require('discord.js');
exports.run = function(client, message, args) {
const id = args.join(" ")
const avatar = message.author.avatarURL;
message.channel.sendEmbed(new Discord.RichEmbed()
.setAuthor(`Avatarınız:`)
.setImage(avatar)
.setTimestamp()
.setColor('RANDOM'));
   }


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'avatar',
 description: 'Avatarınızı Resim Olarak Atar ',
 usage: 'avatar'
};
