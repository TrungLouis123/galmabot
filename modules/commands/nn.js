module.exports.config = {
  name: "ngủ ngon",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Tài",
  description: "Chúc ngủ ngon",
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
  if (event.body.indexOf("ngủ ngon")==0 || (event.body.indexOf("Ngủ ngon")==0) || event.body.indexOf("nn")==0 ||
event.body.indexOf("Nn")==0 ||
event.body.indexOf("Ngủ")==0 ||
event.body.indexOf("ngủ")==0 ||
event.body.indexOf("nnmđ")==0 ||
event.body.indexOf("Nnmđ")==0 ||
event.body.indexOf("NN")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.imgur.com/jFSPy89.mp4",
      "https://i.imgur.com/vBn9PwN.mp4",
      "https://i.imgur.com/Be7PdVX.mp4",
      "https://i.imgur.com/7TBNEfe.mp4", 
      "https://i.imgur.com/Yh384mt.mp4",
      "https://i.imgur.com/EaVssak.mp4",
      "https://i.imgur.com/7TkAIzz.mp4",  
"https://i.imgur.com/XWorFOY.mp4",  
"https://i.imgur.com/i4DcZEI.mp4",  
"https://i.imgur.com/ua4i0aK.mp4",  
"https://i.imgur.com/ody4gSb.mp4",  
"https://i.imgur.com/fVsJ3f4.mp4",
      "https://i.imgur.com/45gd35v.mp4", 
      "https://i.imgur.com/StJkfUJ.mp4",
      "https://i.imgur.com/dek6ii4.mp4",
      "https://i.imgur.com/qr952Vp.mp4", 
      "https://i.imgur.com/uYx4gJW.mp4",
      "https://i.imgur.com/RXAZ9F5.mp4",
      "https://i.imgur.com/HUIOUda.mp4"
          ];
     var callback = () => api.sendMessage({body:`𝗖𝗵𝘂́𝗰 𝗰𝗮̣̂𝘂 𝗻𝗴𝘂̉ 𝗻𝗴𝗼𝗻 𝗺𝗼̛ đ𝗲̣𝗽 𝗻𝗵𝗼́ 🥺❤️\n->𝗬𝗲̂𝘂 𝗰𝗮̣̂𝘂 𝗻𝗵𝗶𝗲̂̀𝘂 😍\n\n->𝗠𝗼𝗮 𝗺𝗼𝗮 𝗺𝗼𝗮 😘😘😘`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };