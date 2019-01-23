const Discord = require('discord.js');
const snekfetch = require ('snekfetch')

module.exports = client => {
snekfetch.post(`https://discordbots.org/api/bots/534798373568512000/stats`)
    client.user.setGame(`》Komutlar İçin v!yardım | Sunucuna Eklemek İçin v!davet`)
}