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

module.exports.run = async (bot, message, args) => {

if(!args[2]) return message.replay("Please ask a question!🍆");

let replies = ["🎱 | It is certain", "🎱 | It is decidedly so", "🎱 | Without a doubt", "🎱 | Yes definitely", "🎱 | You may rely on it", 
"🎱 | As I see it, yes", "🎱 | Most likely", "🎱 | Outlook good", "🎱 | Yes", "🎱 | Signs point to yes", "🎱 | Reply hazy, try again", 
"🎱 | Ask again later", "🎱 | Better not tell you now", "🎱 | Cannot predict now", "🎱 | Concentrate and ask again", "🎱 | Don't count on it",
"🎱 | My reply is no", "🎱 | My sources say no", "🎱 | Outlook not so good", "🎱 | Very doubtful"];

let result = Math.floor((Math.random() * replies.lenght));
let question = args.slice(1).join(" ");

let ballembed = new DiscordAPIError.RichEmbed()
.setAuthor(message.author.tag)
.setcolor("#FF990")
.addFeild("Question", question)
.addFeild("Answer", replies[result]);

message.channel.send(ballembed)

}

client.login(process.env.TOKEN);

