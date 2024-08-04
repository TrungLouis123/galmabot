module.exports.config = {
	name: "ảnh",
	version: "1.0.3",
	hasPermssion: 0,
	credits: "BLACK",
	description: "Xem ảnh réply",
	commandCategory: "random-img",
	cooldowns: 5,
	dependencies: {
		axios: ""
	}
}, module.exports.run = async function({
	event: e,
	api: a,
	args: n
}) {
	if (!n[0]) return a.sendMessage("===[ 𝗗𝗔𝗡𝗛 𝗦𝗔́𝗖𝗛 𝗔̉𝗡𝗛 ]===\n━━━━━━━━━━━━━━━━━━\n\n𝟭. 𝗔̉𝗻𝗵 alice 💞 \n𝟮. 𝗔̉𝗻𝗵 cosplay 💕\n𝟯. 𝗔̉𝗻𝗵 anime 🍑\n𝟰. 𝗔̉𝗻𝗵 loli 😽\n𝟱. 𝗔̉𝗻𝗵 gái 🌚\n𝟲. 𝗔̉𝗻𝗵 meme 😻\n𝟳. 𝗔̉𝗻𝗵 trai 🔥\n𝟴. 𝗔̉𝗻𝗵 gái Trung 🌸\n𝟵. 𝗔̉𝗻𝗵 genshin 🎀\n𝟭𝟬. 𝗔̉𝗻𝗵 Nền 💸\n𝟭𝟭. 𝗔̉𝗻𝗵 cosplaygenshin 💊\n𝟭𝟮. 𝗔̉𝗻𝗵 Độ Mixi 🌸\n𝟭𝟯. 𝗔̉𝗻𝗵 Son goku 📌\n𝟭𝟰. 𝗔̉𝗻𝗵 Idol 🌻\n━━━━━━━━━━━━━━━━━━\n=== [ 𝗗𝗔𝗡𝗛 𝗦𝗔́𝗖𝗛 𝗩𝗜𝗗𝗘𝗢 ] ===\n𝟭5. 𝗩𝗶𝗱𝗲𝗼 𝗔𝗻𝗶𝗺𝗲 📺\n𝟭6. 𝗩𝗶𝗱𝗲𝗼 tokyorevengers 🐰\n𝟭7. 𝗩𝗶𝗱𝗲𝗼 tiktok 🎊\n𝟭8. 𝗩𝗶𝗱𝗲𝗼 doraemon 🎆\n19. Video chill 🧸\n𝟮0. Video gái 🌟\n𝟮1. 𝗠𝘂𝘀𝗶𝗰 𝗰𝗵𝗶𝗹𝗹 🥀\n\n→ 𝗥𝗲𝗽𝗹𝘆 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻 𝗡𝗮̀𝘆 𝗩𝗮̀ 𝗖𝗵𝗼̣𝗻 𝗧𝗵𝗲𝗼 𝗦𝗧𝗧 𝗔̉𝗻𝗵 𝗛𝗼𝗮̣̆𝗰 𝗩𝗶𝗱𝗲𝗼 𝗕𝗮̣𝗻 𝗠𝘂𝗼̂́𝗻 𝗫𝗲𝗺 𝗡𝗵𝗲́ 🐧", e.threadID, ((a, n) => {
		global.client.handleReply.push({
			name: this.config.name,
			messageID: n.messageID,
			author: e.senderID,
			type: "create"
		})
	}), e.messageID)
}, module.exports.handleReply = async ({
	api: e,
	event: a,
	client: n,
	handleReply: t,
	Currencies: s,
	Users: i,
	Threads: o
}) => {
	var { p, h } = linkanh();

	if ("create" === t.type) {
		const n = (await p.get(h)).data.url;
		let t = (await p.get(n, {
			responseType: "stream"
		})).data;
		return e.sendMessage({
			body: "\n==== [ 𝗧𝗵𝗮̀𝗻𝗵 𝗖𝗼̂𝗻𝗴 ] ====\n\n𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘆𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝗻𝗲̀ 🐧️",
			attachment: t
		}, a.threadID, a.messageID) 
	}

function linkanh() {
const p = require("axios");
if ("1" == a.body)
            var h = "https://caochungdat.me/docs/images/alice";
        else 
if ("2" == a.body)
        var   h = "https://caochungdat.me/docs/images/cosplay";
        else 
if ("3" == a.body)
        var  h = "https://manhh.manh10.repl.co/image/anime";
        else 
if ("4" == a.body)
        var h = "https://caochungdat.me/docs/images/loli";
if ("5" == a.body)
         var  h = "https://caochungdat.me/docs/images/gai";
if ("6" == a.body)
        var h = "https://caochungdat.me/docs/images/meme";
if ("7" == a.body)
        var h = "https://caochungdat.me/docs/images/trai";
if ("8" == a.body)
        var h = "https://caochungdat.me/docs/images/gaitrung";
if ("9" == a.body)
        var h = "https://caochungdat.me/docs/images/genshin";      
  if ("10" == a.body)
        var h = "https://caochungdat.me/docs/images/canh";
if ("11" == a.body)
        var h = "https://caochungdat.me/docs/images/cosplaygenshin";
if ("12" == a.body)
        var h = "https://caochungdat.me/docs/images/domixi";
if ("13" == a.body)
        var h = "https://caochungdat.me/docs/images/goku";
if ("14" == a.body)
        var h = "https://caochungdat.me/docs/images/idol";

///////////////////////////////////////
///////////////apivideo////////////////
///////////////////////////////////////
if ("15" == a.body)
        var h = "http://api.apibot.repl.co/vdanime";
  if ("16" == a.body)
        var h = "https://apivideo.tinl9.repl.co/tokyorevengers/?apikey=0703";
  if ("17" == a.body)
        var h = "https://apivideo.tinl9.repl.co/tiktok/?apikey=0703";
if ("18" == a.body)
        var h = "api-anime.vant220906.repl.co/video/doraemon";
if ("19" == a.body)
        var h = "http://api.apibot.repl.co/vdmusic";
if ("20" == a.body)
        var h = "http://api.apibot.repl.co/vdgai";
if ("21" == a.body)
        var h = "http://api.apibot.repl.co/vdmusic";
  


        return { p, h };
    }
};
