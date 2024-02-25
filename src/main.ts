import { Client, GatewayIntentBits, IntentsBitField, Partials } from 'discord.js';
import { config } from 'dotenv';
// import { onReady } from './listeners';
import { TOKEN } from './config';
import dbconfig from './config';
config();

const client = new Client({
    intents: ['Guilds', 'GuildMessages', 'GuildMembers', 'MessageContent', 'DirectMessages', 'GuildMessageReactions', 'DirectMessageTyping', 'DirectMessageReactions'],
    partials: [Partials.Message, Partials.Channel, Partials.Reaction, Partials.User, Partials.GuildMember, Partials.ThreadMember],
});

onReady(client);
onMessageCreate(client);

function onReady(client: Client<boolean>): Promise<void> {
    console.log(`Logged in as ${client.user?.tag}!`);
    
    // Your code here
    return Promise.resolve();
}

function onMessageCreate(client: Client<boolean>): Promise<void> {
    console.log('Reading Messages!');

    // Your code here
    return Promise.resolve();
}

function onMessageUpdate(client: Client<boolean>): Promise<void> {
    console.log('Updating Messages!');

    // Your code here
    return Promise.resolve();
}

console.log(dbconfig);
client.login(TOKEN);
client.login(process.env.TOKEN);


