module.exports = async function (message, command, Discord) {
    if (!command.requiredAnyRole) return false;
    if (command.requiredAnyRole.some(i => message.member.roles.cache.has(i))) return false;
    else {
        let requiredRoles = []
        command.requiredAnyRole.forEach(i => requiredRoles.push(`<@&${i}>`))
        if (command.returnRequiredAnyRole == false || command.returnNoErrors) return true;
        else message.reply({
            embeds: [new Discord.MessageEmbed()
                .setAuthor({
                    name: message.member.user.tag,
                    iconURL: message.member.user.displayAvatarURL({ dynamic: true })
                })
                .setColor("RANDOM")
                .setTimestamp()
                .setDescription(`Vous avez besoin d'un des rôles suivants pour pouvoir faire ceci.\n•${requiredRoles.join("\n•")}`)],
                allowedMentions: {
                    repliedUser: false
                }
            })
            return true;
        }
    }
