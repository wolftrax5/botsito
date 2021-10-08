"use strict";

require("dotenv").config();
const { Client, Intents } = require("discord.js");

console.log("Here we go again 🕶");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const TOKEN = process.env.TOKEN;

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready! 🤖");
});
const MESSAGE_RESPONSE = ["Mundo 🌍", "Como estas ?", "Que tal"];
//
function gotMessage(message) {
  /* This function handler all new messages
    include the messages created by the bot
    be carefull of who & what reply
  */
  if (message.content === "hola" && !message.author.bot) {
    let randomIndex = Math.floor(Math.random() * MESSAGE_RESPONSE.length);
    message.channel.send(MESSAGE_RESPONSE[randomIndex]);
  }
}
client.on("messageCreate", gotMessage);
// Login to Discord with your client's token
client.login(TOKEN);
