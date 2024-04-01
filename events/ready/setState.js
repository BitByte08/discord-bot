const { ActivityType } = require("discord.js");

module.exports = (client) => {
  client.user.setActivity({
    name: "Hello Discord!",
    type: ActivityType.Playing,
  });
};