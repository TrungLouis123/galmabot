module.exports.config = {
  name: "vdgaii",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Thanh Nam",
  description: "xem video vidgaitiktok",
  commandCategory: "video ",
  usages: "",
  cooldowns: 2,
};
module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var thơ = (await axios.get("https://thinh.trickertnam.repl.co/thinh/php")).data.data;
  axios.get('https://vdgai.trickertnam.repl.co/vdgai').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let callback = function () {
          api.sendMessage({
            body: `=== [ 𝐕𝐈𝐃𝐄𝐎 𝐆𝐀́𝐈 𝐓𝐈𝐊 𝐓𝐎𝐊 ] ===\n━━━━━━━━━━━━━━━━━━\n➠ 𝐕𝐢𝐝𝐞𝐨 𝗚𝗮́𝗶 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧 Đ𝐚̂𝐲\n➠ 𝗦𝗼̂́ 𝘃𝗶𝗱𝗲𝗼 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́: ${res.data.count}\n ━━━━━━━━━━━━━━━━━━\n➠ Đ𝐮̛𝐨̛̣𝐜 𝐮𝐩𝐝𝐚𝐭𝐞 𝐛𝐨̛̉𝐢 𝗩𝗮̆𝗻 𝗧𝗵𝗶𝗲̣̂𝗻\n━━━━━━━━━━━━━━━━━━\n➠ 𝗧𝗵𝗶́𝗻𝗵: ${thơ}\n==== 𝗩𝗮̆𝗻 𝗧𝗵𝗶𝗲̣̂𝗻 ====\n`,attachment: fs.createReadStream(__dirname + `/cache/dạ.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/dạ.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/dạ.${ext}`)).on("close", callback);
      })
}