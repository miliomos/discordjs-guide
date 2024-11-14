const { Client, Events, GatewayIntentBits } = require('discord.js');
require("dotenv").config();
const token = process.env.TOKEN;

//Client creating
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


//Client ready event this will be going to into an event handler folder i guess
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);	