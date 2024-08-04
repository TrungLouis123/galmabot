module.exports.config = {
    name: 'goibotv2',
    version: '1.1.1',
    hasPermssion: 0,
    credits: 'DC-Nam',//mod thêm by tpk
    description: 'Trò truyện cùng simi chat',
    commandCategory: 'Giải trí',
    usages: '[hey simi]',
    cooldowns: 2,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "hh.jpeg")) request("https://i.imgur.com/o5BoJJ9.jpeg").pipe(fs.createWriteStream(dirMaterial + "hh.jpeg"));
}
const {
    post
} = require('axios');
const CN = `https://api-thanh-hien.duckhonggay.repl.co/simi/get`
module.exports.run = () => {};
module.exports.handleEvent = function( {
    api, event
}) { 
  const fs = require("fs");
  const axios = require('axios');
  var tpk = ['kêu bot có gì hok 💓', 'ơi bot nghe nè','sao bot nghe nè 🌸','có gì hog bot nè','bot nè','kêu em có gì không','💞 em nghe','em đây','em là bot của anh Thiện','sim nghe anh/chị ơi','sim sim đây anh/chị gọi có gì ko ạ','sim cute đây ạ','bot Thiện nghe nè anh/chị'];
  const a = tpk[Math.floor(Math.random()*tpk.length)];
    if (['@Văn Thiện','vthien','anh Thiện','Aka','anh Thiện','hi bot','bot đâu','bot off','bot ơi','bot xịn','kêu mọi người lên tương tác đi bot','Chào bot','hello bot','sim','sim ơi','bot lỏ'].includes(event.body.toLowerCase())) {
       api.sendMessage({body:`🌸====『 𝗚𝗢̣𝗜 𝗕𝗢𝗧 』====🌸\n\n💬 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: ${a}\n━━━━━━━━━━━━━━━
👉 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘃𝗼̛́𝗶 𝗯𝗼𝘁`, attachment: fs.createReadStream(__dirname + `/noprefix/hh.jpeg`)}, event.threadID, (err, data) => global.client.handleReply.push({
        name: this.config.name, messageID: data.messageID
    }), event.messageID);
    };
};
module.exports.handleReply = async function({
    handleReply: $, api, event
}) {
    const res = await post(`${CN}`, {
        ask: event.body
    });
   if (res.data.status != 201) return api.sendMessage(`${res.data.message}`, event.threadID, (err, data) => global.client.hhandleReply.push({
       name: this.config.name,
       messageID: data.messageID,
       ask: event.body
   }), event.messageID); else api.sendMessage({body: `🤖====「 𝗦𝗜𝗠 𝗦𝗜𝗠 𝗥𝗘𝗣𝗟𝗬 」====🤖\n\n💬 𝗕𝗼𝘁 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶: ${res.data.answer}\n\n→ 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗲̂́𝗽 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗰𝘂̉𝗮 𝗯𝗼𝘁 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝗶𝗲̂́𝗽 `, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.last-namename.repl.co/image/robot')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, (err, data) => global.client.handleReply.push({
        name: this.config.name, messageID: data.messageID
    }), event.messageID);
};