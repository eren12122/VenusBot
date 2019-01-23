/**
	Örnek komuta göz atmayı unutmayın orada
	bir kaç şey yazıyor. komutlar/ornek.js
*/

const Discord = require('discord.js')
const ayarlar = require("./ayarlar.json")
const client = new Discord.Client()


/**
	Yukarıya bilgilerinizi yazın.
	Alt kısımda kodlar bulunuyor dokunmayın.
*/

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()

const superagent = require('superagent');
const request = require('request');
const chalk = require('chalk');
const fs = require("fs")
const db = require ('quick.db')
const ytdl = require('ytdl-core');
const jimp = require ('jimp');
const moment = require('moment');
const GIFEncoder = require ('gifencoder');
const { Client, Util } = require('discord.js');
const devs = ('411864908989202453');
require('./util/eventLoader')(client);
let prefix = "v!"

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

//discord.js
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  })
};

client.on('guildMemberAdd', async member => {
  //
  let rol = await db.fetch(`otorol_${member.guild.id}`).then (i => {
  //
  var role = member.guild.roles.get (i)
  member.addRole(role)
})
  
  })

client.on("message", message => {

if (message.content === prefix + "ping") {
    const pingozel = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(`Gecikme Süreleri`)
    .setDescription(`Normal Gecikme : [${client.ping}]  \nMesaj Gecikmesi : [${new Date().getTime() - message.createdTimestamp}]`)
    return message.channel.sendEmbed(pingozel);
}
});
 

client.on('message', message => {
if (message.content === prefix + "yazıtura") {
    var result = Math.floor((Math.random() * 2) + 1);
    if (result == 1) {
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setAuthor('Tura')
      .setImage('https://i.imgur.com/iUaWmhg.jpg')
      message.channel.send(embed);
    } else if (result == 2) {
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setAuthor('Yazı')
      .setImage('https://i.imgur.com/54JPj7Z.jpg')
      message.channel.send(embed);
    }
}});

client.on('message', async message => {
if (message.content.toLowerCase() === prefix + "kedi") {

  let {body} = await superagent
  .get(`aws.random.cat/meow`);

  let kedi = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`${message.author.username}`)
  .setImage(body.file);

  message.channel.send(kedi)

}});

client.on('message', async message => {
if (message.content.toLowerCase() === prefix + "köpek") {
  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  let kopek = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`${message.author.username}`)
  .setImage(body.url);

  message.channel.send(kopek)

}});
 
client.on('message', async message => {
if (message.content.toLowerCase() === prefix + "ördek") {

    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`${message.author.username}`)
    .setImage(("https://random-d.uk/api/v1/images/"+ Math.floor(Math.random() * (1 - 20) + 60)+".jpg"))
    message.channel.send(embed)

}});

client.on("message", async message => {
  var user = message.mentions.users.first() || message.author;
    if (message.content.toLowerCase() === prefix + "passed") {
      message.channel.send('Fotoğraf İşleniyor').then(message => message.delete (1500));
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        jimp.read(user.avatarURL, (err, image) => {
            image.resize(295, 295)
            image.greyscale()
            image.gaussian(3)
            jimp.read("https://cdn.glitch.com/b97d6cbd-5587-4b7b-9fa2-1b51a7c61962%2F1547657189063.png?1547657227211", (err, avatar) => {
                avatar.resize(295, 295)
                image.composite(avatar, 4, 0).write(`./img/passed/passed.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/passed/passed.png`));
                }, 1000);
          message.channel.stopTyping();
            });
        });
    }
});

client.on("message", async message => {
  var user = message.mentions.users.first() || message.author;
    if (message.content.toLowerCase() === prefix + "wasted") {
      message.channel.send('Fotoğraf İşleniyor').then(message => message.delete (1500));
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        jimp.read(user.avatarURL, (err, image) => {
            image.resize(295, 295)
            image.greyscale()
            image.gaussian(3)
            jimp.read("https://cdn.glitch.com/b18a2fa6-68cb-49d5-9818-64c50dd0fdab%2F1.png?1529363616039", (err, avatar) => {
                avatar.resize(295, 295)
                image.composite(avatar, 4, 0).write(`./img/wasted/wasted.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/wasted/wasted.png`));
                }, 1000);
          message.channel.stopTyping();
            });
        });
    }
});

client.on("message", async message => {
	if (message.author.bot) return
	if (!message.content.startsWith(client.ayarlar.prefix)) return
	var command = message.content.split(' ')[0].slice(client.ayarlar.prefix.length)
	var args = message.content.split(' ').slice(1)
	var cmd = ''

	if (client.commands.has(command)) {
		var cmd = client.commands.get(command)
	} else if (client.aliases.has(command)) {
		var cmd = client.commands.get(client.aliases.get(command))
	}

	if (cmd) {
		if (cmd.conf.permLevel === 1) {
			if (!message.member.hasPermission("MANAGE_MESSAGES")) {
				const embed = new Discord.RichEmbed()
					.setDescription(`Bu Komutu Kullanmak İçin **Mesajları Yönet** Yetkisi Gerek.`)
					.setColor("RANDOM")
					.setTimestamp()
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 2) {
			if (!message.member.hasPermission("BAN_MEMBERS")) {
				const embed = new Discord.RichEmbed()
					.setDescription(`Bu Komutu Kullanmak İçin **Üyeleri Banla** Yetkisi Gerek.`)
					.setColor("RANDOM")
					.setTimestamp()
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 3) {
			if (!message.member.hasPermission("ADMINISTRATOR")) {
				const embed = new Discord.RichEmbed()
					.setDescription(`Bu Komutu Kullanmak İçin **Yönetici** Yetkisi Olması Gerek.`)
					.setColor("RANDOM")
					.setTimestamp()
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 4) {
			const x = await client.fetchApplication()
			if (x.owner.id !== message.author.id) {
				const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
					.setDescription(`Bu Komutu Sadece Botun Yapımcısı Kullanabilir.`)
					.setTimestamp()
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.enabled === false) {
			const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
				.setDescription(`Bu Komut Devre Dışı.`)
				.setTimestamp()
			message.channel.send({embed})
			return
		}
		if(message.channel.type === "dm") {
			if (cmd.conf.guildOnly === true) {
				const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
					.setDescription(`Bu Komut Özel Mesajlarda Kapalı.`)
					.setTimestamp()
				message.channel.send({embed})
				return
			}
		}
		cmd.run(client, message, args)
	}
})

client.login('NTM2MTY4NTYzMDg2NDU4ODgx.DynBRQ.o6l2WqdYhOcHOsMQAuhP375YzXU')
