import { Client } from 'discord.js';

export const onMessageUpdate = (client: Client) => {
    client.on('messageUpdate', async (oldMessage, newMessage) => {
        if (oldMessage.author?.bot) {
            return;
        }

        const content = newMessage.content?.toLowerCase();

        if (content === 'ping') {
            await newMessage.reply(`${newMessage.member?.displayName || newMessage.author?.username} Pong!`);
        }
    });
}

export default onMessageUpdate;