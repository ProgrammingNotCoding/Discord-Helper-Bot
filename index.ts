import DiscordJS from "discord.js";
import WOKCommands from "wokcommands";
import path from "path";
import dotenv from "dotenv";
const wait = require("timers/promises").setTimeout;
dotenv.config();

const client = new DiscordJS.Client({
    intents: 32767,
});

client.on("ready", async () => {
    await wait(1000);
    console.log(client.user?.username, "is online with id = ", client.user?.id);

    new WOKCommands(client, {
        commandDir: path.join(__dirname, "commands"),
        featureDir: path.join(__dirname, "features"),

        typeScript: true,

        testServers: ["896301214269063218"],
        botOwners: "448740493468106753",

        mongoUri: process.env.MONGO_URI,

        // <:Success:935099107163394061>
        //<:Fail:935098896919707700>
    }).setDefaultPrefix(">>");
});
/*
    1) npm init -y
    2) npm install discord.js dotenv wokcommands ms mongoose 
    3) npm install -g typescript ts-node
    4) npm i discord-html-transcripts
    */

client.login(process.env.TOKEN);
