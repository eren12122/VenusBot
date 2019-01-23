const Discord = require('discord.js');
const Cleverbot = require('cleverbot.io');
var bot = new Cleverbot('P2LB2ZURZrh9jROl','XgrSI4RanDiiTTFC7gnoXBLKkJCfd6Wi');

exports.run = (client, message, args) => {
  message.channel.startTyping();
bot.setNick('Venus');
let yazi = args.slice(0).join(' ')
bot.create(function (err, session) {
bot.ask(yazi, function (err, response) {

 message.channel.send(response);
  message.channel.stopTyping();
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sohbet',
  description: 'Bot İle Sohbet Edersiniz',
  usage: 'sohbet [yazı]'
};