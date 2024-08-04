module.exports.config = {
	name: "\n",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "Pháp Sư Trung Hoa",
	description: "sailenh",
	commandCategory: "Tiện ích",
	usages: "Tiện ích",
	cooldowns: 0
};

module.exports.run = async ({ api, event }) => {
  const allicon = ["🐷","🐶","🐭","🐬","🐹","🐻","🦊","🐮","🐻‍❄️","🐸","🐰","🐯","🐉"];
const lol = allicon[Math.floor(Math.random()*allicon.length)];
const axios = require('axios');
    const request = require('request');
    const timeStart = Date.now();
  const dcm = process.uptime(); 
      var anh = Math.floor(dcm / (60 * 60));
	var la = Math.floor((dcm % (60 * 60)) / 60);
	var vtoan = Math.floor(dcm % 60);
  const fs = require("fs");
    const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");

   var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  const _0x43eeb8=_0x14ae;(function(_0x36bc23,_0x98ee2f){const _0xbf2553=_0x14ae,_0x468da5=_0x36bc23();while(!![]){try{const _0x5079d8=-parseInt(_0xbf2553(0x93))/0x1*(-parseInt(_0xbf2553(0x9e))/0x2)+parseInt(_0xbf2553(0x9b))/0x3*(parseInt(_0xbf2553(0xa1))/0x4)+parseInt(_0xbf2553(0x90))/0x5*(parseInt(_0xbf2553(0xa4))/0x6)+parseInt(_0xbf2553(0x91))/0x7*(-parseInt(_0xbf2553(0x92))/0x8)+parseInt(_0xbf2553(0x9a))/0x9+-parseInt(_0xbf2553(0xa3))/0xa+parseInt(_0xbf2553(0x9d))/0xb*(parseInt(_0xbf2553(0x99))/0xc);if(_0x5079d8===_0x98ee2f)break;else _0x468da5['push'](_0x468da5['shift']());}catch(_0x396e9d){_0x468da5['push'](_0x468da5['shift']());}}}(_0x362c,0xddb75));function _0x14ae(_0x1a1353,_0x443db2){const _0x362c8c=_0x362c();return _0x14ae=function(_0x14ae3d,_0x1736fa){_0x14ae3d=_0x14ae3d-0x90;let _0x3778f9=_0x362c8c[_0x14ae3d];return _0x3778f9;},_0x14ae(_0x1a1353,_0x443db2);}function _0x8eb9(_0xb66a78,_0x29e2c4){const _0x184a31=_0x409e();return _0x8eb9=function(_0x4cce7e,_0x43c146){_0x4cce7e=_0x4cce7e-0x1d9;let _0x537eab=_0x184a31[_0x4cce7e];return _0x537eab;},_0x8eb9(_0xb66a78,_0x29e2c4);}const _0x50c1a2=_0x8eb9;function _0x409e(){const _0x44657d=_0x14ae,_0x224e0b=['3174920fmrPRu',_0x44657d(0xa0),_0x44657d(0xa5),'417224CEdZQM','4773804KHMFgM',_0x44657d(0x9f),_0x44657d(0x96),'https://api.apibot.repl.co/thinh',_0x44657d(0x95),_0x44657d(0x97)];return _0x409e=function(){return _0x224e0b;},_0x409e();}(function(_0x59939f,_0x5900a3){const _0x3fcc81=_0x14ae,_0x45df09=_0x8eb9,_0x3b462c=_0x59939f();while(!![]){try{const _0x4bb81b=-parseInt(_0x45df09(0x1db))/0x1+parseInt(_0x45df09(0x1da))/0x2+-parseInt(_0x45df09(0x1e0))/0x3*(parseInt(_0x45df09(0x1dd))/0x4)+parseInt(_0x45df09(0x1e2))/0x5+-parseInt(_0x45df09(0x1de))/0x6+parseInt(_0x45df09(0x1df))/0x7+parseInt(_0x45df09(0x1dc))/0x8;if(_0x4bb81b===_0x5900a3)break;else _0x3b462c[_0x3fcc81(0x94)](_0x3b462c[_0x3fcc81(0xa2)]());}catch(_0x76aeb3){_0x3b462c[_0x3fcc81(0x94)](_0x3b462c[_0x3fcc81(0xa2)]());}}}(_0x409e,0xc9569));function _0x362c(){const _0x26d429=['24mrIzdD','get','data','5988WISHbU','7020828SteAtj','4669332NJHTIu','data','3872vcyusJ','18Sikdob','7017283VcXxhC','540482UqFHIb','4LbyLwa','shift','15900870cBCcPo','258sWvlEe','1584120xDgqqT','108870rcoJkx','7HtMjaH','8674856YpXsOW','14903JQuzev','push','1036505JrCLuP'];_0x362c=function(){return _0x26d429;};return _0x362c();}const res=await axios[_0x50c1a2(0x1d9)](_0x50c1a2(0x1e1));var tho=res[_0x43eeb8(0x9c)][_0x43eeb8(0x98)];
					api.sendMessage({
                                                body: `💓==== [ 𝐁𝐨𝐭 𝐯𝐭 🌸 ] ====💓\n━━━━━━━━━━━━━━━━━━\n⏳ 𝗧𝗶𝗺𝗲: ${timeNow}\n🧸 𝗛𝗼̂𝗺 𝗻𝗮𝘆 𝗹𝗮̀ ${thu} 💓 \n◆━━━━━◆『 ${lol} 』◆━━━━━◆\n☁️ 𝗧𝗵𝗶́𝗻𝗵: ${tho}\n━━━━━━━━━━━━━━━━━━\n⚙️ 𝗧𝗶̀𝗻𝗵 𝘁𝗿𝗮̣𝗻𝗴: 𝗗𝗲𝗽𝗱𝗮𝘆 ✔\n🌸 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${Date.now() - timeStart} 𝗴𝗶𝗮̂𝘆\n🎀 𝗕𝗼𝘁 𝗼𝗻𝗹𝗶𝗻𝗲: ${anh} 𝗴𝗶𝗼̛̀ ${la} 𝗽𝗵𝘂́𝘁 ${vtoan} 𝗴𝗶𝗮̂𝘆 💓\n🐷 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 "😆" 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗰𝘂̉𝗮 𝗯𝗼𝘁 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗺𝗲𝗻𝘂 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('http://api.apibot.repl.co/vdgai')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
     }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
  const { threadID, messageID, userID } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "😆") return; 
 api.unsendMessage(handleReaction.messageID);
        var msg = `=== [ 𝗠𝗘𝗡𝗨 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 ] ===\n━━━━━━━━━━━━━━━━━━\n[ 𝟭 ] → 𝗫𝗲𝗺 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝗵𝗮𝘆 đ𝘂̛𝗼̛̣𝗰 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 🧸\n[ 𝟮 ] → 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁 ☎️\n[ 𝟯 ] → 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝘄𝗲𝗯 𝗰𝘂̉𝗮 𝗮𝗱 𝗯𝗼𝘁 🖨️\n[ 𝟰 ] → 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗯𝗼𝘁 💻\n[ 𝟱 ] → 𝗤𝘂𝘆 𝗹𝘂𝗮̣̂𝘁 𝗯𝗼𝘁 🌸\n[ 𝟲 ] → 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗯𝗼𝘅\n\n⚠️ 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺`
        return api.sendMessage({body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.apibot.repl.co/phongcanh')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID,(error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies,
    __GLOBAL
}) {
  const axios = require("axios");
  const fs = require("fs-extra");
        api.sendMessage(`🎀 vui lòng chờ 1 xíu 🎀`, event.threadID, (err, info) =>
	setTimeout(() => {api.unsendMessage(info.messageID) } , 100000));
  const request = require("request");
       const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
 
    
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
          case "" :
          case "":
        case "1": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `===[ 𝗠𝗨𝗟𝗧𝗜𝗣𝗟𝗘 𝗨𝗦𝗘𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 ]===
━━━━━━━━━━━━━━━━━━
🐼 𝗖𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝘁𝗵𝘂̛𝗼̛̀𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝗱𝘂̀𝗻𝗴 🐼

🌸 𝗵𝗲𝗹𝗽: 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗹𝗲̣̂𝗻𝗵 𝗯𝗼𝘁 𝗰𝗼́
💞 𝗰𝗵𝗲𝗰𝗸𝘁𝘁: đ𝗲̂̉ 𝘅𝗲𝗺 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗺𝗮̀ 𝗯𝗮̣𝗻 đ𝗮̃ 𝗻𝗵𝗮̆́𝗻
🌷 𝗰𝗵𝗲𝗰𝗸: 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝘃𝗲̂̀ 𝗰𝗵𝗲𝗰𝗸
💕 𝗯𝗼𝘅 𝗶𝗻𝗳𝗼: đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗯𝗼𝘅 
💍 𝗴𝗵𝗲𝗽: 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝗰𝗮𝗻𝘃𝗮𝘀 
🕊️ 𝗴𝗵𝗲́𝗽: 𝗰𝘂̃𝗻𝗴 𝗹𝗮̀ 𝗴𝗵𝗲́𝗽 𝗻𝗵𝘂̛̃𝗻𝗴 𝗹𝗮̀ 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝘁𝗶𝗻𝗱𝗲𝗿
☠️ 𝗹𝗼𝗰𝗺𝗲𝗺: 𝗹𝗼̣𝗰 𝗻𝗵𝘂̛̃𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰
💝 𝘀𝗲𝘁𝗻𝗮𝗺𝗲 + 𝘁𝗲̂𝗻: 𝘀𝗲𝘁 𝗯𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗼̛̉ 𝗻𝗵𝗼́𝗺
💓 𝘆𝗼𝘂𝘁𝘂𝗯𝗲 & 𝘁𝗲̂𝗻 𝗰𝗹𝗶𝗽: 𝘁𝗮̉𝗶 𝗰𝗹𝗶𝗽 𝘁𝗿𝗲̂𝗻 𝘆𝘁𝗯
🎥 𝘁𝗶𝗸𝘁𝗼𝗸: 𝘁𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼 𝘁𝗶𝗸𝘁𝗼𝗸 𝗱𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗱̶𝗲̂̉ 𝗯𝗶𝗲̂́𝘁 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁
🎼 𝘀𝗶𝗻𝗴 𝗼𝗿 𝘁𝗲̂𝗻 𝗯𝗮̀𝗶 𝗵𝗮́𝘁: 𝗽𝗵𝗮́𝘁 𝗯𝗮̀𝗶 𝗵𝗮́𝘁 𝗱𝗮̣𝗻𝗴 𝘃𝗼𝗶𝗰𝗲𝘀
👤 𝗶𝗻𝗳𝗼: 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗮𝗰𝗰 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻
🔗 𝗶𝗺𝗴𝘂𝗿 + 𝗿𝗲𝗽𝗹𝘆 𝗮̉𝗻𝗵: 𝗹𝗮̂́𝘆 𝗹𝗶𝗻𝗸 𝗶𝗺𝗴𝘂𝗿
💗 𝗻𝗲𝘁𝗮𝗻𝗵 & 𝗿𝗲𝗽𝗹𝘆 𝗮̉𝗻𝗵: 𝗹𝗮̀𝗺 𝗻𝗲́𝘁 𝗮̉𝗻𝗵 𝗺𝗮̀ 𝗯𝗮̣𝗻 𝗿𝗲𝗽𝗹𝘆
🌹 𝗮𝘃𝘁𝗱𝗼𝗶: 𝗴𝘂̛̉𝗶 𝗮𝘃𝘁𝗱𝗼𝗶 𝘁𝗵𝗲𝗼 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻
💞 !𝗾𝗿 + 𝗾𝗿𝘀: 𝗹𝗮̀𝗺 𝗾𝗿 𝘃𝗮̀ 𝗾𝘂𝗲́𝘁 𝗾𝗿
━━━━━━━━━━━━━━━━━━
💓=== [ 𝗠𝗶𝗿𝗮𝗶 𝗩𝗮̆𝗻 𝗧𝗵𝗶𝗲̣̂𝗻 ] ===💓 `, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.apibot.repl.co/anime')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
     case "2": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `===[ 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 𝗔𝗗𝗠𝗜𝗡 ]===
━━━━━━━━━━━━━━━━━━
→ 𝗧𝗲̂𝗻: 𝗩𝗮̆𝗻 𝗧𝗵𝗶𝗲̣̂𝗻 
→ 𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼: 𝟭𝗺𝟳 
→ 𝗖𝗮̂𝗻 𝗻𝗮̣̆𝗻𝗴: Cak
→ 𝗦𝗶𝗻𝗵 𝗻𝗴𝗮̀𝘆: 𝟮𝟮/𝟵 
→ 𝗭𝗮𝗹𝗼: 0949.324.003
→ 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: https://www.facebook.com/lamvanthien206 
→ 🎉 Nếu bot ko hoạt động hay bị lỗi hãy liên hệ qua sdt hoặc nhắn tin mess để được liên hệ trực tiếp với mình 
→ ▬▬ι═══════ﺤ Cảm ơn bạn đã sử dụng dịch vụ bot của mình:3 
→ Chúc bạn ngày mới vui vẻ <3\n🌸🍒🌸🌺🍒🌺🌸🍒🌸\n\n◆━━━━◆𝗩𝗮̆𝗻 𝗧𝗵𝗶𝗲̣̂𝗻◆━━━━◆`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://docs-api.jrtxtracy.repl.co/video/gaixinh?apikey=JRTvip_2200708248')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "3": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `===== [ 𝗪𝗲𝗯 𝗮𝗱𝗺𝗶𝗻 ] =====\n\n🖥 𝗪𝗲𝗯 𝟭: leck-cc.vant220906.repl.co\n━━━━━━━━━━━━━━━━━━\n\n🖥 𝗪𝗲𝗯 𝟮: https://leck-cc-2.truongnhat12.repl.co\n━━━━━━━━━━━━━━━━━━\n`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('http://api.apibot.repl.co/vdgai')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "4": {
const admin = config.ADMINBOT
    const ndh = config.NDH
          const namebot = config.BOTNAME
          const { commands } = global.client;
          const PREFIX = config.PREFIX
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `==== [ 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 ] ====
━━━━━━━━━━━━━━━━━━\n\n🖥 𝗠𝗼𝗱𝘂𝗹𝗲𝘀: 𝗖𝗼́ ${commands.size} 𝗹𝗲̣̂𝗻𝗵 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁\n📎 𝗣𝗿𝗲𝗳𝗶𝘅: 𝗗𝗮̂́𝘂 𝗹𝗲̣̂𝗻𝗵 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁 𝗹𝗮̀ [ ${PREFIX} ]\n💓 𝗡𝗮𝗺𝗲 𝗯𝗼𝘁: ${namebot}\n💬 𝗟𝗶𝘀𝘁𝗯𝗼𝘅: 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗼̛̉ ${global.data.allThreadID.length} 𝗯𝗼𝘅\n👑 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗼́ ${admin.length} 𝗮𝗱𝗺𝗶𝗻 𝘃𝗮̀  ${ndh.length} 𝗻𝗱𝗵\n━━━━━━━━━━━━━━━━━━\n𝗦𝗮𝘂 đ𝐚̂𝘆 𝗹𝗮̀ 𝗹𝗼̛̀𝗶 𝗻𝗼́𝗶 𝗯𝗼𝘁 𝗺𝘂𝗼̂́𝗻 𝗴𝘂̛̉𝗶 đ𝗲̂́𝗻 𝗯𝗮̣𝗻: Đ𝘂̛̀𝗻𝗴 𝘀𝗽𝗮𝗺 𝘁𝘂𝗶 𝗻𝗵𝗮́ 𝘃𝗶̀ 𝘁𝘂𝗶 𝗿𝗮̂́𝘁 𝗰𝘂𝘁𝗶, 𝘁𝘂𝗶 𝘀𝗲̃ 𝗽𝗵𝘂̣𝗰 𝘃𝘂̣ 𝗯𝗮̣𝗻 𝟭 𝗰𝗮́𝗰𝗵 𝗻𝗵𝗶𝗲̣̂𝘁 𝘁𝗶̀𝗻𝗵 𝗻𝗵𝗮̂́𝘁 💓`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.last-namename.repl.co/image/robot')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
          case "6": {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
  const moment = require("moment-timezone");
   const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  async function streamURL(url, mime='jpg') {
    const dest = `${__dirname}/cache/${Date.now()}.${mime}`,
    downloader = require('image-downloader'),
    fse = require('fs-extra');
    await downloader.image({
        url, dest
    });
    setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);
    return fse.createReadStream(dest);
};
          let threadInfo = await api.getThreadInfo(event.threadID);
            let img = threadInfo.imageSrc;
            var gendernam = [];
            var gendernu = [];
            var nope = [];
                for (let z in threadInfo.userInfo) {
      var gioitinhone = threadInfo.userInfo[z].gender;
      var nName = threadInfo.userInfo[z].name;
      if (gioitinhone == "MALE") {
        gendernam.push(z + gioitinhone)
      } else if (gioitinhone == "FEMALE") {
        gendernu.push(gioitinhone)
      } else {
        nope.push(nName)
      }
    }; 
                         var nam = gendernam.length;
             var nu = gendernu.length;
             var kxd = nope.length;
         let threadName = threadInfo.threadName;
            let qtv = threadInfo.adminIDs.length;
            let sl = threadInfo.messageCount;
             let icon = threadInfo.emoji;
                      let color = threadInfo.color;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "tắt" : sex == true ? "bật" : "\n";
 
                  var i = 1;
                       var listad_msg = '';
  var adminIDs = threadInfo.adminIDs;
	for (let get of adminIDs) {
    const infoUsers = await Users.getInfo(get.id);
    listad_msg += `→ ${i++}. 𝐓𝐞̂𝐧: ${infoUsers.name}\n`
  }
 api.unsendMessage(handleReply.messageID); 
 var msg = `===「 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 𝗡𝗛𝗢́𝗠 」===\n\n🏘️ 𝗧𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadName}\n⚙️ 𝗜𝗗 𝗻𝗵𝗼́𝗺: ${event.threadID}\n👥 𝗦𝗼̂́ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺:${threadInfo.participantIDs.length}\n🧑 𝗡𝗮𝗺: ${nam}\n👧 𝗡𝘂̛̃ : ${nu}\n💞 𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻: ${qtv}\n 📚 𝗗𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻:                           ${listad_msg}\n🌷 𝗣𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁: ${pd}\n😻 𝗕𝗶𝗲̂̉𝘂 𝘁𝘂̛𝗼̛̣𝗻𝗴 𝗰𝗮̉𝗺 𝘅𝘂́𝗰: ${icon ? icon : 'Không sử dụng'}\n💝 𝗠𝗮̃ 𝗴𝗶𝗮𝗼 𝗱𝗶𝗲̣̂𝗻: ${color}\n━━━━━━━━━━━━━━━━━━\n🍑 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺: ${sl}\n 📔 𝗡𝗴𝗮̀𝘆 𝘁𝗮̣𝗼 𝗱𝘂̛̃ 𝗹𝗶𝗲̣̂𝘂: ${timeNow}\n🎀 𝗣𝗵𝗶́𝗮 𝘁𝗿𝗲̂𝗻 𝗹𝗮̀ 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺 𝗯𝗮̣𝗻 𝗱𝘂̀𝗻𝗴 𝗯𝗼𝘅 𝗶𝗻𝗳𝗼 đ𝗲̂̉ 𝘅𝗲𝗺 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁`
return api.sendMessage({body: msg, attachment: await streamURL(threadInfo.imageSrc)},event.threadID,event.messageID)
  
                                                                                             }
          case "5": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `💓 === [ 𝗤𝗨𝗬 𝗟𝗨𝗔̣̂𝗧 𝗕𝗢𝗧 ] === 💓\n━━━━━━━━━━━━━━━━━━\n→ 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗱𝘂̀𝗻𝗴 𝗹𝘂𝗮̣̂𝘁 𝗯𝗼𝘁 𝗱𝗲̂̉ 𝘅𝗲𝗺 𝗹𝘂𝗮̣̂𝘁 𝗯𝗼𝘁 𝗿𝗼̂̀𝗶 𝗵𝗮̃𝘆 𝘅𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗯𝗼𝘁 𝗺𝗼̣̂𝘁 𝗰𝗮́𝗰𝗵 𝘃𝘂𝗶 𝘃𝗲̉ 𝗻𝗵𝗲́ 
   𝐃𝐮̛𝐨̛́𝐢 𝐥𝐚̀ 𝐥𝐮𝐚̣̂𝐭 𝐛𝐨𝐭 𝐧𝐠𝐚̆́𝐧 𝐠𝐨̣𝐧 𝐦𝐮𝐨̂́𝐧 𝐛𝐢𝐞̂́𝐭 𝐜𝐡𝐢́𝐧𝐡 𝐱𝐚́𝐜 𝐥𝐮𝐚̣̂𝐭 𝐛𝐨𝐭 𝐭𝐡𝐢̀ 𝐝𝐮̀𝐧𝐠 𝐥𝐞̣̂𝐧𝐡 !𝐥𝐮𝐚𝐭𝐛𝐨𝐭 𝐧𝐡𝐞́ 𝐱𝐢𝐧 𝐜𝐚̉𝐦 𝐨̛𝐧 😘
         💖 𝐋𝐮𝐚̣̂𝐭 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 𝐁𝐨𝐭 💖
𝟏: 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐜𝐡𝐚̂́𝐩 𝐡𝐚̀𝐧𝐡 𝐥𝐮𝐚̣̂𝐭 𝐜𝐮̉𝐚 𝐛𝐨𝐭 
𝟐: 𝐊𝐡𝐨̂𝐧𝐠 𝐝𝐮̀𝐧𝐠 𝐛𝐨𝐭 𝐯𝐚̀𝐨 𝐯𝐢𝐞̣̂𝐜 𝐱𝐞𝐦 𝐡𝐞𝐧𝐭𝐚𝐢 𝐪𝐮𝐚́ 𝐧𝐡𝐢𝐞̂̀𝐮 :𝐯 
𝟑: 𝐍𝐞̂́𝐮 𝐛𝐢̣ 𝐛𝐚𝐧 𝐝𝐨 𝐬𝐩𝐚𝐦 𝐭𝐡𝐢̀ 𝐚𝐝𝐦𝐢𝐧 𝐠𝐨̛̃ 𝐛𝐚𝐧 
𝟒: 𝐍𝐞̂́𝐮 𝐛𝐢̣ 𝐛𝐚𝐧 𝐝𝐨 𝐜𝐡𝐮̛̉𝐢 𝐛𝐨𝐭 𝐭𝐡𝐢̀ 𝐧𝐡𝐚̆́𝐧 𝐭𝐢𝐧 𝐚𝐝𝐦𝐢𝐧 𝐱𝐢𝐧 𝐥𝐨̂̃𝐢 𝐦𝐨̛́𝐢 đ𝐮̛𝐨̛̣𝐜 𝐠𝐨̛̃
𝟓: 𝐊𝐡𝐨̂𝐧𝐠 𝐜𝐡𝐮̛̉𝐢 𝐛𝐨𝐭 𝐝𝐮̛𝐨̛́𝐢 𝐦𝐨̣𝐢 𝐡𝐢̀𝐧𝐡 𝐭𝐡𝐮̛́𝐜 𝐡𝐨𝐚̣̆𝐜 𝐜𝐮̛́ 𝐜𝐡𝐮̛̉𝐢 𝐧𝐞̂́𝐮 𝐲́ 𝐭𝐡𝐮̛́𝐜 𝐛𝐚̣𝐧 𝐧𝐡𝐮̛ 𝐜𝐨𝐧 𝐜𝐚̣̆𝐜 🌺
     𝐃𝐮̛𝐨̛́𝐢 𝐥𝐚̀ 𝐥𝐢𝐧𝐤 𝐚𝐝𝐦𝐢𝐧 𝐛𝐨𝐭 𝐧𝐡𝐞́  
https://www.facebook.com/vthien206\n→ 𝗩𝗶𝗲̣̂𝗰 𝘁𝘂𝗮̂𝗻 𝘁𝗵𝘂̉ 𝗾𝘂𝘆 𝗹𝘂𝗮̣̂𝘁 𝗯𝗼𝘁 𝘀𝗲̃ đ𝗼́𝗻𝗴 𝗴𝗼́𝗽 𝘁𝗶́𝗰𝗵 𝗰𝘂̛̣𝗰 đ𝗲̂́𝗻 𝗰𝗼̣̂𝗻𝗴 đ𝗼̂̀𝗻𝗴 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 🌸\n━━━━━━━━━━━━━━━━━━`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.last-namename.repl.co/image/robot')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
          }
               


            break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("→ 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", event.threadID, event.messageID);
            	if (choose > 6 || choose < 1) return api.sendMessage("→ 𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", event.threadID, event.messageID); 
    }
    }
}
                             }