module.exports.config = {
  name: "lq",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ntruong",
  description: "Random video",
  commandCategory: "Random-mp4",
  usages: "api",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("Liên Quân")==0 || (event.body.indexOf("liên quân")==0) || event.body.indexOf("lq")==0 ||
event.body.indexOf("Lq")==0 ||
event.body.indexOf("aya")==0 ||
event.body.indexOf("Liqi")==0 ||
event.body.indexOf("aov")==0 ||
event.body.indexOf("Lien Quan")==0 ||
event.body.indexOf("Aov")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.imgur.com/EfMd5e3.mp4",
"https://i.imgur.com/jRpxhLr.mp4",
"https://i.imgur.com/mzRgmCj.mp4",
     "https://i.imgur.com/HByckbe.mp4",
   "https://i.imgur.com/nV95G2a.mp4",
   "https://i.imgur.com/j4GZ6qe.mp4"  ,
      "https://i.imgur.com/LpXyLgA.mp4",
      "https://i.imgur.com/TiXUDDE.mp4",
     "https://i.imgur.com/ofYgDSh.mp4" ,
      "https://i.imgur.com/NjC7GB1.mp4",
     "https://i.imgur.com/N1CG8DY.mp4" ,
      "https://i.imgur.com/7levfx8.mp4",
     "https://i.imgur.com/cypNG6E.mp4" ,
      "https://i.imgur.com/Md1rCDs.mp4" ,
      "https://i.imgur.com/TxE8t2U.mp4",
      "https://i.imgur.com/mDLoAxa.mp4",
      "https://i.imgur.com/zFKsHCM.mp4",
      "https://i.imgur.com/URy5Djn.mp4"
          ];
     var callback = () => api.sendMessage({body:`==== [ 𝗟𝗜𝗘̂𝗡 𝗤𝗨𝗔̂𝗡 ] ====\n━━━━━━━━━━━━━━━━━━\n→ [🧸] : 𝗟𝗶𝗲̂𝗻 𝗾𝘂𝗮̂𝗻 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗱𝗮̂𝘆\n→ [📺] : 𝗦𝗼̂́ 𝘃𝗶𝗱𝗲𝗼: ${link.length}\n ━━━━━━━━━━━━━━━━━━\n→ [💓] : Đ𝘂̛𝗼̛̣𝗰 𝘂𝗽𝗱𝗮𝘁𝗲 𝗯𝗼̛̉𝗶 𝗡𝗵𝗮̣̂𝘁 𝗧𝗿𝘂̛𝗼̛̀𝗻𝗴`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };