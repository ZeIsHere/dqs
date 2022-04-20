module.exports = {
    name: "whitelist",
    ownerOnly: true,
    run: async(client, message, args, container) => {
        if(message.author.id === message.guild.ownerID) {

        let user = message.mentions.users.first()
        if(!user) {
        const row = new container.Discord.MessageActionRow().addComponents(
            new container.Discord.MessageSelectMenu()
					.setCustomId('test')
					.setPlaceholder('Différent Configurations Antiraid')
					.addOptions([
                        {
                            label: '⚙️・Configuration Antiraid',
							description: 'Whitelist <@user>.',
							value: 'config',
                        },
                        {
                            label: '⚙️・Configuration Antiraid',
							description: 'Whitelist <@user>.',
							value: 'config',
                        },
                        {
                            label: '⚙️・Configuration Antiraid',
							description: 'Whitelist <@user>.',
							value: 'config',
                        },
                        {
                            label: '⚙️・Configuration Antiraid',
							description: 'Whitelist <@user>.',
							value: 'config',
                        },
                        {
                            label: '⚙️・Configuration Antiraid',
							description: 'Whitelist <@user>.',
							value: 'config',
                        }
                    ])
                    
                    )
                    const whitelist1 = {
                        title: '',
                        author: {
                            name: '',
                            icon_url: `${client.user.displayAvatarURL()}`,
                        },
                        description: "⚙️**・Configuration Antiraid**\n`show`, `rolecreatelimit`, `logs`"
                    }
                    
                    message.reply({
                        embeds: [whitelist1],
                        components: [row],
                        allowedMentions: {
                            repliedUser: false
                        }
                    })
                }
            }
            }
        }