const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if(!message.member.hasPermissions("ADMINISTRATOR")) return message.channel.send("you dont have a permisions");
message.guild.members.map(x=>x.sendMessage(args.join(" ")))

  }

module.exports.help = {
  name:"zl"
}
