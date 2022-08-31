import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import Client from "../lib/Client";
import I18n from "../lib/I18n";

export async function run(client: Client, ctx: CommandInteraction) {
    const start = Date.now();

    if (!client.application) {
        await ctx.reply({ embeds: [I18n.en.ping(undefined)] });
        return;
    }

    await client.application.fetch();

    await ctx.reply({ embeds: [I18n.en.ping(Date.now() - start)] });
}

const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Try to ping me.");

export { data };
