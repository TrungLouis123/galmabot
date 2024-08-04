module.exports.config = {

    name: "vthien",

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

    if (!fs.existsSync(dirMaterial + "ttadmin.mp4")) request("https://i.imgur.com/HbjedpO.mp4").pipe(fs.createWriteStream(dirMaterial + "ttadmin.mp4"));

}

module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {

    const fs = require("fs");

    let name = await Users.getNameUser(event.senderID)

    var msg = {
               
                body: `𝗛𝗲𝗹𝗹𝗼 𝗯𝗮̣𝗻 👋\nĐ𝗮̂𝘆 𝗹𝗮̀ 𝗮𝗱𝗺𝗶𝗻 𝗰𝘂̉𝗮 𝗯𝗼𝘁\n𝗙𝗯 𝗰𝘂̉𝗮 𝗮𝗱𝗺𝗶𝗻 𝗼̛̉ 𝗱𝗮̂𝘆 𝗻𝗵𝗲́: https://www.facebook.com/lamvanthien206 🌸`,

                attachment: fs.createReadStream(__dirname + `/noprefix/ttadmin.mp4`)

            }

    if (event.body.toLowerCase() == "Admin"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "ad"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "Ad"){

        return api.sendMessage(msg,event.threadID,evenYêmessageID);}

    if (event.body.toLowerCyêe() == "vt"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "Adu"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "adu"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

        };

module.exports.run = async ({ event, api, Currencies, args, utils }) => {

return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)

                       }