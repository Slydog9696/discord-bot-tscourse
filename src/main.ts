import { Client, GatewayIntentBits, IntentsBitField, Interaction, Partials } from 'discord.js';
import { config } from 'dotenv';
// import { onMessageUpdate, onInteractionCreate, onMessageCreate } from './listeners';
import { onReady } from './listeners';
import { TOKEN } from './config';
import dbconfig from './config';
import { Message } from 'discord.js';
config();

const onMessageCreate = {
    execute: (client: Client<boolean>, message: Message) => {
        // Your code here
    }
};

const client = new Client({
        intents: ['Guilds', 'GuildMessages', 'GuildMembers', 'MessageContent', 'DirectMessages', 'GuildMessageReactions', 'DirectMessageTyping', 'DirectMessageReactions'],
        partials: [Partials.Message, Partials.Channel, Partials.Reaction, Partials.User, Partials.GuildMember, Partials.ThreadMember],
});

const onMessageUpdate = (client: Client<boolean>, message: Message) => {
    // Your code here
};

const onInteractionCreate = {
    execute: (client: Client<boolean>, interaction: Interaction) => {
        // Your code here
    }
};

client.once('ready', () => {
    onReady.execute(client);
});

client.on('messageCreate', (message) => {
    onMessageCreate.execute(client, message);
    onMessageUpdate(client, message);
});

client.on('interactionCreate', (interaction) => {
    onInteractionCreate.execute(client, interaction);
})

console.log(dbconfig);
client.login(TOKEN);
client.login(process.env.TOKEN);


