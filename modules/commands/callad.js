module.exports.config = {
    name: "callad",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "NTKhang update & fix by DuyVuong and D-jukie & mod thêm từ táo and horizon",
    description: "thông báo lỗi của bot đến admin hoặc góp ý",
    commandCategory: "hệ thống",
    usages: "[lỗi gặp phải hoặc ý kiến]",
    cooldowns: 0,
  };
  
  module.exports.handleReply = async function({ api, args, event, handleReply, Users }) {
    try {
        if (event.senderID == api.getCurrentUserID()) return;
      var name = (await Users.getData(event.senderID)).name;
      var s = [];
      var l = [];
      const fs = require('fs-extra');
      const { join } = require('path');
      const axios = require('axios');
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      var charactersLength = characters.length || 20;
      if (event.attachments.length != 0) {
        for (var p of event.attachments) {
          var result = '';
          for (var i = 0; i < charactersLength; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
          if (p.type == 'photo') {
            var e = 'jpg';
          }
          if (p.type == 'video') {
            var e = 'mp4';
          }
          if (p.type == 'audio') {
            var e = 'mp3';
          }
          if (p.type == 'animated_image') {
            var e = 'gif';
          }
          var o = join(__dirname, 'cache', `${result}.${e}`);
          let m = (await axios.get(encodeURI(p.url), { responseType: "arraybuffer" })).data;
          fs.writeFileSync(o, Buffer.from(m, "utf-8"));
          s.push(o);
          l.push(fs.createReadStream(o));
        }
      };
      switch (handleReply.type) {
          
        case "reply": {
            var ls = require("moment-timezone").tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY) (dddd)");
          var idad = global.config.ADMINBOT;
          var ex = (await Users.getNameUser(handleReply.author));
          if (s.length == 0) {
            for (let ad of idad) {
              api.sendMessage({
                body: ` 📌➩ 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝘂̛̀ : ${name}\n 🎬➩ Đ𝗲̂́𝗻 𝗔𝗱𝗺𝗶𝗻 : ${ex.toUpperCase()}\n 💌➩ 𝗧𝗮̣𝗶 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 : ${handleReply.body.toUpperCase()}\n 💓➩ 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴 : ${event.body || "𝐊𝐡𝐨̂𝐧𝐠 𝐂𝐨́ 𝐍𝐨̣̂𝐢 𝐃𝐮𝐧𝐠"}\n ⏳➩ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 : ${ls}`, mentions: [{
                  id: event.senderID,
                  tag: name
                }]
              }, ad, (e, info) => global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                messID: event.messageID,
                author: event.senderID,
                id: event.threadID,
                body: event.body,
                type: "calladmin"
              }));
            }
          }
          else {
            var ls = require("moment-timezone").tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
            for (let ad of idad) {
              api.sendMessage({
                body: `『 💶 』➩ 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝘂̛̀ : ${name}\n『 💶 』➩ Đ𝗲̂́𝗻 𝗔𝗱𝗺𝗶𝗻 : ${ex.toUpperCase()}\n『 💶 』➩ 𝗧𝗮̣𝗶 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 : ${handleReply.body.toUpperCase()}\n『 💶 』➩ 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴 : ${event.body || "𝐊𝐡𝐨̂𝐧𝐠 𝐂𝐨́ 𝐍𝐨̣̂𝐢 𝐃𝐮𝐧𝐠"}\n『 💶 』➩ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 : ${ls}`, attachment: l, mentions: [{
                  id: event.senderID,
                  tag: name
                }]
              }, ad, (e, info) => global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                messID: event.messageID,
                author: event.senderID,
                id: event.threadID,
                body: event.body,
                type: "calladmin"
              }));
              for (var b of s) {
                fs.unlinkSync(b);
              }
            }
          }
          break;
        }
        case "calladmin": {
            var ls = require("moment-timezone").tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
          if (s.length == 0) {
            api.sendMessage({ body: ` 👤➩ 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝘂̛̀ 𝗔𝗱𝗺𝗶𝗻 : ${name}\n 📌➩ 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴 : ${event.body || "Không Có Nội Dung"}\n ⏳➩ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 : ${ls}`, mentions: [{ tag: name, id: event.senderID }] }, handleReply.id, (e, info) => global.client.handleReply.push({
              name: this.config.name,
              author: event.senderID,
              body: event.body,
              messageID: info.messageID,
              type: "reply"
            }), handleReply.messID);
            var s = global.config.ADMINBOT;
            for (let o of s) {
            var user = await Users.getNameUser(handleReply.author);
            api.sendMessage({body: ` 👤➩ 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝘂̛̀ 𝗔𝗱𝗺𝗶𝗻 : ${name}\ 💓➩ Đ𝗲̂́𝗻 : ${user}\n 🎬➩ 𝗧𝗮̣𝗶 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 : ${handleReply.body.toUpperCase() || "Tệp"}\n 📌➩ 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴 : ${event.body}\n ⏳➩ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 : ${ls}`,
            mentions: [{
                tag: user,
                id: handleReply.author
            }]
        },o)
    }
          }
          else {
            api.sendMessage({ body: ` 👤➩ 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝘂̛̀ 𝗔𝗱𝗺𝗶𝗻 : ${name}\n 📌➩ 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴 : ${event.body || "Không Có Nội Dung"}\n ⏳➩ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 : ${ls}`, attachment: l, mentions: [{ tag: name, id: event.senderID }] }, handleReply.id, (e, info) => global.client.handleReply.push({
              name: this.config.name,
              author: event.senderID,
              messageID: info.messageID,
              body: event.body,
              type: "reply"
            }), handleReply.messID);
            for (var b of s) {
              fs.unlinkSync(b);
            }
            var s = global.config.ADMINBOT;
            for (let o of s) {
            var user = await Users.getNameUser(handleReply.author);
            api.sendMessage({body: ` 🏮➩ 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝘂̛̀ 𝗔𝗱𝗺𝗶𝗻 : ${name}\n 🎀➩ Đ𝗲̂́𝗻 : ${user}\n 🎬➩ 𝗧𝗮̣𝗶 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 : ${handleReply.body.toUpperCase() || "Tệp"}\n 🎧➩ 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴 : ${event.body || "Chỉ Có Tệp"}\n ⏳➩ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 : ${ls}`, attachment: l,
            mentions: [{
                tag: user,
                id: handleReply.author
            }]
        },o)
    }
          }
        }
      }
    }
    catch (ex) {
      console.log(ex);
    }
  };
  
  module.exports.run = async function({ api, event, Threads, args, Users }) {
    try {
      var s = [];
      var l = [];
      const fs = require('fs-extra');
      const { join } = require('path');
      const axios = require('axios');
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      var charactersLength = characters.length || 20;
      if (event.messageReply) {
      if (event.messageReply.attachments.length != 0) {
        for (var p of event.messageReply.attachments) {
          var result = '';
          for (var i = 0; i < charactersLength; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
          if (p.type == 'photo') {
            var e = 'jpg';
          }
          if (p.type == 'video') {
            var e = 'mp4';
          }
          if (p.type == 'audio') {
            var e = 'mp3';
          }
          if (p.type == 'animated_image') {
            var e = 'gif';
          }
          var o = join(__dirname, 'cache', `${result}.${e}`);
          let m = (await axios.get(encodeURI(p.url), { responseType: "arraybuffer" })).data;
          fs.writeFileSync(o, Buffer.from(m, "utf-8"));
          s.push(o);
          l.push(fs.createReadStream(o));
        }
      }
    }
      if (!args[0] && event.messageReply.attachments.length == 0)
        return api.sendMessage(
          "Bạn chưa nhập nội dung cần báo cáo",
          event.threadID,
          event.messageID
        );
  
      var name = (await Users.getData(event.senderID)).name;
      var idbox = event.threadID;
  
      var datathread = (await Threads.getData(event.threadID)).threadInfo;
      var namethread = datathread.threadName;
  
      const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY)  (dddd)");
      var soad = global.config.ADMINBOT.length;
      api.sendMessage(
    ` 🎀➩ 𝗚𝘂̛̉𝗶 𝗧𝗵𝗮̀𝗻𝗵 𝗖𝗼̂𝗻𝗴 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻 Đ𝗲̂́𝗻 𝗔𝗱𝗺𝗶𝗻\n 🍑➩ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 : ${gio}\n 🌐 ➩ 𝗟𝐔𝐫𝐥 𝐩𝐫𝐨𝐟𝐢𝐥𝐞: fb.com/${event.senderID}`,
        event.threadID,
        () => {
          var idad = global.config.ADMINBOT;
          if (s.length == 0) {
            for (let ad of idad) {
              api.sendMessage({ body: ` 👤➩ 𝗕𝗮́𝗼 𝗰𝗮́𝗼 𝘁𝘂̛̀: ${name}\n 🎬➩ 𝗡𝗵𝗼́𝗺: ${namethread}\n 🍑 ➩ 𝗜𝗱 𝗻𝗵𝗼́𝗺: ${idbox}\n 🌐➩ 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: ${args.join(" ")}\n ⏳➩ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 : ${gio}\n 🎀 ➩ 𝐔𝐫𝐥 𝐩𝐫𝐨𝐟𝐢𝐥𝐞: fb.com/${event.senderID}`, mentions: [{ id: event.senderID, tag: name }] },
                ad, (error, info) =>
                global.client.handleReply.push({
                  name: this.config.name,
                  messageID: info.messageID,
                  body: event.body,
                  author: event.senderID,
                  messID: event.messageID,
                  id: idbox,
                  type: "calladmin"
                })
              );
            }
          }
          else {
            for (let ad of idad) {
              api.sendMessage({
                body: ` 👤➩ 𝗕𝗮́𝗼 𝗰𝗮́𝗼 𝘁𝘂̛̀ : ${name}\n 🍑➩ 𝗡𝗵𝗼́𝗺: ${namethread}\n 🏮➩ 𝗜𝗱 𝗻𝗵𝗼́𝗺 : ${idbox}\n 📌➩ 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: ${args.join(" ") || "𝐊𝐡𝐨̂𝐧𝐠 𝐂𝐨́ 𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧 !"}\n ⏳➩ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${gio}\n 🖼️➩ 𝐔𝐫𝐥 𝐩𝐫𝐨𝐟𝐢𝐥𝐞: fb.com/${event.senderID}`, attachment: l, mentions: [{ id: event.senderID, tag: name }]
              },
                ad, (error, info) =>
                global.client.handleReply.push({
                  name: this.config.name,
                  messageID: info.messageID,
                  body: event.body,
                  author: event.senderID,
                  messID: event.messageID,
                  id: idbox,
                  type: "calladmin"
                })
              );
            }
            for (var b of s) {
              fs.unlinkSync(b);
            }
          }
        }
        , event.messageID);
    }
    catch (ex) {
      console.log(ex);
    }
  };
            