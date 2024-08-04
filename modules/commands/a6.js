module.exports.config = {
	name: "a6",
	version: "1.0.1",
	hasPermssion: 2,
	credits: "Vihoo",
	description: "Random video",
	commandCategory: "no prefix",
	usages: "",
	cooldowns: 0,
	denpendencies: {
		"fs-extra": "",
		"request": ""
	}
};

module.exports.handleEvent = async ({
	event,
	api,
	Users
}) => {
	const fs = global.nodemodule["fs-extra"];
	var {
		threadID,
		messageID,
		body,
		senderID
	} = event;
	const thread = global.data.threadData.get(threadID) || {};
	if (typeof thread["vdchill"] !== "undefined" && thread["vdchill"] == false) return;

	let name = await Users.getNameUser(event.senderID);
	if (senderID == api.getCurrentUserID()) return;

	function out(data) {
		api.sendMessage(data, threadID, messageID)
	}
	//trả lời
	var msg = {
		body: `𝗛𝗲𝗹𝗹𝗼 👋\n→ Đ𝗮̂𝘆 𝗹𝗮̀ 𝗰𝗼̂ 𝗰𝗵𝘂̉ 𝗰𝘂̉𝗮 𝘁𝗼̂𝗶 ☺️\n      ʚ𝗧𝗵𝗼̂𝗻𝗴 𝗧𝗶𝗻 𝗔𝗱𝗺𝗶𝗻ɞ\n→ 𝗔𝗱𝗺𝗶𝗻 𝗻𝗮𝗺𝗲:𝗟𝗡 𝗛𝗮̀ 𝗟𝗶𝗻𝗵❤️\n→𝗕𝗶𝗲̣̂𝘁 𝗗𝗮𝗻𝗵:  𝗵𝗹 🐭\n→ 𝗖𝘂𝗻𝗴 𝗛𝗼𝗮̀𝗻𝗴 𝗗𝗮̣𝗼: 𝗧𝘂̛̣ 𝘁𝗶̀𝗺 𝗻𝗵𝗮 😊\n→ 𝗧𝗶́𝗻𝗵 𝗖𝗮́𝗰𝗵: 𝗗𝗲̂̃ 𝗴𝗮̂̀𝗻 🍒\n→ 𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼: 𝟭𝗺𝟲 🐭\n→ 𝗖𝗮̂𝗻 𝗻𝗮̣̆𝗻𝗴: 𝟰𝟱𝗸𝗴 🌹\n→ 𝗦𝗶𝗻𝗵 𝗻𝗮̆𝗺: 𝟭𝟭/𝟭𝟬/𝟮𝟬𝟬𝟴 😍\n◆━━━━◆𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸◆━━━━◆\n→ 𝗟𝗶𝗻𝗸: https://m.facebook.com/profile.php?id=100067505380203&eav=Afa0AP8PXeCupq7PQGiEpkA0h-99qD4knCdSnHStELhrKHCWA_lmxRGOodCPe3yWVOQ&paipv=0&wtsid=rdr_0nqXwxFnuWNlFVEGd&_rdr\n\n🐭 𝗨𝗜𝗗: 100067505380203\n◆━━━◆𝗩𝗮̆𝗻 𝗧𝗵𝗶𝗲̣̂𝗻 ◆━━━◆\n🎉Chào đây là bot của Thiện có một số lưu ý sau\n🎉 Nếu bot ko hoạt động hay bị lỗi hãy liên hệ qua sdt hoặc nhắn tin mess để được liên hệ trực tiếp với mình\n🎉 Sử dụng bot không chửi bot vì nó cute lắm nhá,chửi thoải mái nếu như ý thức của bạn như con cặc và sẽ bị ban vĩnh viễn\n🎉 Ngựa ngựa bớt spam bot nha bot die đấy\n🎉 Không report bot nha mụi ngừi\n▬▬ι═══════ﺤ Cảm ơn bạn đã sử dụng dịch vụ bot của mình,mong hãy làm đúng với lưu ý nhá:3\nChúc bạn ngày mới vui vẻ <3\n🌸🍒🌸🌺🍒🌺🌸🍒🌸\n`,
		attachment: (await global.nodemodule["axios"]({
			url: (await global.nodemodule["axios"]('http://api.apibot.repl.co/vdgai',
			method: "GET",
			responseType: "stream"
		})).data
	}
	// Gọi bot
	var arr = ["hl","Hà Linh","🐭"];
	arr.forEach(i => {
		let str = i[0].toUpperCase() + i.slice(1);
		if (body === i.toUpperCase() | body === i | str === body) return out(msg)
	});
};

module.exports.languages = {
	"vi": {
		"on": "Bật",
		"off": "Tắt",
		"successText": "Video chill",
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "Video chill",
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

	if (typeof data["vdchill"] == "undefined" || data["vdchill"] == true) data["vdchill"] = false;
	else data["vdchill"] = true;

	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["vdchill"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}