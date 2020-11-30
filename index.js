const axios = require("discord.js");
const urls = "https://glitch.com/edit/#!/gloria-victis"
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 60 * 1000);
