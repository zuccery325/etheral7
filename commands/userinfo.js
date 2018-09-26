const Discord = require("discord.js");
module.exports.run = (client, message, args) => {
  let user = message.mentions.users.first() || message.author
  let lastmsg;
  let game;
  if (user.lastMessage === null) {
    lastmsg = "User didn't send a message"
  } else {
    lastmsg = user.lastMessage
  }
  if (user.presence.game === null) {
    game = "User is not playing a game"
  } else {
    game = user.presence.game.name
  }
  const embed1 = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(`Info for ${user.username}`, user.displayAvatarURL)
  .setThumbnail(user.displayAvatarURL)
  .setFooter(`This is generated by ${client.user.tag}`, client.user.avatarURL)
  .addField(`Info for ${user.username}`, `**User ID**: ${user.id}\n**User Discriminator**: ${user.discriminator}\n**Last message**: ${lastmsg}\n**User Status**: ${user.presence.status}\n**User Playing**: ${game}\n**Account created on**: ${user.createdAt}`)
  message.channel.send({embed : embed1})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ui"],
  permLevel: 2
};

exports.help = {
  name: "userinfo",
  description: "Gives some useful user info",
  usage: "userinfo [mention]"
};