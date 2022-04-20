const chalk = require("chalk");
const Box = require("cli-box");
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
module.exports = {
    name: "guildMemberAdd",
    once: true,
    run: async(member, message, guild) => {
        const pdpembed = new MessageEmbed()
        .setColor('#0099ff')
        .setImage(`${member.displayAvatarURL({dynamic: true})}`);
        member.guild.channels.cache.get('966347648242188289').send({embeds: [pdpembed]});
    }
}