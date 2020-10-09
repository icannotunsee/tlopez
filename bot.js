const Discord = require('discord.js');
const Music = require('discord.js-musicbot-addon-v2');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('unsee content', { type: 'STREAMING' });
});

const PREFIX = process.env.PREFIX;

const music = new Music(client, {
    youtubeKey: process.env.BOT_YOUTUBE_TOKEN,
    prefix: PREFIX,
    ownerOverMember: true,
    botOwner: '566279767544823808',
    djRole:'eyes',
    maxQueueSize: "100",
    disableLoop: true,
});


  client.on('message', message => {
    const args = message.content.split(" ").slice(1);
    if(message.content.startsWith('t!say') && message.guild.member(message.author).hasPermission("MANAGE_ROLES")) {
        message.delete()
        var saytext = args.join(" ");
        channel = client.channels.cache.get('742073189605310483');
        channel.send(saytext);
    }
  });


  client.login(process.env.BOT_TOKEN);
