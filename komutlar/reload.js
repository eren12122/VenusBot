exports.run = (client, message, args) => {

  let command;
  if (client.commands.has(args.join(' '))) {
    command = args.join(' ');
  } else if (client.aliases.has(args.join(' '))) {
    command = client.aliases.get(args.join(' '));
  }
  if (!command) {
    return message.channel.send("`" + args.join(' ') + "` Adında Bir Komut Yok.");
  } else {
    message.channel.send("`" + command + "` Adlı Komut Yeniden Başlatılıyor.")
      .then(m => {
        client.reload(command)
          .then(() => {
            m.edit("`" + command + "` Adlı Komut Başarıyla Yeniden Başlatıldı.");
          })
          .catch(e => {
            m.edit(`Komut Yeniden Başlatılırken Bir Hata Oluştu: ${command}\n\`\`\`${e.stack}\`\`\``);
          });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r'],
  permLevel: 4
};

exports.help = {
  name: 'reload',
  description: 'İstediğiniz bir komutu yeniden başlatır.',
  usage: 'reload <komut adı>'
};
