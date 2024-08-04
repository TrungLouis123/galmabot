 const axios = require("axios");
const fs = require("fs");
module.exports.config = {
    name: "cap",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Thiệu Trung Kiên",
    description: "Chụp ảnh profile của người dùng",
    commandCategory: "THÀNH VIÊN",
    usages: "",
    cooldowns: 5
};
  module.exports.handleEvent = async ({ api, event, Threads, args, Users }) => {
  try{
  if(event.body.toLowerCase() == "cap"){
    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
     if (thu == 'Sunday') thu = '𝗖𝗵𝘂̉ 𝗡𝗵𝗮̣̂𝘁'
  if (thu == 'Monday') thu = '𝗧𝗵𝘂̛́ 𝗛𝗮𝗶'
  if (thu == 'Tuesday') thu = '𝗧𝗵𝘂̛́ 𝗕𝗮'
  if (thu == 'Wednesday') thu = '𝗧𝗵𝘂̛́ 𝗧𝘂̛'
  if (thu == "Thursday") thu = '𝗧𝗵𝘂̛́ 𝗡𝗮̆𝗺'
  if (thu == 'Friday') thu = '𝗧𝗵𝘂̛́ 𝗦𝗮́𝘂'
  if (thu == 'Saturday') thu = '𝗧𝗵𝘂̛́ 𝗕𝗮̉𝘆'
    const name = await Users.getNameUser(event.senderID)
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
    api.sendMessage({body: `→ 𝗖𝗵𝗼̛̀ 𝘁𝗶́ 𝗻𝗵𝗮 ${name} 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗮𝗽
⏳ 𝗖𝗮𝗽 𝘃𝗮̀𝗼 𝗹𝘂́𝗰: ${gio} || (${thu})
💮 𝘃𝗼̛́𝗶 𝗹𝗮̣𝗶 𝘁𝘂̀𝘆 𝘁𝗵𝗲𝗼 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝗼𝘁 𝗺𝗼̛́𝗶 𝗰𝗮𝗽 đ𝘂̛𝗼̛̣𝗰 𝗻𝗵𝗮`, mentions}, event.threadID, event.messageID);
    if (event.type == "message_reply") {
      var uid = event.messageReply.senderID;
    } else if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `dpr=2; vpd=v1%3B668x360x2; datr=XOOoZCTM4zst_T2BEcUfMkD-; sb=XOOoZCr8bjX6wOOjjuUKI8y6; locale=vi_VN; m_pixel_ratio=2; wd=360x668; fr=0QYo9QPyhZTSGlNNL.AWXlaZnv4vQiB77XAxd7g-3CRcs.BkqONc.r4.AAA.0.0.BkqOPa.AWWPhQ5Tswk; c_user=100083641712373; xs=41%3AtYzcHtEX5vZR3Q%3A2%3A1688789978%3A-1%3A6297; fbl_st=101232770%3BT%3A28146499; wl_cbv=v2%3Bclient_version%3A2285%3Btimestamp%3A1688789980; fbl_cs=AhCB8McSQWxGCsKwAR4KduRwGG1OWG1ZMVJoelB3ZlZCRXkxTUVlMW16eA; fbl_ci=519727080148750; useragent=TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDExOyBDUEgyMzQ5KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTEyLjAuMC4wIE1vYmlsZSBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Linux%3B%20Android%2011%3B%20CPH2349)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F112.0.0.0%20Mobile%20Safari%2F537.36;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = ``;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://trend-trai-tim.hianime.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=727005&url=${url}&dimension=1280x720`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({ 	body: `🎥==== [ 𝗖𝗔𝗣 𝗪𝗔𝗟𝗟 ] ====🎥
━━━━━━━━━━━━━━━━
🌸 𝗮̂𝘆 𝗱𝗼̂ 𝗯𝗼𝘁 𝗰𝗮𝗽 𝘅𝗼𝗻𝗴 𝗿𝗼̂̀𝗶 𝗻𝗲̀ ${name}
⏰ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${gio} || (${thu})
━━━━━━━━━━━━━━━━━━
⚙️ 𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗱𝘂̀𝗻𝗴 ${global.config.PREFIX}𝗰𝗮𝗽 + 𝘁𝗮𝗴 𝗵𝗼𝗮̣̆𝗰 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 đ𝗲̂̉ 𝗯𝗼𝘁 𝗰𝗮𝗽
━━━━━━━━━━━━━━━━━━
→ 𝘁𝗶́𝗻𝗵 𝗻𝗮̆𝗻𝗴 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗰𝗮𝗽 𝘄𝗮𝗹𝗹 𝗸𝗵𝗶 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝗮𝗽`,mentions,
                         attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
  }
} catch(e){
    console.log(e)
}}
module.exports.run = async function ({ api,Users,event, args }) {
  const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
     if (thu == 'Sunday') thu = '𝗖𝗵𝘂̉ 𝗡𝗵𝗮̣̂𝘁'
  if (thu == 'Monday') thu = '𝗧𝗵𝘂̛́ 𝗛𝗮𝗶'
  if (thu == 'Tuesday') thu = '𝗧𝗵𝘂̛́ 𝗕𝗮'
  if (thu == 'Wednesday') thu = '𝗧𝗵𝘂̛́ 𝗧𝘂̛'
  if (thu == "Thursday") thu = '𝗧𝗵𝘂̛́ 𝗡𝗮̆𝗺'
  if (thu == 'Friday') thu = '𝗧𝗵𝘂̛́ 𝗦𝗮́𝘂'
  if (thu == 'Saturday') thu = '𝗧𝗵𝘂̛́ 𝗕𝗮̉𝘆'
  const name = await Users.getNameUser(event.senderID)

  let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
    api.sendMessage({body: `‎→ 𝗖𝗵𝗼̛̀ 𝘁𝗶́ 𝗻𝗵𝗮 ${name} 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗮𝗽
⏳ 𝗖𝗮𝗽 𝘃𝗮̀𝗼 𝗹𝘂́𝗰: ${gio} || (${thu})
💮 𝘃𝗼̛́𝗶 𝗹𝗮̣𝗶 𝘁𝘂̀𝘆 𝘁𝗵𝗲𝗼 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝗼𝘁 𝗺𝗼̛́𝗶 𝗰𝗮𝗽 đ𝘂̛𝗼̛̣𝗰 𝗻𝗵𝗮`, mentions},event.threadID, event.messageID);
    const uid = event.type == 'message_reply' ? event.messageReply.senderID: !!Object.keys(event.mentions)[0] ? Object.keys(event.mentions)[0]: !!args[0] ? args[0]: event.senderID;
    var cookies = `dpr=2; vpd=v1%3B668x360x2; datr=XOOoZCTM4zst_T2BEcUfMkD-; sb=XOOoZCr8bjX6wOOjjuUKI8y6; locale=vi_VN; m_pixel_ratio=2; wd=360x668; fr=0QYo9QPyhZTSGlNNL.AWXlaZnv4vQiB77XAxd7g-3CRcs.BkqONc.r4.AAA.0.0.BkqOPa.AWWPhQ5Tswk; c_user=100083641712373; xs=41%3AtYzcHtEX5vZR3Q%3A2%3A1688789978%3A-1%3A6297; fbl_st=101232770%3BT%3A28146499; wl_cbv=v2%3Bclient_version%3A2285%3Btimestamp%3A1688789980; fbl_cs=AhCB8McSQWxGCsKwAR4KduRwGG1OWG1ZMVJoelB3ZlZCRXkxTUVlMW16eA; fbl_ci=519727080148750; useragent=TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDExOyBDUEgyMzQ5KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTEyLjAuMC4wIE1vYmlsZSBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Linux%3B%20Android%2011%3B%20CPH2349)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F112.0.0.0%20Mobile%20Safari%2F537.36;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `dpr=2; vpd=v1%3B668x360x2; datr=XOOoZCTM4zst_T2BEcUfMkD-; sb=XOOoZCr8bjX6wOOjjuUKI8y6; locale=vi_VN; m_pixel_ratio=2; wd=360x668; fr=0QYo9QPyhZTSGlNNL.AWXlaZnv4vQiB77XAxd7g-3CRcs.BkqONc.r4.AAA.0.0.BkqOPa.AWWPhQ5Tswk; c_user=100083641712373; xs=41%3AtYzcHtEX5vZR3Q%3A2%3A1688789978%3A-1%3A6297; fbl_st=101232770%3BT%3A28146499; wl_cbv=v2%3Bclient_version%3A2285%3Btimestamp%3A1688789980; fbl_cs=AhCB8McSQWxGCsKwAR4KduRwGG1OWG1ZMVJoelB3ZlZCRXkxTUVlMW16eA; fbl_ci=519727080148750; useragent=TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDExOyBDUEgyMzQ5KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTEyLjAuMC4wIE1vYmlsZSBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Linux%3B%20Android%2011%3B%20CPH2349)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F112.0.0.0%20Mobile%20Safari%2F537.36;`;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://trend-trai-tim.hianime.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=727005&url=${url}&dimension=1280x720`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({ 	body: `🎥==== [ 𝗖𝗔𝗣 𝗪𝗔𝗟𝗟 ] ====🎥
━━━━━━━━━━━━━━━━
🌸 𝗮̂𝘆 𝗱𝗼̂ 𝗯𝗼𝘁 𝗰𝗮𝗽 𝘅𝗼𝗻𝗴 𝗿𝗼̂̀𝗶 𝗻𝗲̀ ${name}
⏰ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${gio} || (${thu})
━━━━━━━━━━━━━━━━━━
⚙️ 𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗱𝘂̀𝗻𝗴 ${global.config.PREFIX}𝗰𝗮𝗽 + 𝘁𝗮𝗴 𝗵𝗼𝗮̣̆𝗰 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 đ𝗲̂̉ 𝗯𝗼𝘁 𝗰𝗮𝗽
━━━━━━━━━━━━━━━━━━
→ 𝘁𝗶́𝗻𝗵 𝗻𝗮̆𝗻𝗴 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗰𝗮𝗽 𝘄𝗮𝗹𝗹 𝗸𝗵𝗶 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝗮𝗽`, mentions,
                         attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
         }