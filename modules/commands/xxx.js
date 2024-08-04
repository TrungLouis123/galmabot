module.exports.config = {
  name: "x",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "bá dô mà núc",
  description: "xem video show linh tinh🌚😁 có sẵn trong lệnh được update lên bởi văn thiện",
  commandCategory: "Nsfw",
  usages: "xxx",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/kwgV0xt.mp4",
"https://i.imgur.com/eWWnqFz.mp4",
"https://i.imgur.com/6yaxoSo.mp4",
"https://i.imgur.com/Tvz57yO.mp4",
"https://i.imgur.com/077tH3J.mp4",
"https://i.imgur.com/kpWY2iH.mp4",
"https://i.imgur.com/Q2ttJsR.mp4",
"https://i.imgur.com/dQuB0Qs.mp4",
"https://i.imgur.com/k8urhDf.mp4",
"https://i.imgur.com/jdduZ8g.mp4",
"https://i.imgur.com/SmkQtKF.mp4",
"https://i.imgur.com/OZNa8lB.mp4",
"https://i.imgur.com/6cmx0Zn.mp4",
"https://i.imgur.com/Jl90a7Y.mp4",
"https://i.imgur.com/kvCIlIk.mp4",
"https://i.imgur.com/ihXIFrz.mp4",
"https://i.imgur.com/IKHKRoy.mp4",
"https://i.imgur.com/c3y5cyW.mp4",
"https://i.imgur.com/f3p2rkT.mp4",
"https://i.imgur.com/Wg8MKh3.mp4",
"https://i.imgur.com/449LjHZ.mp4",
    ];
  var callback = () => api.sendMessage({body:`🌸梁Update bởi ADMIN 𝗩𝗮̆𝗻 𝗧𝗵𝗶𝗲̣̂𝗻 🍑梁🌸
                            𖤂◡̈𖤂
       Admin: 𝗩𝗮̆𝗻 𝗧𝗵𝗶𝗲̣̂𝗻 
                      ----🍒----`,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   };
 