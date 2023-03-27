require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ], 
});

client.on('ready', (c) => {
    console.log(`🍆 ${c.user.tag} is online`)
});

client.on('messageCreate', (message) => {
//Så den ikke svarer sig selv
    if (message.author.bot) {
        return;
    }

    if (message.content === 'Hej') {
    message.reply('Halløjsa!🍆');    
    }
})

client.login(process.env.TOKEN);

