require('dotenv').config();

const { Client } = require('discord.js');
const { clean } = require('../src/clean');

const client = new Client();

client.login(process.env.DISCORD_BOT_TOKEN);

client.on('message', async msg => {
    if (msg.content.startsWith('$')) {
        switch(msg.content) {
            case '$join':
                if (msg.member.voice.channel) {
                  const connection = await msg.member.voice.channel.join();
                } else {
                    msg.reply('You need to join a voice channel first!');
                }
                break;
            case '$clean':
                clean(msg);
                break;
            case '$morpion':
                msg.reply(`bientot`);
                break;
            default:
                msg.reply(`j'ai pas ça en stock fréro`);
                break;
        }
    }
});