

Pimport fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://youtube.com/channel/UCOAloj1gW4OVGMtVDnNaq5w*'
Pengen mentahan nya ?
Nih ada santai bro....
https://github.com/XyzenzKannaV1/Siesta-Botz

Pengen yang udah di recode oleh owner?
Script bot ini dijual bila kalian mau bisa chat owner

wa.me/6283866366437`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/_ctzhid",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
    title: 'WH-MODS-DEV-V1 MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
