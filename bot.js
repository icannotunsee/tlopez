const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('unsee content', { type: 'STREAMING' });
});


  client.on('message', message => {
    const args = message.content.split(" ").slice(1);
    if(message.content.startsWith('t!say') && message.guild.member(message.author).hasPermission("MANAGE_ROLES")) {
        message.delete()
        var saytext = args.join(" ");
        client.channels.get("742073189605310483").send(saytext)
    }
  });


  client.login(process.env.BOT_TOKEN);
