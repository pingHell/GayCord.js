const fs = require("fs");
const axios = require("axios").default;

function Send(url, content)
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

module.exports =
{
    Send
}
