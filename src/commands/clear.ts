import Client from "../lib/Client";

import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import I18n from "../lib/I18n";

export async function run(client: Client, ctx: CommandInteraction) {
    if (!ctx.guild || !ctx.channel) return;

    const player = client.modules.music.get(ctx.guild.id, ctx.channel);

    if (!player) return;

    const amount = player.Queue.Tracks.length;

    player.clear();

    await ctx.reply({ embeds: [I18n.en.cleared(amount)] });
}

const data = new SlashCommandBuilder()
    .setName("clear")
    .setDescription("Clear the player's queue.");

export { data };
