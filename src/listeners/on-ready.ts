import { Client } from 'discord.js';
export const onReady = {
    name: "onReady",
    async execute(client: Client) {
        console.log(`Logged in as ${client.user?.tag}!`);
    },
}

export default onReady;