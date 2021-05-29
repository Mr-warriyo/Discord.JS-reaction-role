const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

const ReactionRoleManager = require("djs-reaction-role");
const manager = new ReactionRoleManager(client, {
    storage: "./role.json"
});
client.reactionRoleManager = manager;

client.on("ready", () => {
    console.log("Reaction Role is ready!");
});

client.on('message', message => {
    if (message.content === 'react') {
        client.reactionRoleManager.create({
      messageID: '847778688962789406',
      channel: message.channel,
      reaction: '✅',
      role: message.guild.roles.cache.get('847778770551177216')
     })
    }
})
client.login('Bot Token Here')
