module.exports.config = {
	name: "off",
	version: "1.0.0",
	hasPermssion: 3,
	credits: "Des Bủh - Dựa trên demo của manhIT", /* vui lòng k sửa credit :) */
	description: "Tắt Bot",
	commandCategory: "Hệ thống",
	cooldowns: 0
        };
        
module.exports.run = async({event, api}) =>{

   const permission = ["100073530616731"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Xin cái tuổi để off?", event.threadID, event.messageID);

api.sendMessage("Đ𝗮̃ 𝗻𝗵𝗮̣̂𝗻 𝗹𝗲̣̂𝗻𝗵 𝗼𝗳𝗳 𝗯𝗼𝘁 𝘁𝘂̛̀ 𝗮𝗱𝗺𝗶𝗻 𝗩𝗮̆𝗻 𝗧𝗵𝗶𝗲̣̂𝗻\n𝗕𝗮́𝗶 𝗯𝗮𝗶 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗵𝗲́ 👋",event.threadID, () =>process.exit(0))}