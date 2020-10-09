const Discord = require('discord.js');
const client = new Discord.Client();
const { CommandoClient } = require('discord.js-commando');
const { Structures } = require('discord.js');
const path = require('path');
const { prefix, token } = require('./config.json');

Structures.extend('Guild', Guild => {
  class MusicGuild extends Guild {
    constructor(client, data) {
      super(client, data);
      this.musicData = {
        queue: [],
        isPlaying: false,
        volume: 1,
        songDispatcher: null
      };
    }
  }
  return MusicGuild;
});
const client = new CommandoClient({
  commandPrefix: prefix,
  owner: '566279767544823808',
  unknownCommandResponse: false
});

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['music', 'Music Command Group']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
  console.log('Ready!');
});


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('unsee content', { type: 'STREAMING' });
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
