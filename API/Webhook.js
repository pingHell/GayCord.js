const fs = require("fs");
const axios = require("axios").default;

function Send(url, content)
{
    try
    {
        let message =
        {
            "content": content
        };
    
        axios(
        {
          url: url,
          data: JSON.stringify(message),
          method: "POST",
          headers:
          {
            "Content-Type": "application/json"
          }
        });
    }
    catch (error)
    {
        console.log("");
        console.log("Whoops, there was an error sending data to your webhook. heres the error" + error + " we apologize. this is such a discord.js moment.")
    }
}

module.exports =
{
    Send
}