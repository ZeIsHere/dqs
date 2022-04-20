module.exports = {
    name: "help",
    ownerOnly: true,
    run: async(client, message, args, container) => {
        const row = new container.Discord.MessageActionRow().addComponents(
            new container.Discord.MessageSelectMenu()
					.setCustomId('test')
					.setPlaceholder('Différent Menus')
					.addOptions([
                        {
                            label: '⚙️・Configuration Antiraid',
							description: 'Menu Antiraid + Infos.',
							value: 'config',
                        }
                        
                    ])
                    
                    )
                    const helpembed1 = {
                        title: 'Mon prefix est : `a!`',
                        author: {
                            name: 'Menu d\'aide d\'Artificial.',
                            icon_url: `${client.user.displayAvatarURL()}`,
                        },
                        description: "⚙️**・Configuration Antiraid**\n`show`, `rolecreatelimit`, `logs`"
                    }
                    
                    message.reply({
                        embeds: [helpembed1],
                        components: [row],
                        allowedMentions: {
                            repliedUser: false
                        }
                    })
                    new container.Discord.MessageButton()
                    .setCustomId('evalbtn')
                    .setLabel('')
                    .setStyle('DANGER')
                }
            }