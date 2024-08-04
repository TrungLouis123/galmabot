module.exports.config = {
  name: "speed",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thanh Nam",
  description: "Ảnh video anime",
  commandCategory: "game",
  usages: "anime",
  cooldowns: 0
};
module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var thơ = (await axios.get("https://thinh.trickertnam.repl.co/thinh/php")).data.data;
  axios.get('http://api.apibot.repl.co/vdmusic').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let callback = function () {
          api.sendMessage({
            body: `===[ 𝐕𝐈𝐃𝐄𝐎 𝐒𝐏𝐄𝐄𝐃 𝐔𝐏 ]===\n➠ 𝗦𝗼̂́ 𝘃𝗶𝗱𝗲𝗼 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́: ${res.data.count}\n➠ 𝗟𝗶𝗻𝗸: ${res.data.data}\n━━━━━━━━━━━━━━━━━━\n➠ 𝐔𝐩𝐝𝐚𝐭𝐞: 𝗩𝗮̆𝗻 𝗧𝗵𝗶𝗲̣̂𝗻 \n━━━━━━━━━━━━━━━━━━\n➠ 𝗧𝗵𝗶́𝗻𝗵: ${thơ}\n==== 𝗩𝗮̆𝗻 𝗧𝗵𝗶𝗲̣̂𝗻 ====\n`,
            attachment: fs.createReadStream(__dirname + `/cache/dạ.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/dạ.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/dạ.${ext}`)).on("close", callback);
      })
    }