module.exports = async function (client, message, command, Discord) {
    if (!command.onlyUsers) return false;
    if (command.onlyUsers.some(i => i == message.member.user.id)) return false;
    else {
        let onlyUsers = []
        command.onlyUsers.forEach(id => {
            onlyUsers.push(`<@${id}>`)
        })
        if (command.returnOnlyUsers == false || command.returnNoErrors) return true;
        else message.reply({
            embeds: [new Discord.MessageEmbed()
                .setAuthor({
                    name: message.member.user.tag,
                    iconURL: message.member.user.displayAvatarURL({ dynamic: true })
                })
                .setColor("RANDOM")
                .setTimestamp()
                .setDescription(`Cette commande peut seulement être éxécuter par ses utilisateurs.\n• ${onlyUsers.join("\n• ")}`)],
                allowedMentions: {
                    repliedUser: false
                }
            })
            return true;
        }
    }