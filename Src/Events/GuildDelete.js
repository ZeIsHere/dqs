const chalk = require("chalk");
const Box = require("cli-box");
const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
    name: "guildDelete",
    once: true,
    run: async(guild) => {
        db.delete(`rolecreatelimit_${guild.id}`);
        db.delete(`roledeletelimits_${guild.id}`);
        db.delete(`acitonslogs_${guild.id}`);
        db.delete(`channelcreatelimits_${guild.id}`);
        db.delete(`channeldeletelimits_${guild.id}`);
        db.delete(`banlimits_${guild.id}`);
        db.delete(`kicklimits_${guild.id}`);
        db.delete(`antibot_${guild.id}`);
        db.delete(`webhook_${guild.id}`);
    }
}