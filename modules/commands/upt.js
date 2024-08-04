module.exports.config = {
	name: "upt",
	version: "1.0.1",
	hasPermssion: 2,
	credits: "Vihoo",
	description: "",
	commandCategory: "Tiện ích",
	usages: "",
	cooldowns: 0,
	denpendencies: {
		"fs-extra": "",
		"request": ""
	}
};
function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.handleEvent = async ({
	event,
	api,
	Users
}) => {
	const fs = global.nodemodule["fs-extra"];
  const moment = require('moment-timezone');
  const timeStart = Date.now();
  const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
var gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY - HH:mm:ss");
  var thu =
moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝗖𝗵𝘂̉ 𝗻𝗵𝗮̣̂𝘁'
  if (thu == 'Monday') thu = '𝗧𝗵𝘂̛́ 𝗵𝗮𝗶'
  if (thu == 'Tuesday') thu = '𝗧𝗵𝘂̛́ 𝗯𝗮'
  if (thu == 'Wednesday') thu = '𝗧𝗵𝘂̛́ 𝘁𝘂̛'
  if (thu == "Thursday") thu = '𝗧𝗵𝘂̛́ 𝗻𝗮̆𝗺'
  if (thu == 'Friday') thu = '𝗧𝗵𝘂̛́ 𝘀𝗮́𝘂'
  if (thu == 'Saturday') thu = '𝗧𝗵𝘂̛́ 𝗯𝗮̉𝘆'
	var {
		threadID,
		messageID,
		body,
		senderID
	} = event;
	const thread = global.data.threadData.get(threadID) || {};
	if (typeof thread["uptt"] !== "undefined" && thread["uptt"] == false) return;
const axios = require('axios')
	const pidusage = await global.nodemodule["pidusage"](process.pid);
	let name = await Users.getNameUser(event.senderID);
	if (senderID == api.getCurrentUserID()) return;
const namebot = config.BOTNAME;
  const PREFIX = config.PREFIX;
  const { commands } = global.client; 
	function out(data) {
		api.sendMessage(data, threadID, messageID)
	}
	//trả lời
	var msg = {
		body: `=== [ 𝗨𝗣𝗧𝗜𝗠𝗘 𝗥𝗢𝗕𝗢𝗧 ] ===\n━━━━━━━━━━━━━━━━━━\n👨‍💻: 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 ${global.config.BOTNAME}\nĐ𝗮̃ 𝗼𝗻𝗹 đ𝘂𝗼̛̣𝗰\n🍒 ${hours} 𝗴𝗶𝗼̛̀ ${minutes} 𝗽𝗵𝘂́𝘁 ${seconds} 𝗴𝗶𝗮̂𝘆\n━━━━━━━━━━━━━━━━━━\n[👾] → 𝗣𝗿𝗲𝗳𝗶𝘅 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴: ${global.config.PREFIX}\n[👤] → 𝗦𝗼̂́ 𝗔𝗱𝗺𝗶𝗻: ${global.config.ADMINBOT.length}\n[🔗] → 𝗧𝗼̂̉𝗻𝗴 𝗹𝗲̣̂𝗻𝗵: ${commands.size}\n[👥] → 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶: ${global.data.allUserID.length}\n[🏟️] → 𝗧𝗼̂̉𝗻𝗴 𝗻𝗵𝗼́𝗺: ${global.data.allThreadID.length}\n━━━━━━━━━━━━━━━━━━\n====[ 🖥️ 𝗦𝗬𝗦𝗧𝗘𝗠 🖥️ ]====\n[🌡️] → 𝗖𝗣𝗨: ${pidusage.cpu.toFixed(1)}%\n[🧩] → 𝗥𝗮𝗺: ${byte2mb(pidusage.memory)}\n[⚙️] → 𝗣𝗶𝗻𝗴: ${Date.now() - timeStart}𝗺𝘀\n[⛩️] → 𝗕𝗼𝘁 𝗧𝘆𝗽𝗲: 𝗠𝗶𝗿𝗮𝗶\n[🛸] → 𝗣𝗿𝗲𝗳𝗶𝘅 : ${PREFIX}\n[💾] → 𝗩𝗲𝗿𝘀𝗶𝗼𝗻: 1.2.14\n━━━━━━━━━━━━━━━━━━━\n⏰: 𝗕𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀: ${gio} ${thu}`,
		attachment: (await global.nodemodule["axios"]({
			url: (await global.nodemodule["axios"]('http://api.apibot.repl.co/vdgai')).data.data,
			method: "GET",
			responseType: "stream"
		})).data
	}
	// Gọi bot
	var arr = ["Upt","Onl","onl","upt"];
	arr.forEach(i => {
		let str = i[0].toUpperCase() + i.slice(1);
		if (body === i.toUpperCase() | body === i | str === body) return out(msg)
	});
};

module.exports.languages = {
	"vi": {
		"on": "Bật",
		"off": "Tắt",
		"successText": "upt thành công",
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "hi success!",
	}
}

module.exports.run = async function({
	api,
	event,
	Threads,
	getText
}) {
	const {
		threadID,
		messageID
	} = event;
	let data = (await Threads.getData(threadID)).data;

	if (typeof data["upt"] == "undefined" || data["upt"] == true) data["upt"] = false;
	else data["upt"] = true;

	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["upt"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
  }