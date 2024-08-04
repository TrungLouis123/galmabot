const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot3",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mirai",
  description: "goibot",
  commandCategory: "Không xài lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  var tl = ["𝙘𝙝𝙖̀𝙤 𝙗𝙖̣𝙣 𝙩𝙤̂𝙞 𝙡𝙖̀ 𝙗𝙤𝙩 𝙘𝙪̉𝙖 𝗩𝗮̆𝗻 𝗧𝗵𝗶𝗲̣̂𝗻","𝗞𝗲̂𝘂 𝗯𝗼𝘁 𝗰𝗼́ 𝗴𝗶̀ 𝗸𝗵𝗼̂𝗻𝗴? 𝗛𝗮̃𝘆 𝘅𝗲𝗺 𝗳𝗯 𝗰𝘂̉𝗮 𝗮𝗱𝗺𝗶𝗻 𝗼̛̉ đ𝗮̂𝘆 𝗻𝗵𝗲́:\n▱▱▱『 𝐀𝐝𝐦𝐢𝐧 』▱▱▱\nhttps://www.facebook.com/lamvanthien206"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "bot ngu")) {
    return api.sendMessage("câm", threadID);
  };

  if ((event.body.toLowerCase() == "bot out đi")) {
    return api.sendMessage("đéo 😏", threadID);
  };

   if ((event.body.toLowerCase() == "bot cút")) {
    return api.sendMessage("Cút con cu, mày cút trước đi😠", threadID);
  };

  if ((event.body.toLowerCase() == "bot lon")) {
    return api.sendMessage("Tao là bot đéo có lồn hay cặc gì nhé 😏", threadID);
  };

  if ((event.body.toLowerCase() == "bot óc chó")) {
    return api.sendMessage("Chó nào vừa nói xấu tao đấy, muốn chết hả😠", threadID);
  };

  if ((event.body.toLowerCase() == "bot chó") || (event.body.toLowerCase() == "bot chó")) {
    return api.sendMessage("Chó nào vừa nói xấu tao đấy, muốn chết hả 😠", threadID);
  };

  if ((event.body.toLowerCase() == "ôi") || (event.body.toLowerCase() == "ôi")) {
    return api.sendMessage("ôi trời đất quỷ thần ơiiiii:)))", threadID);
  };

  if ((event.body.toLowerCase() == "ối") || (event.body.toLowerCase() == "ối")) {
    return api.sendMessage("Ối cái gì, đi ra kia chơi", threadID);
  };

  if ((event.body.toLowerCase() == "mô phật") || (event.body.toLowerCase() == "nam mô")) {
    return api.sendMessage("Chúa phù hộ em 😇", threadID);
  };

  if ((event.body.toLowerCase() == "ỏ") || (event.body.toLowerCase() == "Ỏ")) {
    return api.sendMessage("ỏooo? yêu bot ko mà ỏooo:333", threadID);
  };

  if ((event.body.toLowerCase() == "ừm") || (event.body.toLowerCase() == "um")) {
    return api.sendMessage("Ừm cái gì, dạ đi bot thương ><", threadID);
  };

  if ((event.body.toLowerCase() == "xin") || (event.body.toLowerCase() == "Xin")) {
    return api.sendMessage("️Xin đéo gì. Ở đời làm gì có chuyện free.", threadID);
  };

  if ((event.body.toLowerCase() == "ừ") || (event.body.toLowerCase() == "u")) {
    return api.sendMessage("Ừ à :)? biết dạ ko? Láo à :)))", threadID);
  };

  if ((event.body.toLowerCase() == "ừa") || (event.body.toLowerCase() == "ua")) {
    return api.sendMessage("Ừa à :)? biết dạ ko? Láo à :)))", threadID);
  };

  if ((event.body.toLowerCase() == "uk") || (event.body.toLowerCase() == "uk")) {
    return api.sendMessage("Ừ à :)? biết dạ ko? Láo à :)))", threadID);
  };

  if ((event.body.toLowerCase() == "dạ") || (event.body.toLowerCase() == "da")) {
    return api.sendMessage("Ngoan đấy tặng cậu 10 anh người yêu đẹp trai tâm lý =)))", threadID);
  };

  if ((event.body.toLowerCase() == "yêu") || (event.body.toLowerCase() == "yeu")) {
    return api.sendMessage("Cơm tró con cá, yêu đương cái gì, tiền, xe, nhà thì đéo có mà yêu với đương, lo học hành và đi làm kiếm tiền đê, yêu sau", threadID);
  };

  if ((event.body.toLowerCase() == "đmm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("Học ăn học nói học đâu cái thói ăn nói xà lơ dị :))", threadID);
  };

  if ((event.body.toLowerCase() == "đcm") || (event.body.toLowerCase() == "dm bot")) {
    return api.sendMessage("Bất hiếu cha sinh mẹ đẻ mà mày nói thế là hỏng người rồi", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cmm") || (event.body.toLowerCase() == "chui cmm")) {
    return api.sendMessage("Bất hiếu cha sinh mẹ đẻ mà mày nói thế là hỏng người rồi", threadID);
  };

  if ((event.body.toLowerCase() == "cmn") || (event.body.toLowerCase() == "cc 3 m")) {
    return api.sendMessage("Chửi cc gì thích đấm nhau ko mà sồn sồn lên thế :)", threadID);
  };

  if ((event.body.toLowerCase() == "địt") || (event.body.toLowerCase() == "dit")) {
    return api.sendMessage("Cu đã nhỏ mà cứ đòi địt :))", threadID);
  };

  if ((event.body.toLowerCase() == "địt cc") || (event.body.toLowerCase() == "dit cc")) {
    return api.sendMessage("À mày thích địt à cởi quần ra địt lẹ nào =)))", threadID);
  };

  if ((event.body.toLowerCase() == "°{=°") || (event.body.toLowerCase() == "√^^¢={}}}")) {
    return api.sendMessage("cậu ấy tuy ko đẹp trai hay giỏi gì nhưng được cái hài hước và luôn mong đạt được mục tiêu cậu ấy muốn:3 ", threadID);
  };

  if ((event.body.toLowerCase() == "ok") || (event.body.toLowerCase() == "Ok")) {
    return api.sendMessage("OK là tên của một loại bao cao su.", threadID);
  };

  if ((event.body.toLowerCase() == "§×××÷×") || (event.body.toLowerCase() == "π÷√π÷÷÷")) {
    return api.sendMessage("cậu ấy tuy ko đẹp trai hay giỏi gì nhưng được cái hài hước và luôn mong đạt được mục tiêu cậu ấy muốn <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "@Văn Thiện") || (event.body.toLowerCase() == "Văn Thiện")) {
    return api.sendMessage("Ai kêu chủ tao đấy, mà làm ơn đừng tag cậu ấy mà hãy liên hệ qua Fb: https://www.facebook.com/lamvanthien206", threadID);
  };

  if ((event.body.toLowerCase() == "bot ơi") ||  (event.body.toLowerCase() == "bot ơi")) {
    return api.sendMessage("Dạ gọi bot có gì ko ạ, bot còn phải phục vụ các box khác nữa =))", threadID);
  };

  if ((event.body.toLowerCase() == "yêu bot") || (event.body.toLowerCase() == "yeu bot")) {
    return api.sendMessage("Hmm... Bot ngại lắm thôi yêu admin của bot nhé :))", threadID);
  };

   if ((event.body.toLowerCase() == "yêu anh") || (event.body.toLowerCase() == "yeu anh")) {
    return api.sendMessage("Anh cũng yêu em <3", threadID);
  };

  if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
    return api.sendMessage("icon của sự thiểu năng :))", threadID);
  };

  if ((event.body.toLowerCase() == "§") || (event.body.toLowerCase() == "£")) {
    return api.sendMessage("Hello cậu nhaaa, chúc cậu có một ngày tốt lành, vui vẻ và đầy hạnh phúc 💞", threadID);
  };

  if ((event.body.toLowerCase() == "∆") || (event.body.toLowerCase() == "∆")) {
    return api.sendMessage("Hello cậu nhaaa, chúc cậu có một ngày tốt lành, vui vẻ và đầy hạnh phúc 💞", threadID);
  };

  if ((event.body.toLowerCase() == "∆") || (event.body.toLowerCase() == "∆")) {
    return api.sendMessage("Hello cậu nhaaa, chúc cậu có một ngày tốt lành, vui vẻ và đầy hạnh phúc 💞", threadID);
  };

  if ((event.body.toLowerCase() == "∆") || (event.body.toLowerCase() == "∆")) {
    return api.sendMessage("Hello cậu nhaaa, chúc cậu có một ngày tốt lành, vui vẻ và đầy hạnh phúc 💞", threadID);
  };

  if ((event.body.toLowerCase() == "§") || (event.body.toLowerCase() == "§")) {
    return api.sendMessage("Hello cậu nhaaa, chúc cậu có một ngày tốt lành, vui vẻ và đầy hạnh phúc 💞", threadID);
  };

 if ((event.body.toLowerCase() == "§") || (event.body.toLowerCase() == "§§")) {
    return api.sendMessage("Hello cậu nhaaa, chúc cậu có một ngày tốt lành, vui vẻ và đầy hạnh phúc 💞", threadID);
  };

  if ((event.body.toLowerCase() == "×§") || (event.body.toLowerCase() == "∆§∆")) {
    return api.sendMessage("Hello cậu nhaaa, chúc cậu có một ngày tốt lành, vui vẻ và đầy hạnh phúc 💞", threadID);
  };

  if ((event.body.toLowerCase() == "÷π") || (event.body.toLowerCase() == "√÷√")) {
    return api.sendMessage("Hello cậu nhaaa, chúc cậu buổi tối tốt lành, vui vẻ và đầy hạnh phúc 💞", threadID);
  };

  if ((event.body.toLowerCase() == "√÷π") || (event.body.toLowerCase() == "÷×π")) {
    return api.sendMessage("Hello cậu nhaaa, chúc cậu có một ngày tốt lành, vui vẻ và đầy hạnh phúc 💞", threadID);
  };

  if ((event.body.toLowerCase() == "√××√") || (event.body.toLowerCase() == "§√×•")) {
    return api.sendMessage("Hello cậu nhaaa, chúc cậu có một ngày tốt lành, vui vẻ và đầy hạnh phúc 💞", threadID);
  };

  if ((event.body.toLowerCase() == "§§§") || (event.body.toLowerCase() == "π÷×§∆")) {
    return api.sendMessage("Hello cậu nhaaa, chúc cậu có một ngày tốt lành, vui vẻ và đầy hạnh phúc 💞", threadID);
  };

  if ((event.body.toLowerCase() == "÷×π√") || (event.body.toLowerCase() == "÷π×√×")) {
    return api.sendMessage("Hí chào bạn cuti s1tg<3", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cc") || (event.body.toLowerCase() == "chui cc")) {
    return api.sendMessage("️Mất dạy quá đi mày ><, cần tao chỉnh đốn mày lại ko :((", threadID);
  };

  if ((event.body.toLowerCase() == "hentai") || (event.body.toLowerCase() == "hentai")) {
    return api.sendMessage("Hả 😋, em thích coi lắm", threadID);
  };

  if ((event.body.toLowerCase() == "cc cút") || (event.body.toLowerCase() == "cc cút")) {
    return api.sendMessage("Sao mày ko cút? Mà bảo tao =]] mệt  ghê :>", threadID);
  };

  if ((event.body.toLowerCase() == "vãi") || (event.body.toLowerCase() == "vai")) {
    return api.sendMessage("Vãi lồn đó...😆", threadID);
  };

  if ((event.body.toLowerCase() == "Alo") || (event.body.toLowerCase() == "alo")) {
    return api.sendMessage("Dạ !! Bot nghe nè 🧸", threadID);
  };

  if ((event.body.toLowerCase() == "Aloo") || (event.body.toLowerCase() == "aloo")) {
    return api.sendMessage("Dạ bot nghe nè <3", threadID);
  };

  if ((event.body.toLowerCase() == "link") || (event.body.toLowerCase() == "link")) {
    return api.sendMessage("Link bao nhiêu phút á cho bot xem với nào 🤤", threadID);
  };

  if ((event.body.toLowerCase() == "cứu") || (event.body.toLowerCase() == "cuu")) {
    return api.sendMessage("Cứu cc ngu thì chết, khôn thì sống <3", threadID);
  };

  if ((event.body.toLowerCase() == "gây war à") || (event.body.toLowerCase() == "gay war a")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };

  if ((event.body.toLowerCase() == "đi gây war") || (event.body.toLowerCase() == "di gay war")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };

  if ((event.body.toLowerCase() == "thích gây war à") || (event.body.toLowerCase() == "thich gay war a")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };  

  if ((event.body.toLowerCase() == "hát đi m.n") || (event.body.toLowerCase() == "hat di mng")) {
    return api.sendMessage("Thôi để bot hát trước cho, Tình yêu đâu ai biết trước điều gì\nNay hạnh phúc mai thì biệt ly\nĐậm sâu bên nhau như bước tương dại\nCũng đổ vỡ sau hai từ chia tay\n Rồi anh đi theo người mới\nNgười ta cũng đã bỏ rơi\nĐể hôm này anh phải khóc\nĐòi em chút được không\nĐừng khóc anh ơi đừng buồn\nGiọt nước mắt ấy đừng tuôn\nKể em nghe đi xem nào\nNgười ta đã bỏ anh sao\nHọ đâu thương anh thật lòng\nMà sao anh vẫn còn đợi mong\nCòn em yêu anh chân thành\nTại sao anh nỡ bỏ rơi em", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi") || (event.body.toLowerCase() == "hat di")) {
    return api.sendMessage("Thôi để bot hát trước cho, Tình yêu đâu ai biết trước điều gì\nNay hạnh phúc mai thì biệt ly\nĐậm sâu bên nhau như bước tương dại\nCũng đổ vỡ sau hai từ chia tay\n Rồi anh đi theo người mới\nNgười ta cũng đã bỏ rơi\nĐể hôm này anh phải khóc\nĐòi em chút được không\nĐừng khóc anh ơi đừng buồn\nGiọt nước mắt ấy đừng tuôn\nKể em nghe đi xem nào\nNgười ta đã bỏ anh sao\nHọ đâu thương anh thật lòng\nMà sao anh vẫn còn đợi mong\nCòn em yêu anh chân thành\nTại sao anh nỡ bỏ rơi em", threadID);
  };  

  if ((event.body.toLowerCase() == "bot hát đi") || (event.body.toLowerCase() == "bot hat di")) {
    return api.sendMessage("Thôi để bot hát trước cho, Tình yêu đâu ai biết trước điều gì\nNay hạnh phúc mai thì biệt ly\nĐậm sâu bên nhau như bước tương dại\nCũng đổ vỡ sau hai từ chia tay\n Rồi anh đi theo người mới\nNgười ta cũng đã bỏ rơi\nĐể hôm này anh phải khóc\nĐòi em chút được không\nĐừng khóc anh ơi đừng buồn\nGiọt nước mắt ấy đừng tuôn\nKể em nghe đi xem nào\nNgười ta đã bỏ anh sao\nHọ đâu thương anh thật lòng\nMà sao anh vẫn còn đợi mong\nCòn em yêu anh chân thành\nTại sao anh nỡ bỏ rơi em", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi nào") || (event.body.toLowerCase() == "hát đi nào")) {
    return api.sendMessage("Thôi để bot hát trước cho, Tình yêu đâu ai biết trước điều gì\nNay hạnh phúc mai thì biệt ly\nĐậm sâu bên nhau như bước tương dại\nCũng đổ vỡ sau hai từ chia tay\n Rồi anh đi theo người mới\nNgười ta cũng đã bỏ rơi\nĐể hôm này anh phải khóc\nĐòi em chút được không\nĐừng khóc anh ơi đừng buồn\nGiọt nước mắt ấy đừng tuôn\nKể em nghe đi xem nào\nNgười ta đã bỏ anh sao\nHọ đâu thương anh thật lòng\nMà sao anh vẫn còn đợi mong\nCòn em yêu anh chân thành\nTại sao anh nỡ bỏ rơi em", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi bot") || (event.body.toLowerCase() == "hat di bot")) {
    return api.sendMessage("Thôi để bot hát trước cho, Tình yêu đâu ai biết trước điều gì\nNay hạnh phúc mai thì biệt ly\nĐậm sâu bên nhau như bước tương dại\nCũng đổ vỡ sau hai từ chia tay\n Rồi anh đi theo người mới\nNgười ta cũng đã bỏ rơi\nĐể hôm này anh phải khóc\nĐòi em chút được không\nĐừng khóc anh ơi đừng buồn\nGiọt nước mắt ấy đừng tuôn\nKể em nghe đi xem nào\nNgười ta đã bỏ anh sao\nHọ đâu thương anh thật lòng\nMà sao anh vẫn còn đợi mong\nCòn em yêu anh chân thành\nTại sao anh nỡ bỏ rơi em", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mn") || (event.body.toLowerCase() == "tt đi mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi nào mn") || (event.body.toLowerCase() == "tt di nao mng")) {
    return api.sendMessage("️kick hết chúng nó đi bạn :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt mn ơi") || (event.body.toLowerCase() == "tt mng oi")) {
    return api.sendMessage("️lập box ra để cho chúng mày vào xem chùa à :))))", threadID);
  };

  if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "m.n nnmđ")) {
    return api.sendMessage("️Ngủ ngon ạ <3 Chúc mọi người mơ siêu đẹp <3", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai v bot") || (event.body.toLowerCase() == "admin là ai v bot")) {
    return api.sendMessage("️Admin tớ là Thiện cuti, có gì dùng lệnh ad hoặc adm để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai vậy bot") || (event.body.toLowerCase() == "admin m la ai vậy bot")) {
    return api.sendMessage("️Admin tớ là Thiện cuti, có gì dùng lệnh ad hoặc adm để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mn") || (event.body.toLowerCase() == "tt đi mn")) {
    return api.sendMessage("️ra tt lẹ, ko là bị qtv đá lên cành cây ổi đó :))))", threadID);
  };

  if ((event.body.toLowerCase() == "flop quá") || (event.body.toLowerCase() == "flop qua")) {
    return api.sendMessage("️Flop quá các con cợ ơi,ngoi lên tt vs ck nè:))))", threadID);
  };

  if ((event.body.toLowerCase() == "con cu") || (event.body.toLowerCase() == "con cặc")) {
    return api.sendMessage("️Đờ mờ móc ra bố check hàng :)))", threadID);
  };

  if ((event.body.toLowerCase() == "cái lòn") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️Mày bẩn vừa thôi con lồn :)))", threadID);
  };

  if ((event.body.toLowerCase() == "clon") || (event.body.toLowerCase() == "lòn")) {
    return api.sendMessage("️Mày bẩn vừa thôi con lồn :)))", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
    return api.sendMessage("️Chửi gì đấy con dog :) bố mmày nhịn mày lâu lắm rồi đấy nhá", threadID);
  };

  if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
    return api.sendMessage("️Chửi gì đấy con dog :) bố mmày nhịn mày lâu lắm rồi đấy nhá", threadID);
  };

  if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
    return api.sendMessage("️Chửi gì đấy con dog :) bố mmày nhịn mày lâu lắm rồi đấy nhá", threadID);
  };

  if ((event.body.toLowerCase() == "cặc") || (event.body.toLowerCase() == "cặc")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi, tối ngày cứ cu cặc 😠", threadID);
  };

  if ((event.body.toLowerCase() == "ông thiện") || (event.body.toLowerCase() == "ông Thiện")) {
    return api.sendMessage("️Kêu chủ của tôi có gì hong óooo :))?", threadID);
  };

  if ((event.body.toLowerCase() == "a thiện") || (event.body.toLowerCase() == "a Thiện")) {
    return api.sendMessage("️Sao, nói gì admin tớ cái gì đóooo??", threadID);
  };

  if ((event.body.toLowerCase() == "bot dthw quá") || (event.body.toLowerCase() == "bot dthw qua")) {
    return api.sendMessage("️dạ quá khen ạ hihi :>", threadID);
  };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "haha")) {
    return api.sendMessage("️Haha dui quá ha, cười địt bủm bủm :))", threadID);
  };

  if ((event.body.toLowerCase() == "kkk") || (event.body.toLowerCase() == "kkk")) {
    return api.sendMessage("️Haha dui quá dui rồi, cười ỉa =)))", threadID);
  };

  if ((event.body.toLowerCase() == "con cặc") || (event.body.toLowerCase() == "con cặc")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi mà cứ để tớ nhắc :)))", threadID);
  };

  if ((event.body.toLowerCase() == "cái lồn") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "lồn") || (event.body.toLowerCase() == "lồn")) {
    return api.sendMessage("️Bớt chửi thề cho nên người đi bạn êi :))) ko tao vả chetmemay giờ", threadID);
  };

  if ((event.body.toLowerCase() == "đm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để người khác nhắc :<", threadID);
  };

  if ((event.body.toLowerCase() == "đm bot") || (event.body.toLowerCase() == "dm bot")) {
    return api.sendMessage("️Chửi cc gì đấy sủa lại bố mày nghe nào :) nít ranh mà cứ thích sồn :)", threadID);
  };

  if ((event.body.toLowerCase() == "lozz") || (event.body.toLowerCase() == "lozz")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "clmm") || (event.body.toLowerCase() == "clmm")) {
    return api.sendMessage("️Bớt chửi thề cho nên người đi bạn êi :))) ko tao vả chetmemay giờ", threadID);
  };

  if ((event.body.toLowerCase() == "ko ai thương t hết") || (event.body.toLowerCase() == "ko ai thuong t het")) {
    return api.sendMessage("️Thôi ngoan nào bot thương bạn mà <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu em không") || (event.body.toLowerCase() == "bot yeu em khong")) {
    return api.sendMessage("Hi, Bot yêu em hơn cả ny em cơ, yêu bot đi <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu admin bot không") || (event.body.toLowerCase() == "bot co yeu admin bot khong")) {
    return api.sendMessage("Có, yêu anh ấy nhất đừng hòng cướp của tôi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có người yêu chưa") || (event.body.toLowerCase() == "bot co nguoi yeu chua")) {
    return api.sendMessage("Rồi ạ, là cậu đấy <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot im đi") || (event.body.toLowerCase() == "bot im di")) {
    return api.sendMessage("Im cc :))) m bớt sủa lại hộ tao, nứng hay gì bảo t im :>>", threadID);
  };

  if ((event.body.toLowerCase() == "bot cút đi") || (event.body.toLowerCase() == "bot cut di")) {
    return api.sendMessage("Mày cút rồi bố mày cút, ko khiến mày lên tiếng :))))", threadID);
  };

  if ((event.body.toLowerCase() == "bot chửi cái lon gì") || (event.body.toLowerCase() == "bot chui cai lon gi")) {
    return api.sendMessage("Chửi mày đấy, nhục vãi hahaha :>>, còn hỏi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có buồn ko") || (event.body.toLowerCase() == "bot co buon ko")) {
    return api.sendMessage("Có mọi người sao bé buồn đc <3 yêu lắm <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu t ko") || (event.body.toLowerCase() == "bot co yeu t ko")) {
    return api.sendMessage("Dạ có yêu cậu và mọi người nhiều lắm", threadID);
  };

  if ((event.body.toLowerCase() == "bot đi ngủ đi") || (event.body.toLowerCase() == "bot di ngu di")) {
    return api.sendMessage("Tớ là bot, cậu là người nên cần đi ngủ nè <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot ăn cơm chưa") || (event.body.toLowerCase() == "bot an com chua")) {
    return api.sendMessage("Mình nhìn cậu ăn là thấy no rồi <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương tui ko") || (event.body.toLowerCase() == "bot co thuong tui ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương t ko") || (event.body.toLowerCase() == "bot co thuong t ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có link fb của admin ko") || (event.body.toLowerCase() == "bot co link fb của admin ko")) {
    return api.sendMessage("Dĩ nhiên rồi có gì liên hệ anh ấy nha <3\nLink fb nè: https://www.facebook.com/lamvanthien206", threadID);
  };

  if ((event.body.toLowerCase() == "bot làm thơ đi") ||  (event.body.toLowerCase() == "bot lam tho di")) {
    return api.sendMessage("Yêu cậu như một cực hình\nCậu mà có bồ trước tớ, cậu ăn cứt", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot lon") ||  (event.body.toLowerCase() == "clmm bot lon")) {
    return api.sendMessage("Mày chửi gì đấy nói rõ lên bố mày nghe lại xem nào :))", threadID);
  };

  if ((event.body.toLowerCase() == "cc") ||  (event.body.toLowerCase() == "cc")) {
    return api.sendMessage("À ý mày bảo mày là chó á hả sủa đi tao nghe xem :)", threadID);
  };
  if ((event.body.toLowerCase() == ":))") ||  (event.body.toLowerCase() == ":))")) {
    return api.sendMessage("bỏ cái icon đó đi, sao cậu không yêu bot thay vì thả icon đó 😆", threadID);
  };
  if ((event.body.toLowerCase() == "🙂") ||  (event.body.toLowerCase() == "🙂")) {
    return api.sendMessage("icon của sự thiểu năng", threadID);
  };
  if ((event.body.toLowerCase() == "😆") ||  (event.body.toLowerCase() == "😆")) {
    return api.sendMessage("cười cái cho đời nó tươi nào các bạn 😆", threadID);
  };
  if ((event.body.toLowerCase() == "😂") ||  (event.body.toLowerCase() == "😂")) {
    return api.sendMessage("cười gì ghê quá à", threadID);
  };
  if ((event.body.toLowerCase() == "🤣") ||  (event.body.toLowerCase() == "🤣")) {
    return api.sendMessage("cười chảy hết nước mắt nước mũi rồi kìa lêu lêu 😆", threadID);
  };
  if ((event.body.toLowerCase() == "😡") ||  (event.body.toLowerCase() == "😡")) {
    return api.sendMessage("mày thích phẫn nộ ko đá bay khỏi nhóm giờ", threadID);
  };
  if ((event.body.toLowerCase() == "🥺") ||  (event.body.toLowerCase() == "🥺")) {
    return api.sendMessage("sao dọ, thả icon thế chắc đang buồn lắm kể bot nghe đi", threadID);
  };
  if ((event.body.toLowerCase() == "vt là ai") ||  (event.body.toLowerCase() == "văn thiện là ai")) {
    return api.sendMessage("vt là cậu chủ của bot, có tên là Văn Thiện và rất cuti, dễ gần, thân thiện hãy liên hệ với anh ấy qua facebook nhé: https://www.facebook.com/lamvanthien206", threadID);
  };
  if ((event.body.toLowerCase() == "😭") ||  (event.body.toLowerCase() == "😭")) {
    return api.sendMessage("sao khóc thế kể bot nghe xem có chuyện gì ☺️", threadID);
  };
  if ((event.body.toLowerCase() == "😥") ||  (event.body.toLowerCase() == "😥")) {
    return api.sendMessage("đừng buồn nữa bot thương", threadID);
  };
  if ((event.body.toLowerCase() == "😢") ||  (event.body.toLowerCase() == "😢")) {
    return api.sendMessage("thôi đừng buồn nữa có bot đây rồi", threadID);
  };
  if ((event.body.toLowerCase() == "😔") ||  (event.body.toLowerCase() == "😔")) {
    return api.sendMessage("cậu đang buồn chuyện gì sao nói bot nghe đi", threadID);
  };
  if ((event.body.toLowerCase() == "❤️") ||  (event.body.toLowerCase() == "❤️")) {
    return api.sendMessage("cậu thả tim cho bot sao, đây bot thả tim cho bạn nè ❤️❤️❤️", threadID);
  };
  if ((event.body.toLowerCase() == "☺️") ||  (event.body.toLowerCase() == "☺️")) {
    return api.sendMessage("icon của sự hạnh phúc 😆", threadID);
  };
  if ((event.body.toLowerCase() == "😠") ||  (event.body.toLowerCase() == "😠")) {
    return api.sendMessage("phẫn nộ cái gì biến cút", threadID);
  };
  if ((event.body.toLowerCase() == "🥰") ||  (event.body.toLowerCase() == "🥰🥰")) {
    return api.sendMessage("xin chào bạn tôi là bot của thiện", threadID);
  };
  if ((event.body.toLowerCase() == "✋") ||  (event.body.toLowerCase() == "✋")) {
    return api.sendMessage("chào bạn nhé gọi tôi có gì ko nè", threadID);  
  };
    if ((event.body.toLowerCase() == "😒") ||  (event.body.toLowerCase() == "😒")) {
    return api.sendMessage("liếc cái gì bộ yêu tao lắm à", threadID);  
  };
    if ((event.body.toLowerCase() == "👍") ||  (event.body.toLowerCase() == "👍")) {
    return api.sendMessage("like cái giề mày bỏ cái tật thả like đi", threadID);  
  };
  if ((event.body.toLowerCase() == "👊") ||  (event.body.toLowerCase() == "👊")) {
    return api.sendMessage("đấm cho giờ thả icon làm gì", threadID);  
  };
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }