     'noprefix-control': 'no-noprefix' },
  form:
   { api_key: 'u1521429-e69780eb556948775b151917',
     format: 'json',
     type: '1',
     url: url,
     friendly_name: name } };
   /////////////////////////////////////////  //////Phần điều kiện và gửi tin nhắn//// ///////////////////////////////////////        
request(options, function (error, response, body) {
   if (error) return api.sendMessage(`Lỗi rồi huhu :((`, event.threadID, event.messageID );
   if(JSON.parse(body).stat == 'fail') return api.sendMessage({body:`===「 𝗨𝗣𝗧𝗜𝗠𝗘 𝗥𝗢𝗕𝗢𝗧 」===\n\n𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗯𝗼𝘁 𝗵𝗶𝗲̣̂𝗻 𝗼𝗻𝗹𝗶𝗻𝗲 𝘁𝗼̂̉𝗻𝗴 𝗰𝗼̣̂𝗻𝗴 ${hours} 𝗴𝗶𝗼̛̀ ${minutes} 𝗽𝗵𝘂́𝘁 ${seconds} 𝗴𝗶𝗮̂𝘆 👾\n──────────────\n[ 𝗘𝗥𝗥𝗢𝗥 ] - 𝗦𝗲𝗿𝘃𝗲𝗿 𝗻𝗮̀𝘆 𝗵𝗶𝗲̣̂𝗻 𝘁𝗼̂̀𝗻 𝘁𝗮̣𝗶 𝘁𝗿𝗲̂𝗻 𝗨𝗽𝘁𝗶𝗺𝗲 𝗥𝗼𝗯𝗼𝘁 𝗿𝗼̂̀𝗶 🌸\n🔗 𝗟𝗶𝗻𝗸: ${url}`, attachment: fs.createReadStream(__dirname + `/noprefix/upt.png`)}, event.threadID, event.messageID);
  if(JSON.parse(body).stat == 'success')
 return
api.sendMessage({body: `===「 𝗨𝗣𝗧𝗜𝗠𝗘 𝗥𝗢𝗕𝗢𝗧 」===\n\n𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗯𝗼𝘁 𝗵𝗶𝗲̣̂𝗻 𝗼𝗻𝗹𝗶𝗻𝗲 𝘁𝗼̂̉𝗻𝗴 𝗰𝗼̣̂𝗻𝗴 ${hours} 𝗴𝗶𝗼̛̀ ${minutes} 𝗽𝗵𝘂́𝘁 ${seconds} 𝗴𝗶𝗮̂𝘆 👾\n──────────────\n[ 𝗦𝗨𝗖𝗖𝗘𝗦𝗦 ] - 𝗧𝗮̣𝗼 𝘀𝗲𝗿𝘃𝗲𝗿 𝘁𝗿𝗲̂𝗻 𝗨𝗽𝘁𝗶𝗺𝗲 𝗥𝗼𝗯𝗼𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 🌸\n🔗 𝗟𝗶𝗻𝗸: ${url}`, attachment: fs.createReadStream(__dirname + `/noprefix/upt.png`)}, event.threadID, event.messageID );
});
                                                               }