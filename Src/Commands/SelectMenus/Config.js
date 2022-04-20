module.exports = {
    name: "config",
    run: async(client, interaction, container) => {
        const configembed = {
            author: {
                name: 'Menu d\'aide d\'Artificial.',
                icon_url: `${client.user.displayAvatarURL()}`,
            },
            description: "⚙️**・Configuration Antiraid**\n\n`show | Montre les informations de la config antiraid`\n\n`rolecreatelimit | Définir la limite ed création de rôle`\n\n`logs | Définir le channel de logs antiraid`"
        }
        interaction.reply({
            embeds: [configembed]
        })
    }
}