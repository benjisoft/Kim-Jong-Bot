const discord = require('discord.js')
const client = new discord.Client();
var converter = require('number-to-words');
const {Translate} = require('@google-cloud/translate').v2;
const translate = new Translate();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

client.on('guildMemberAdd', member => {
    var size = member.guild.members.cache.size;
    var english = converter.toWords(size)
    translateText(english, "ko")
    member.setNickname("Kim Jon" + size);
})

client.login(process.env.discord_token);

async function translateText(text, target) {
  let [translations] = await translate.translate(text, target);
  translations = Array.isArray(translations) ? translations : [translations];
  console.log('Translations:');
  translations.forEach((translation, i) => {
    console.log(`${text[i]} => (${target}) ${translation}`);
  });
}