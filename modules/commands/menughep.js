module.exports.config = {
	name: "menughep",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "Raiden Shogun",
	description: "treo bot trên uptimerobot.com",
	commandCategory: "Công cụ",
	usages: "[text/reply]",
	cooldowns: 5
};
//////////////////////////////
//////// Khai báo ///////////
////////////////////////////
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const lvb = __dirname + `/noprefix/`;
    if (!fs.existsSync(lvb + "noprefix")) fs.mkdirSync(lvb, { recursive: true });
    if (!fs.existsSync(lvb + "upt.png")) request("https://i.imgur.com/Uyil7l6.jpeg",  "https://i.imgur.com/Uyil7l6.jpeg").pipe(fs.createWriteStream(lvb + "upt.png"));
      }
module.exports.run = async function({ api, event, args, client }) {
    const fs = require('fs-extra');
    let time = process.uptime();
	let hours = Math.floor(time / (60 * 60));
	let minutes = Math.floor((time % (60 * 60)) / 60);
	let seconds = Math.floor(time % 60);
      const timeStart = Date.now();
    var name = Date.now();
    var url = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
    var lvbang = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
	  if(url.match(lvbang) == null) return api.sendMessage({body:`=== [ 𝗦𝗘𝗥𝗩𝗘𝗥 𝗚𝗛𝗘́𝗣 ] ===
━━━━━━━━━━━━━━━
💙 .𝗴𝗵𝗲́𝗽 + 𝘁𝗶𝗻𝗱𝗲𝗿 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗱𝗮̣𝗻𝗴 𝗴𝗵𝗲́𝗽 𝗰𝘂̉𝗮 𝗮𝗽𝗽 𝘁𝗶𝗻𝗱𝗲𝗿
❤️ .𝗴𝗵𝗲́𝗽 + 𝘀𝘃 𝗯𝗼𝘁 𝘀𝗲̃ 𝘁𝗶̀𝗺 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘁𝗿𝗲̂𝗻 𝘀𝗲𝗿𝘃𝗲𝗿
💛 .𝗴𝗵𝗲́𝗽 + 𝗰𝗮𝗻𝘃𝗮𝘀 𝗴𝗵𝗲́𝗽 đ𝗼̂𝗶 𝘁𝗵𝗲𝗼 𝗱𝗮̣𝗻𝗴 𝗮̉𝗻𝗵 𝗰𝗮𝗻𝘃𝗮𝘀
💜 .𝗴𝗵𝗲́𝗽 + 𝗴𝗶𝗳 𝗴𝗵𝗲́𝗽 𝘁𝗵𝗲𝗼 𝗱𝗮̣𝗻𝗴 𝗰𝗼́ 𝗺𝗼̣̂𝘁 𝗴𝗶𝗳 𝗰𝘂𝘁𝗲 𝗼̛̉ 𝗴𝗶𝘂̛̃𝗮

⚠️ 𝗟𝘂̛𝘂 𝘆́: 𝗗𝘂̀𝗻𝗴 𝗻𝗵𝘂̛ 𝘁𝗿𝗲̂𝗻 đ𝗲̂̉ 𝘅𝘂̛̉ 𝗱𝘂̣𝗻𝗴, 𝘃𝗶𝗲̂́𝘁 đ𝘂́𝗻𝗴 𝗰𝗵𝗶́𝗻𝗵 𝘁𝗮̉ 𝘁𝗵𝗶̀ 𝗺𝗼̛́𝗶 𝗹𝗲̂𝗻`, attachment: fs.createReadStream(__dirname + `/noprefix/upt.png`)}, event.threadID, event.messageID);
    var request = require("request");
    var options = { method: 'POST',
  url: 'https://api.uptimerobot.com/v2/newMonitor',
  headers:
   { 'content-type': 'application/x-www-form-urlencoded',
     'noprefix-control': 'no-noprefix' },
  form:
   { api_key: 'u1521429-e69780eb556948775b151917',
     format: 'json',
     type: '1',
     url: url,
     friendly_name: name } };
   /////////////////////////////////////////  //////Phần điều kiện và gửi tin nhắn//// ///////////////////////////////////////        
request(options, function (error, response, body) {
   if (error) return api.sendMessage(`Lỗi rồi huhu :((`, event.threadID, event.messageID );
   if(JSON.parse(body).stat == 'fail') return api.sendMessage({body:`===「 𝗨𝗣𝗧𝗜𝗠𝗘 𝗥𝗢𝗕𝗢𝗧 」===\n\n𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗯𝗼𝘁 𝗵𝗶𝗲̣̂𝗻 𝗼𝗻𝗹𝗶𝗻𝗲 𝘁𝗼̂̉𝗻𝗴 𝗰𝗼̣̂𝗻𝗴 ${hours} 𝗴𝗶𝗼̛̀ ${minutes} 𝗽𝗵𝘂́𝘁 ${seconds} 𝗴𝗶𝗮̂𝘆 👾\n──────────────\n[ 𝗘𝗥𝗥𝗢𝗥 ] - 𝗦𝗲𝗿𝘃𝗲𝗿 𝗻𝗮̀𝘆 𝗵𝗶𝗲̣̂𝗻 𝘁𝗼̂̀𝗻 𝘁𝗮̣𝗶 𝘁𝗿𝗲̂𝗻 𝗨𝗽𝘁𝗶𝗺𝗲 𝗥𝗼𝗯𝗼𝘁 𝗿𝗼̂̀𝗶 🌸\n🔗 𝗟𝗶𝗻𝗸: ${url}`, attachment: fs.createReadStream(__dirname + `/noprefix/upt.png`)}, event.threadID, event.messageID);
  if(JSON.parse(body).stat == 'success')
 return
api.sendMessage({body: `===「 𝗨𝗣𝗧𝗜𝗠𝗘 𝗥𝗢𝗕𝗢𝗧 」===\n\n𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗯𝗼𝘁 𝗵𝗶𝗲̣̂𝗻 𝗼𝗻𝗹𝗶𝗻𝗲 𝘁𝗼̂̉𝗻𝗴 𝗰𝗼̣̂𝗻𝗴 ${hours} 𝗴𝗶𝗼̛̀ ${minutes} 𝗽𝗵𝘂́𝘁 ${seconds} 𝗴𝗶𝗮̂𝘆 👾\n──────────────\n[ 𝗦𝗨𝗖𝗖𝗘𝗦𝗦 ] - 𝗧𝗮̣𝗼 𝘀𝗲𝗿𝘃𝗲𝗿 𝘁𝗿𝗲̂𝗻 𝗨𝗽𝘁𝗶𝗺𝗲 𝗥𝗼𝗯𝗼𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 🌸\n🔗 𝗟𝗶𝗻𝗸: ${url}`, attachment: fs.createReadStream(__dirname + `/noprefix/upt.png`)}, event.threadID, event.messageID );
});
}