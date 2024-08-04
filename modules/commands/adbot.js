module.exports.config = {

    name: "adbot",

    version: "1.0.1",

    hasPermssion: 0,

    credits: "Lê Định",

    description: "",

    commandCategory: "𝐍𝐨 𝐏𝐫𝐞𝐟𝐢𝐱",

    usages: "",

    cooldowns: 10,

    denpendencies: {

        "fs": "",

        "request": ""

    }

};

module.exports.onLoad = () => {

    const fs = require("fs-extra");

    const request = require("request");

    const dirMaterial = __dirname + `/noprefix/`;

    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });

    if (!fs.existsSync(dirMaterial + "ttadmin.mp4")) request("https://i.imgur.com/dClqQnO.mp4").pipe(fs.createWriteStream(dirMaterial + "ttadmin.mp4"));

}

module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {

    const fs = require("fs");

    let name = await Users.getNameUser(event.senderID)

    var msg = {
               
                body: `𝗛𝗲𝗹𝗹𝗼 👋\n→ 𝗗𝗮̂𝘆 𝗹𝗮̀ 𝗰𝗼̂ 𝗰𝗵𝘂̉ 𝗰𝘂̉𝗮 𝘁𝗼̂𝗶 ☺️\n→ʚ𝗧𝗵𝗼̂𝗻𝗴 𝗧𝗶𝗻 𝗔𝗱𝗺𝗶𝗻ɞ\n→ 𝗔𝗱𝗺𝗶𝗻 𝗻𝗮𝗺𝗲: 𝗟𝘂̛ 𝗡𝗴𝗼̣𝗰 𝗛𝗮̀ 𝗟𝗶𝗻𝗵 ❤️\n→ 𝗕𝗶𝗲̣̂𝘁 𝗗𝗮𝗻𝗵:  𝗵𝗹 🐭\n→ 𝗖𝘂𝗻𝗴 𝗛𝗼𝗮̀𝗻𝗴 𝗗𝗮̣𝗼: 𝗧𝘂̛̣ 𝘁𝗶̀𝗺 𝗻𝗵𝗮 😊\n→ 𝗧𝗶́𝗻𝗵 𝗖𝗮́𝗰𝗵: 𝗗𝗲̂̃ 𝗴𝗮̂̀𝗻 🍒\n→ 𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼: 𝟭𝗺𝟲 🐭\n→ 𝗖𝗮̂𝗻 𝗻𝗮̣̆𝗻𝗴: 𝟰𝟱𝗸𝗴 🌹\n→ 𝗦𝗶𝗻𝗵 𝗻𝗮̆𝗺: 𝟭𝟭/𝟭𝟬/𝟮𝟬𝟬𝟴 😍\n◆━━━━◆𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸◆━━━━◆\n→ 𝗟𝗶𝗻𝗸: https://m.facebook.com/profile.php?id=100067505380203&eav=Afa0AP8PXeCupq7PQGiEpkA0h-99qD4knCdSnHStELhrKHCWA_lmxRGOodCPe3yWVOQ&paipv=0&wtsid=rdr_0nqXwxFnuWNlFVEGd&_rdr\n\n𝗨𝗜𝗗: 100067505380203\n◆━━━◆𝗩𝗮̆𝗻 𝗧𝗵𝗶𝗲̣̂𝗻 ◆━━━◆🎉Chào đây là bot của Thiện có một số lưu ý sau\n🎉 Nếu bot ko hoạt động hay bị lỗi hãy liên hệ qua sdt hoặc nhắn tin mess để được liên hệ trực tiếp với mình\n🎉 Sử dụng bot không chửi bot vì nó cute lắm nhá,chửi thoải mái nếu như ý thức của bạn như con cặc và sẽ bị ban vĩnh viễn\n🎉 Ngựa ngựa bớt spam bot nha bot die đấy\n🎉 Không report bot nha mụi ngừi\n▬▬ι═══════ﺤ Cảm ơn bạn đã sử dụng dịch vụ bot của mình,mong hãy làm đúng với lưu ý nhá:3\nChúc bạn ngày mới vui vẻ <3\n🌸🍒🌸🌺🍒🌺🌸🍒🌸\n`,

                attachment: fs.createReadStream(__dirname + `/noprefix/ttadmin.mp4`)

            }

    if (event.body.toLowerCase() == "admin"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "•"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "🐭"){

        return api.sendMessage(msg,event.threadID,evenYêmessageID);}

    if (event.body.toLowerCyêe() == "Hà Linh"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "**"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "hl"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

        };

module.exports.run = async ({ event, api, Currencies, args, utils }) => {

return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)

  }