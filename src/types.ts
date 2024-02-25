import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export interface SlashCommand {
    commnd: SlashCommandBuilder;
    run: (interaction: CommandInteraction) => Promise<void>;
}