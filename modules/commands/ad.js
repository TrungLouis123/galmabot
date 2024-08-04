module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "✨..✨",
  description: "Kiểm tra thông tin admin .",
  commandCategory: "Tiện ích",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
    var name = (await Users.getData(event.senderID)).name
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/OKXxwLZ.mp4", "https://i.imgur.com/GWX5Qbi.mp4", "https://i.imgur.com/OlF2VPU.mp4", "https://i.imgur.com/2SsnVSw.mp4", "https://i.imgur.com/ofRp8ab.mp4", "https://i.imgur.com/NmCvcaT.mp4", "https://i.imgur.com/kv7CqS1.mp4"];
  var callback = () => api.sendMessage({body:`Hello 👋\n→ Đây là cậu chủ của tôi 🤭\n        ʚThông Tin Adminɞ\n→ Admin name: Văn Thiện❤️\n→ Biệt Danh: vt🌸\n→ Cung Hoàng Đạo: Tự tìm nha😙\n→ Tính Cách: Dễ gần🥰\n→ Chiều cao :1m7😞\n→ Cân Nặng: 50kg🥲\n→ Sinh năm: 22/09/2006😂\n→ Instagram: vthien206\n→ Capcut: V.thien206\nLink facebook: https://www.facebook.com/lamvanthien206\nUID: 100073530616731\n🎉Chào đây là bot của Thiện có một số lưu ý sau\n🎉 Nếu bot ko hoạt động hay bị lỗi hãy liên hệ qua sdt hoặc nhắn tin mess để được liên hệ trực tiếp với mình\n🎉 Sử dụng bot không chửi bot vì nó cute lắm nhá,chửi thoải mái nếu như ý thức của bạn như con cặc và sẽ bị ban vĩnh viễn\n🎉 Ngựa ngựa bớt spam bot nha hư bot đấy\n🎉 Không report bot nha mụi ngừi\n▬▬ι═══════ﺤ Cảm ơn bạn đã sử dụng dịch vụ bot của mình,mong hãy làm đúng với lưu ý nhá:3\nChúc bạn ngày mới vui vẻ <3\n🌸🍒🌸🌺🍒🌺🌸🍒🌸\n`,attachment: fs.createReadStream(__dirname + "/cache/ad.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ad.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/ad.mp4")).on("close",() => callback());
   };
   //tự edit body nhá ...=thay thông tin 
   //Sen code lại th nên bớt soi 
   //cách lấy ảnh gắn ở trên 
   //B1 Truy cập https://imgur.com chọn newpost
   //B2 Gắn ảnh từ máy tính lên đó hay điện thoại cx đc tùyq   //B3 Copy link như trên rồi thêm .jpg vào là done 
   //Chúc thành công
                                               