module.exports.config = {
  name: "vt",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "nhhoang",
  description: "xem video vidgaitiktok",
  commandCategory: "video",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/ENoNoBJ.mp4", "https://i.imgur.com/89AuvLR.mp4", "https://i.imgur.com/6GvLZlT.mp4", "https://i.imgur.com/4dujqxA.mp4", "https://i.imgur.com/15cD1X4.mp4", "https://i.imgur.com/L6k5MMl.mp4", "https://i.imgur.com/bcKuSZQ.mp4", "https://i.imgur.com/6Ac5v4o.mp4", "https://i.imgur.com/tGq1bnH.mp4", "https://i.imgur.com/YVfUg0V.mp4", "https://i.imgur.com/uQ6cpk8.mp4", "https://i.imgur.com/R6CiUvO.mp4", "https://i.imgur.com/lX9rFvr.mp4", "https://i.imgur.com/JyScdDZ.mp4", "https://i.imgur.com/ZOtVXbX.mp4", "https://i.imgur.com/Da423Gf.mp4", "https://i.imgur.com/CSWcNuS.mp4", "https://i.imgur.com/WE77K6c.mp4", "https://i.imgur.com/9Og72gq.mp4", "https://i.imgur.com/kHJfsCc.mp4", "https://i.imgur.com/yAOXtgk.mp4", "https://i.imgur.com/JgvRxe1.mp4", "https://i.imgur.com/Pu57fDw.mp4", "https://i.imgur.com/tzeyWE4.mp4", "https://i.imgur.com/J0EgHXH.mp4", "https://i.imgur.com/5zEKZ3W.mp4", "https://i.imgur.com/tE7UM0f.mp4", "https://i.imgur.com/Sc3kQcH.mp4", "https://i.imgur.com/PO3qMHn.mp4", "https://i.imgur.com/cSnsdGI.mp4", "https://i.imgur.com/Gr6kUDX.mp4", "https://i.imgur.com/663Ftt9.mp4", "https://i.imgur.com/eJKPehw.mp4", "https://i.imgur.com/QzB90qU.mp4", "https://i.imgur.com/ZMe9fGE.mp4", "https://i.imgur.com/hTbxe0l.mp4", "https://i.imgur.com/7xJpJn0.mp4", "https://i.imgur.com/P3vYd3d.mp4", "https://i.imgur.com/aNlemDn.mp4", "https://i.imgur.com/lZPEn8V.mp4", "https://i.imgur.com/MEQE808.mp4", "https://i.imgur.com/ULC1wd2.mp4", "https://i.imgur.com/XnQRp6o.mp4", "https://i.imgur.com/CQfTyak.mp4", "https://i.imgur.com/hYR1NKl.mp4", "https://i.imgur.com/fjYVUkO.mp4", "https://i.imgur.com/RPuwfGX.mp4", "https://i.imgur.com/KEOjfnO.mp4", "https://i.imgur.com/Egv1FIJ.mp4", "https://i.imgur.com/C3q2ZjC.mp4", "https://i.imgur.com/ECIvL5c.mp4", "https://i.imgur.com/m2hI7xd.mp4",  "https://i.imgur.com/skPAmwK.mp4", "https://i.imgur.com/KSuLXHr.mp4", "https://i.imgur.com/Pd3sEGb.mp4", "https://i.imgur.com/OB8cJ2j.mp4", "https://i.imgur.com/N81DuSG.mp4", "https://i.imgur.com/ywQqo16.mp4", "https://i.imgur.com/RWfTJFd.mp4", "https://i.imgur.com/t04odUI.mp4", "https://i.imgur.com/pbfmWDa.mp4", "https://i.imgur.com/XyZxzAF.mp4", "https://i.imgur.com/ivDt3Mi.mp4", "https://i.imgur.com/eUXbtYq.mp4", "https://i.imgur.com/GvNYRmw.mp4", "https://i.imgur.com/biHoK2v.mp4", "https://i.imgur.com/YNLkgZ8.mp4", "https://i.imgur.com/Q2MGThN.mp4", "https://i.imgur.com/LqFogfy.mp4", "https://i.imgur.com/TsTeaQd.mp4", "https://i.imgur.com/2S13PCq.mp4", "https://i.imgur.com/x4MPCzg.mp4", "https://i.imgur.com/u91YXR5.mp4", "https://i.imgur.com/tNHgV9m.mp4", "https://i.imgur.com/XnI4eWq.mp4", "https://i.imgur.com/Ou2x6s0.mp4", "https://i.imgur.com/7IFpPVd.mp4", "https://i.imgur.com/ZAqLe2z.mp4", "https://i.imgur.com/OQPiQL2.mp4", "https://i.imgur.com/OmsSHwB.mp4", "https://i.imgur.com/WkIXVph.mp4", "https://i.imgur.com/U23yZ4o.mp4", "https://i.imgur.com/nTDwVjG.mp4", "https://i.imgur.com/ZOOPZav.mp4", "https://i.imgur.com/J1Ttw6J.mp4", "https://i.imgur.com/Y8GaVRv.mp4", "https://i.imgur.com/dBfQEXb.mp4", "https://i.imgur.com/N0Rngkr.mp4",  "https://i.imgur.com/CrirZoB.mp4", "https://i.imgur.com/UzPAKbk.mp4", "https://i.imgur.com/tSro9l2.mp4", "https://i.imgur.com/5Ybh6GR.mp4", "https://i.imgur.com/19RNp68.mp4", "https://i.imgur.com/nUaT7RB.mp4", "https://i.imgur.com/aLZDQRk.mp4", "https://i.imgur.com/aLZDQRk.mp4", "https://i.imgur.com/Cfgmo6t.mp4", "https://i.imgur.com/gZ1F8XP.mp4", "https://i.imgur.com/VEg5fvg.mp4", "https://i.imgur.com/4CEiuEw.mp4", "https://i.imgur.com/1SOnr80.mp4", "https://i.imgur.com/TumYiWa.mp4", "https://i.imgur.com/rPtvbFl.mp4", "https://i.imgur.com/arLRKJ3.mp4", "https://i.imgur.com/OVhUQZ3.mp4", "https://i.imgur.com/uj2QONb.mp4", "https://i.imgur.com/6PpBlyQ.mp4", "https://i.imgur.com/XDpTOOh.mp4", "https://i.imgur.com/5MBtVru.mp4", "https://i.imgur.com/7t9uMO8.mp4", "https://i.imgur.com/4i6tRXT.mp4", "https://i.imgur.com/8z0o3R4.mp4", "https://i.imgur.com/i7z3oyy.mp4", "https://i.imgur.com/x3AWBj6.mp4", "https://i.imgur.com/hGxj9br.mp4", "https://i.imgur.com/Ll3peIh.mp4", "https://i.imgur.com/dpsvYRl.mp4", "https://i.imgur.com/MdpiAm2.mp4", "https://i.imgur.com/Bxl6FZX.mp4", "https://i.imgur.com/0hFfO2Q.mp4", "https://i.imgur.com/EamauI8.mp4", "https://i.imgur.com/jU8ekma.mp4", "https://i.imgur.com/uWmmZLA.mp4", "https://i.imgur.com/XeL1xTY.mp4",  "https://i.imgur.com/EUxs4Ax.mp4", "https://i.imgur.com/vjJvx2n.mp4", "https://i.imgur.com/ZgBouzy.mp4", "https://i.imgur.com/pMhkEPQ.mp4", "https://i.imgur.com/UuV0gWq.mp4", "https://i.imgur.com/Khl3ApH.mp4", "https://i.imgur.com/QYCdnZZ.mp4", "https://i.imgur.com/I9BSiWC.mp4", "https://i.imgur.com/A38YrRL.mp4", "https://i.imgur.com/fSTa6HL.mp4", "https://i.imgur.com/tEPflzI.mp4", "https://i.imgur.com/LoX0nUM.mp4", "https://i.imgur.com/dx007eB.mp4", "https://i.imgur.com/OwKDDAt.mp4", "https://i.imgur.com/k7CI8Fs.mp4", "https://i.imgur.com/bhL9R6g.mp4", "https://i.imgur.com/Qvmg8lh.mp4", "https://i.imgur.com/rn1MQkq.mp4", "https://i.imgur.com/i6NZkpw.mp4", "https://i.imgur.com/JBxLJpM.mp4", "https://i.imgur.com/7NE5bqu.mp4", "https://i.imgur.com/0hnGe85.mp4", "https://i.imgur.com/cpv83Fj.mp4", "https://i.imgur.com/6Dx0c2J.mp4", "https://i.imgur.com/SS4DxSb.mp4", "https://i.imgur.com/6w7z9pG.mp4", "https://i.imgur.com/SutDdLd.mp4", "https://i.imgur.com/xAnOB6r.mp4", "https://i.imgur.com/HKCbXHg.mp4", "https://i.imgur.com/cfdLWT8.mp4", "https://i.imgur.com/rDqFnT1.mp4",  "https://i.imgur.com/1BxTgD6.mp4", "https://i.imgur.com/Upod4yu.mp4", "https://i.imgur.com/Tj7iFt9.mp4", "https://i.imgur.com/ZFk6VQq.mp4", "https://i.imgur.com/EJ0RHnC.mp4", "https://i.imgur.com/gP4C6El.mp4", "https://i.imgur.com/lQeUpA7.mp4", "https://i.imgur.com/GI2cGaK.mp4", "https://i.imgur.com/bjp1irq.mp4", "https://i.imgur.com/v9bqYp5.mp4", "https://i.imgur.com/Gpjy1Wx.mp4", "https://i.imgur.com/dlO1DIA.mp4", "https://i.imgur.com/Ib7nBH3.mp4", "https://i.imgur.com/wtxUXvE.mp4", "https://i.imgur.com/GT5ixNi.mp4", "https://i.imgur.com/OmTjtGT.mp4", "https://i.imgur.com/5dRiCsD.mp4", "https://i.imgur.com/9hunV1R.mp4", "https://i.imgur.com/mjyTfGp.mp4", "https://i.imgur.com/wVVZAiM.mp4", "https://i.imgur.com/kvlqfUG.mp4", "https://i.imgur.com/ix8Q6Kd.mp4", "https://i.imgur.com/PefL4Tn.mp4", "https://i.imgur.com/d7bpCbF.mp4", "https://i.imgur.com/JnkpqY3.mp4", "https://i.imgur.com/BwF56mE.mp4", "https://i.imgur.com/sLcEMrI.mp4", "https://i.imgur.com/WCDsarS.mp4",  "https://i.imgur.com/WBY0tie.mp4", "https://i.imgur.com/9647m1z.mp4", "https://i.imgur.com/5hKHpoT.mp4", "https://i.imgur.com/zTjKm1Q.mp4", "https://i.imgur.com/6PliEvv.mp4", "https://i.imgur.com/fiHE16C.mp4", "https://i.imgur.com/wBvbelR.mp4", "https://i.imgur.com/XPNGaOq.mp4", "https://i.imgur.com/BqcyNKc.mp4", "https://i.imgur.com/qb0NJUi.mp4", "https://i.imgur.com/16BfYev.mp4", "https://i.imgur.com/M16KL1M.mp4", "https://i.imgur.com/WOxTB5N.mp4", "https://i.imgur.com/ynUuFQs.mp4", "https://i.imgur.com/bmh53s0.mp4", "https://i.imgur.com/PeLKbAV.mp4", "https://i.imgur.com/DOyapgm.mp4", "https://i.imgur.com/SaQxSue.mp4", "https://i.imgur.com/JIM7hko.mp4", "https://i.imgur.com/MQOEBuV.mp4", "https://i.imgur.com/hnXEv1N.mp4", "https://i.imgur.com/8ZPvq1C.mp4", "https://i.imgur.com/pDV8ijI.mp4", "https://i.imgur.com/ePkW0hs.mp4", "https://i.imgur.com/le7a3Kd.mp4", "https://i.imgur.com/KVbepjU.mp4", "https://i.imgur.com/cySZTIO.mp4", "https://i.imgur.com/JU0nn6p.mp4", "https://i.imgur.com/RWqgjuY.mp4", "https://i.imgur.com/Ba4SJ1x.mp4", "https://i.imgur.com/yLH1vJw.mp4", "https://i.imgur.com/MbSpSKe.mp4", "https://i.imgur.com/j7GMYnb.mp4", "https://i.imgur.com/OVmOGIE.mp4", "https://i.imgur.com/wYS8ldD.mp4", "https://i.imgur.com/zjNGo7q.mp4", "https://i.imgur.com/bRDU5Jc.mp4", "https://i.imgur.com/G20BhBJ.mp4", "https://i.imgur.com/ea3pQRt.mp4", "https://i.imgur.com/qrNfd20.mp4", "https://i.imgur.com/HQKkp3A.mp4", "https://i.imgur.com/tEL7JQT.mp4", "https://i.imgur.com/cNgh3Cy.mp4", "https://i.imgur.com/aD63SPo.mp4", "https://i.imgur.com/kdtuB6V.mp4", "https://i.imgur.com/S1oZFUg.mp4", "https://i.imgur.com/YON2MrX.mp4", "https://i.imgur.com/hE1W2rm.mp4", "https://i.imgur.com/YLAgaa8.mp4", "https://i.imgur.com/41ZBR8B.mp4", "https://i.imgur.com/JRwLS3r.mp4", "https://i.imgur.com/yovtTai.mp4", "https://i.imgur.com/o8gtU4O.mp4", "https://i.imgur.com/2aZhixC.mp4", "https://i.imgur.com/YPquqcf.mp4", "https://i.imgur.com/zV4dVVy.mp4",  "https://i.imgur.com/SQ4NXBs.mp4", "https://i.imgur.com/9akSyBd.mp4", "https://i.imgur.com/76ewwJs.mp4", "https://i.imgur.com/tBx1aMK.mp4", "https://i.imgur.com/NModQvw.mp4", "https://i.imgur.com/pl9CSpk.mp4", "https://i.imgur.com/7nzAijx.mp4", "https://i.imgur.com/1O5lapG.mp4", "https://i.imgur.com/HPxdIc2.mp4", "https://i.imgur.com/I8Q1EF5.mp4", "https://i.imgur.com/MYdXk0H.mp4", "https://i.imgur.com/ZrL17Wo.mp4", "https://i.imgur.com/5yBaeWi.mp4", "https://i.imgur.com/OR4PTBG.mp4", "https://i.imgur.com/RrvrsoR.mp4", "https://i.imgur.com/B94xAnB.mp4", "https://i.imgur.com/Gwx9T6Z.mp4", "https://i.imgur.com/rCqm5k7.mp4", "https://i.imgur.com/vlPXRYN.mp4", "https://i.imgur.com/LeOABII.mp4", "https://i.imgur.com/vBn9PwN.mp4", "https://i.imgur.com/jFSPy89.mp4", "https://i.imgur.com/Be7PdVX.mp4", "https://i.imgur.com/lLaHZQS.mp4", "https://i.imgur.com/Yh384mt.mp4", "https://i.imgur.com/EaVssak.mp4", "https://i.imgur.com/7TkAIzz.mp4", "https://i.imgur.com/XWorFOY.mp4", "https://i.imgur.com/i4DcZEI.mp4", "https://i.imgur.com/ua4i0aK.mp4", "https://i.imgur.com/ody4gSb.mp4", "https://i.imgur.com/fVsJ3f4.mp4", "https://i.imgur.com/dukG4xj.mp4"  ];
  var callback = () => api.sendMessage({body:`==[ 𝗩𝗜𝗗𝗘𝗢 𝗧𝗥𝗔𝗜/𝗚𝗔́𝗜 ] ==\n━━━━━━━━━━━━━━━━━━\n\n→ [🧸] 𝗩𝗶𝗱𝗲𝗼 𝘁𝗿𝗮𝗶/𝗴𝗮́𝗶 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 đ𝗮̂𝘆\n→ [📺] 𝗦𝗼̂́ 𝘃𝗶𝗱𝗲𝗼: 275\n ━━━━━━━━━━━━━━━━━━\n\n[💓] Đ𝘂̛𝗼̛̣𝗰 𝘂𝗽𝗱𝗮𝘁𝗲 𝗯𝗼̛̉𝗶 𝗩𝗮̆𝗻 𝗧𝗵𝗶𝗲̣̂𝗻`,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   };
 