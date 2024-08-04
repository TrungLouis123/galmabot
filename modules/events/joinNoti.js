module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "CatalizCS",
	description: "Thông báo bot hoặc người vào nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "djt me Hoàn simp Dũng lỏ" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("", event.threadID, () => api.sendMessage({body:`► 𝐊𝐞̂́𝐭 𝐍𝐨̂́𝐢 𝐁𝐨𝐭 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 ◄\n𝐀𝐲 𝐝𝐨 𝐰𝐡𝐚𝐭 𝐬𝐮𝐩 𝐀 𝐍𝐨̛̀ 𝐋𝐨̂ 𝐀𝐧𝐡 𝐄𝐦 ❤️\n𝐌𝐢̀𝐧𝐡 𝐋𝐚̀ 𝐁𝐎𝐓 𝐂𝐮̉𝐚 𝐕𝐚̆𝐧 𝐓𝐡𝐢𝐞̣̂𝐧\n𝐕𝐮𝐢 𝐋𝐨̀𝐧𝐠 𝐊𝐡𝐨̂𝐧𝐠 𝐂𝐡𝐮̛̉𝐢 𝐁𝐨𝐭, 𝐒𝐩𝐚𝐦, 𝐊𝐢𝐜𝐤 𝐁𝐨𝐭 🥰\n𝐃𝐮̀𝐧𝐠 .𝐦𝐞𝐧𝐮 𝐚𝐥𝐥 𝐍𝐞̂́𝐮 𝐌𝐮𝐨̂́𝐧 𝐗𝐞𝐦 𝐀𝐥𝐥 𝐋𝐞̣̂𝐧𝐡 𝐍𝐡𝐞́ 𝐇𝐨𝐚̣̆𝐜 .𝐇𝐞𝐩𝐥 𝐍𝐞̂́𝐮 𝐌𝐮𝐨̂́𝐧 𝐗𝐞𝐦 𝐂𝐡𝐢 𝐓𝐢𝐞̂́𝐭 🌸\n→ 𝐍ế𝐮 𝐭𝐡ắ𝐜 𝐦ắ𝐜 𝐥𝐢ê𝐧 𝐡ệ 𝐫𝐢ê𝐧𝐠 𝐜𝐡𝐨 𝐚𝐝𝐦𝐢𝐧 để 𝐡𝐨̉𝐢 𝐡𝐨ặ𝐜 𝐝𝐮̀𝐧𝐠 .𝐜𝐚𝐥𝐥𝐚𝐝\n→ 𝐌𝐮ố𝐧 𝐜𝐡𝐨 𝐧𝐡𝐨́𝐦 𝐤𝐡𝐚́𝐜 𝐦ượ𝐧 𝐛𝐨𝐭 𝐩𝐡𝐚̉𝐢 𝐡𝐨̉𝐢 𝐲́ 𝐤𝐢ế𝐧 𝐚𝐝𝐦𝐢𝐧\n▱▱▱『 𝐀𝐝𝐦𝐢𝐧 』▱▱▱\n⋄ 𝐔𝐫𝐥 𝐅𝐁: https://www.facebook.com/lamvanthien206\n→ 𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝘂𝘀𝗶𝗻𝗴 𝗯𝗼𝘁 𝗩𝘁𝗵𝗶𝗲𝗻 🐻\n𝘾𝙝𝙪́𝙘 𝘼𝙣𝙝 𝙀𝙢 𝙑𝙪𝙞 𝙑𝙚̉ 𝙏𝙧𝙤𝙣𝙜 𝙌𝙪𝙖́ 𝙏𝙧𝙞̀𝙣𝙝 𝘿𝙪̀𝙣𝙜 𝘽𝙤𝙩 𝙉𝙝𝙚́ 💟`, attachment: fs.createReadStream(__dirname + "/cache/joinGif/random/join.mp4")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.mp4`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "𝐂𝐡𝐚̀𝐨 𝐌𝐮̛̀𝐧𝐠 𝐓𝐡𝐚̀𝐧𝐡 𝐕𝐢𝐞̂𝐧 𝐌𝐨̛́𝐢\n━━━━━━━━━━━━━━━━━━\n[🎊] → 𝗛𝗲𝗹𝗹𝗼 𝗘𝗺 𝗬𝗲̂𝘂 {name}\n[🐳] → 𝗖𝗵𝗮̀𝗼 𝗺𝘂̛̀𝗻𝗴 𝗲𝗺 {name}\n[👨‍👩‍👧‍👦] → Đ𝐚̃ 𝐓𝐨̛́𝐢 𝐕𝐨̛́𝐢 𝐍𝐡𝐨́𝐦 {threadName}\n[👤] → {type} 𝐋𝐚̀ 𝐂𝐮̣𝐜 𝐂𝐮̛𝐧𝐠 𝐓𝐡𝐮̛́ {soThanhVien} 𝐂𝐮̉𝐚 𝐁𝐨𝐱 \n[🌸] → 𝐇𝐚̃𝐲 𝐜𝐡𝐚̆𝐦 𝐜𝐡𝐢̉ 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 đ𝐞̂̉ 𝐤𝐡𝐨̂𝐧𝐠 𝐛𝐢̣ đ𝐚́ 𝐤𝐡𝐨̉𝐢 𝐧𝐡𝐨́𝐦 𝐧𝐡𝐞́\n[🍒] → 𝐍𝐡𝐨́𝐦 𝐭𝐨̛́ 𝐥𝐮𝐨̂𝐧 𝐜𝐡𝐚̀𝐨 đ𝐨́𝐧 𝐛𝐚̣𝐧 <3" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  '𝐂𝐚́𝐜 𝐁𝐚̣𝐧' : '𝐁𝐚̣𝐧')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "random"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "random", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
                    }