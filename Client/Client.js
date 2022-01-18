const fs = require('fs');

const Discord = require('discord.js'); // fuck this library, atleast this version works though

const client = new Discord.Client();

function Login(token)
{
    console.log("");
    console.log("Attempting to login");
    client.login(token);

    client.on('ready', () => 
    {
        console.log("");
        console.log(`Logged in as ${client.user.tag}!`);
    });
}

function MessageListener(message, reply)
{
    client.on('message', msg => 
    {
        if (msg.content === message) 
        {
          msg.reply(reply);
        }
      });
}

function SendEmbed(channel, title, description, color, message)
{
    var embed = new Discord.MessageEmbed()
    .setTitle(title)
    .setDescription(description)
    .setColor(color);
}

module.exports =
{
    Login,
    MessageListener,
    SendEmbed
}