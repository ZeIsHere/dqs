module.exports = async function (message, command, Discord) {
    if (!command.requiredRoles) return false;
    let missing = []
    command.requiredRoles.forEach(role => {
        if (!message.member.roles.cache.has(role)) missing.push(`<@&${role}>`);
    })
    if (missing.length == 0) return false;
    else {
        if (command.returnRequiredRoles == false || command.returnNoErrors) return true;
        else message.reply({
            embeds: [new Discord.MessageEmbed()
                .setAuthor({
                    name: message.member.user.tag,
                    iconURL: message.member.user.displayAvatarURL({ dynamic: true })
                })
                .setColor("RANDOM")
                .setTimestamp()
                .setDescription(`Vous avez besoin des roles suivants pour pouvoir faire ceci.\n•${missing.join("\n•")}`)],
                allowedMentions: {
                    repliedUser: false
                }
            })
            return true
        }
    }