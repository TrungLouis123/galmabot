module.exports.config = {
	name: "reload",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "thanh hiền procode lỏ",//cấm thay credit, mod thêm thì cap phía sau
	description: "Khởi động lại Bot",
	commandCategory: "Tiện ích",
	usages: "reload + time",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const { sendMessage: HakiraSEND } = api;
  const timeStart = Date.now();
  const pidusage = await global.nodemodule["pidusage"](process.pid);
 const permission = ["100073530616731","100029198175178"]; //uid cho đối tượng sử dụng lệnh reload nếu thêm hãy lm như thanh hiền nha. thêm dấu , sau "" rồi tiếp tục thêm "" gắn uid vào là ok
             if (!permission.includes(event.senderID))
             return api.sendMessage("→ 𝗠𝘂𝗼̂́𝗻 𝗿𝗲𝗹𝗼𝗮𝗱 𝘀𝗮𝗼 𝘂̛̀ 𝗯𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 đ𝘂̉ 𝘁𝘂𝗼̂̉𝗶 😏", event.threadID, event.messageID);
	const { threadID, messageID } = event;
  var thanh_hiền = moment.tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY || HH:mm:ss');
	var time = args.join(" ");
	var rstime = "9"; //time bot chuẩn bị reload
	if (!time) rstime = "10"; //time bot bắt đầu reload
	else rstime = time;
	api.sendMessage({body: `🤖==== [ 𝗥𝗘𝗟𝝤𝗔𝗗 ] ====🤖\n━━━━━━━━━━━━━━━━\n[🧑‍💻] → 𝗛𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘀𝗲̃ 𝗿𝗲𝗹𝗼𝗮𝗱 𝗯𝗼𝘁 𝘀𝗮𝘂 ${rstime} 𝗴𝗶𝗮̂𝘆 𝗻𝘂̛̃𝗮!\n[⚙️] → 𝗖𝗣𝗨: ${pidusage.cpu.toFixed(1)}%\n[🔗] → 𝗣𝗶𝗻𝗴: ${Date.now() - timeStart}𝗺𝘀`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('http://api.apibot.repl.co/gai')).data.data,
method: "GET",
responseType: "stream"
})).data
},threadID);
	return setTimeout(() => { api.sendMessage(`[⏰️] → 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${thanh_hiền}\n[💻] → 𝗕𝗼𝘁 𝗱𝗮̃ 𝘁𝗶𝗲̂́𝗻 𝗵𝗮̀𝗻𝗵 𝗿𝗲𝗹𝗼𝗮𝗱 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴\n[⚙️] → 𝗖𝗣𝗨: ${pidusage.cpu.toFixed(1)}%\n[🔗] → 𝗣𝗶𝗻𝗴: ${Date.now() - timeStart}𝗺𝙨`,event.threadID,() => process.exit(1) )},	rstime * 1000);
}
