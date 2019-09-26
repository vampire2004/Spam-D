const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("626592264256225292")
setInterval(function() {
channel.send(`cRDITS`);
}, 30)
})

client.login(process.env.BOT_TOKEN);