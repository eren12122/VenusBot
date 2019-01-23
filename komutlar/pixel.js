const Discord = require('discord.js')
const Jimp = require('jimp')

exports.run = (client, message, params) => {
  message.channel.send('Fotoğraf İşleniyor').then(message => message.delete(825));
  let user = message.mentions.users.first() || message.author
  
      Jimp.read(user.avatarURL, function (err, image){
          image.resize(295, 295)
          if(err) return message.channel.send('Bir Hata Oluştu: ``'+err+'``\n Yapımcıya Bildirin');
          image.pixelate(10, 10, 10).write('img/pixel/pixel.png');
          setTimeout(() => {
            message.channel.send({file: 'img/pixel/pixel.png'});
          }, 500);
      });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: 'pixel',
  description: 'Avatarınızı Pixeller',
  usage: 'pixel [kullanıcı]'
};