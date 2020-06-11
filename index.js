const discord = require('discord.js')
const client = new discord.Client();
var converter = require('number-to-words');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

client.on('guildMemberAdd', member => {
    var size = member.guild.members.cache.size;
    var english = converter.toWords(size)
    member.setNickname("Kim Jong " + english);
})

client.login(process.env.discord_token);
