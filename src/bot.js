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

const answers = ["🎱 | It is certain", "🎱 | It is decidedly so", "🎱 | Without a doubt", "🎱 | Yes definitely", "🎱 | You may rely on it", 
"🎱 | As I see it, yes", "🎱 | Most likely", "🎱 | Outlook good", "🎱 | Yes", "🎱 | Signs point to yes", "🎱 | Reply hazy, try again", 
"🎱 | Ask again later", "🎱 | Better not tell you now", "🎱 | Cannot predict now", "🎱 | Concentrate and ask again", "🎱 | Don't count on it",
"🎱 | My reply is no", "🎱 | My sources say no", "🎱 | Outlook not so good", "🎱 | Very doubtful"];

const gifs = ["https://media.tenor.com/c2-C6fxHS3wAAAAC/baby-one-more-please.gif", "https://media.tenor.com/YYPY5tPFIE8AAAAd/bad-teeth.gif"];

client.on('ready', (c) => {
    console.log(`🍆 ${c.user.tag} is online`)
});

client.on('messageCreate', (message) => {
//Så den ikke svarer sig selv
    if (message.author.bot) {
        return;
    }

    if (message.content.toLowerCase().startsWith('!ask')) {
        message.reply(ask(message.content)); 
    }
    else if (message.content.toLowerCase().startsWith('!roll')) {
        message.reply(roll(message.content)); 
    }
    else if (message.content.toLowerCase().startsWith('hej')) {
        message.reply(hi());    
    }
})

function ask() {
    var randomIndex = Math.floor(Math.random() * gifs.length);
    return answers[randomIndex];   
}

function roll(content) {
    //!roll MIN_NUMBER MAX_NUMBER
    var splitString = content.trim().split(" ");
    if (splitString.length !== 3) {
        return "I don't know what you mean, you have to give me two numbers seperated by a space!!!";  
    }
            
    var MIN_NUMBER = parseInt(splitString[1]);
    if (isNaN(MIN_NUMBER)) {
        return "The minimum value is not a number!!!";  
    }

    var MAX_NUMBER = parseInt(splitString[2]);
    if (isNaN(MAX_NUMBER)) {
        return "The maximum value is not a number!!!";  
    }

    if (MIN_NUMBER === MAX_NUMBER) {
        return "The minimum and maximum values are equal so the number you get is " + MIN_NUMBER;  
    }

    if (MIN_NUMBER > MAX_NUMBER) {
        return "The minimum value is grater then the maximum value!!!";  
    }
    var randomNumber = Math.floor((Math.random() * (MAX_NUMBER - MIN_NUMBER)) + MIN_NUMBER);

    return randomNumber.toString();  
}

function hi() {
    return gifs[1];   
}


client.login(process.env.TOKEN);