require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");
const { CommandHandler } = require("djs-commander");
const path = require("path");
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});
new CommandHandler({
    client,
    commandsPath: path.join(__dirname, "commands"),
    eventsPath: path.join(__dirname,"events"),
});
client.on("messageCreate", (message) => {
    if (message.content === "핑") {
      message.channel.send("퐁~!");
    }
  });
client.login(process.env.TOKEN);