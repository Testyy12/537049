require("./config")
const { makeWASocket, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys')
const { exec, spawn, execSync } = require("child_process")
const fs = require('fs')
const util = require('util')
const fetch = require('node-fetch')
const path = require('path')
const axios = require('axios')
const chalk = require('chalk')
const { v4: uuidv4 } = require('uuid');
const FormData = require('form-data');
const cheerio = require('cheerio')
const moment = require("moment-timezone")
const { sendFromAI } = require('@neoxr/wb')
const { addExif } = require('./App/function/exif')
const { smsg, formatDate, getTime, getGroupAdmins, formatp, await, sleep, runtime, clockString, msToDate, sort, toNumber, enumGetKey, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, fetchBuffer, buffergif, GIFBufferToVideoBuffer, totalcase } = require('./App/function/myfunc'); 
const { bytesToSize, checkBandwidth, formatSize, jsonformat, nganuin, shorturl, color } = require("./App/function/funcc");
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./App/function/converter')
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./App/function/premiun');
let premium = JSON.parse(fs.readFileSync('./Storage/premium.json'));
const { tiktoksearch, tiktokdl, Facebook } = require('./App/scraper/downloader.js');
module.exports = lilychan = async (lilychan, m, chatUpdate, store) => {
try {
const body = (m && m.mtype) ? (
m.mtype === 'conversation' ? m.message?.conversation :
m.mtype === 'imageMessage' ? m.message?.imageMessage?.caption :
m.mtype === 'videoMessage' ? m.message?.videoMessage?.caption :
m.mtype === 'extendedTextMessage' ? m.message?.extendedTextMessage?.text :
m.mtype === 'buttonsResponseMessage' ? m.message?.buttonsResponseMessage?.selectedButtonId :
m.mtype === 'listResponseMessage' ? m.message?.listResponseMessage?.singleSelectReply?.selectedRowId :
m.mtype === 'templateButtonReplyMessage' ? m.message?.templateButtonReplyMessage?.selectedId :
m.mtype === 'messageContextInfo' ? (
m.message?.buttonsResponseMessage?.selectedButtonId || 
m.message?.listResponseMessage?.singleSelectReply?.selectedRowId || 
m.text
) : ''
) : '';

const budy = (m && typeof m.text === 'string') ? m.text : '';
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : ''
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1);
const full_args = body.replace(command, '').slice(1).trim();
const pushname = m.pushName || "No Name";
const botNumber = await lilychan.decodeJid(lilychan.user.id);
const { type, fromMe } = m
const sender = m.sender
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const itsMe = (m && m.sender && m.sender == botNumber) || false;
const text = q = args.join(" ");
var msg_text = (typeof m.text === 'string') ? m.text : '';
const fatkuns = m && (m.quoted || m);
const quoted = (fatkuns?.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] :
(fatkuns?.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
(fatkuns?.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] :
m.quoted || m;
const mime = ((quoted?.msg || quoted) || {}).mimetype || '';
const qmsg = (quoted?.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const groupMetadata = m.isGroup ? await lilychan.groupMetadata(m.chat).catch(e => {}) : {};
const participants = m.isGroup ? await groupMetadata.participants || [] : [];
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) || [] : [];
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
const isBot = botNumber.includes(senderNumber)
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium); expiredCheck(lilychan, m, premium);
const groupOwner = m.isGroup ? groupMetadata.owner || '' : '';
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false;
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
 
// FUNTION DISINI WAE YAK 

// self mode 
global.selfMode = false

function ModeSelf(m) {
    if(!isCreator) return reply('Fitur Ini Hanya Owner Yang Bisa Mengaksesnya☺️')

        
    global.selfMode = !global.selfMode;
    const status = global.selfMode ? 'SELF' : 'PUBLIC';
    
    m.reply(`✅ Mode bot berhasil diubah menjadi: ${status}`);
} 

// private chat

 function isPrivateChat(jid) {
    return.jid.endWith('@g.us')

}

const isPrivate = isPrivateChat(m.key.remoteJid);


// Database structure
if (!global.db.data.japost) {
    global.db.data.japost = {
        groupIds: [], // Menyimpan daftar grup tujuan 
        posts: [], // Menyimpan history posting
        templates: {
            default: `*JASA/BARANG BARU!*
            
Nama: {nama}
Harga: {harga}
Kategori: {kategori}

📝 Deskripsi:
{deskripsi}

📞 Kontak:
{kontak}

#japost #{kategori}`
        }
    };
}

 // contoh kirim label ai 
async function AmbalabuAi () {

    lilychan.sendFromAi(m.chat, 'hi', m)
}
// function jual beli 

// MembuatProdukId
const CreateProductId = () => {
    const lasId = global.db.data.marketplace.products.length > 0 
    ? parseInt(global.db.data.marketplace.products[global.db.data.marketplace.products.length - 1].id.replace('PROD', ''))
    : 0
return `PROD${String(lastId + 1).padStart(3, '0')}`
}

// ========== penutup function jual beli

const ADMIN_FEE = 4000;
    
    const formatPhoneNumber = (number) => {
        let cleaned = number.replace(/\D/g, '');
        if (cleaned.startsWith('0')) {
            cleaned = '62' + cleaned.slice(1);
        }
        if (!cleaned.startsWith('62')) {
            cleaned = '62' + cleaned;
        }
        return cleaned + '@s.whatsapp.net';
    };

    const formatRupiah = (amount) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(amount);
    };

    // Initialize database structure if not exists
    if (!global.db.data.rekber) {
        global.db.data.rekber = [];
        global.db.write();
    }
    
const hariini = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const salam = 'Selamat '+dt.charAt(0).toUpperCase() + dt.slice(1)    
let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)
const lilydate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if (time2 < "23:59:00") { var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ️'; }
if (time2 < "19:00:00") { var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴇᴛᴀɴɢ'; }
if (time2 < "18:00:00") { var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴏʀᴇ'; }
if (time2 < "15:00:00") { var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱɪᴀɴɢ️'; }
if (time2 < "10:00:00") { var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ'; }
if (time2 < "05:00:00") { var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴜʙᴜʜ'; }
if (time2 < "03:00:00") { var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴛᴇɴɢᴀʜ ᴍᴀʟᴀᴍ'; }

if (time2 < "23:59:00") { var emojiwaktu = `🌌`; }
if (time2 < "19:00:00") { var emojiwaktu = `🌙`; }
if (time2 < "18:00:00") { var emojiwaktu = `🌅`; }
if (time2 < "17:00:00") { var emojiwaktu = `🌅`; }
if (time2 < "15:00:00") { var emojiwaktu = `☀️`; }
if (time2 < "11:00:00") { var emojiwaktu = `🌄`; }
if (time2 < "05:00:00") { var emojiwaktu = `🌙`; }



async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}

const totalFitur = () => {
    var mytext = fs.readFileSync("./response.js").toString();
    var numUpper = (mytext.match(/case '/g) || []).length;
    return numUpper;
};

const pickRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};
 
try {
    var ppuser = await lilychan.profilePictureUrl(m.sender, 'image');
} catch (err) {
    var ppuser = 'https://telegra.ph/file/6880771a42bad09dd6087.jpg';
}

let ppnyauser = await getBuffer(ppuser);
lilychan.readMessages([m.key]);
//================== [ CONSOL LOGG] ==================//
if (m.message) {            
    console.log(chalk.cyan(`────────────『 ${chalk.redBright('ᴵᴺᶠᴼ ᴹᴱˢˢᴬᴳᴱ')} 』────────────`));
    console.log(`   ${chalk.cyan('» Message Type')}: ${m.mtype}`);
    console.log(`   ${chalk.cyan('» Sent Time')}: ${time2}`);
    console.log(`   ${chalk.cyan('» Sender Name')}: ${pushname || 'N/A'}`);
    console.log(`   ${chalk.cyan('» Chat ID')}: ${m.chat.split('@')[0]}`);
    console.log(`   ${chalk.cyan('» Chat Name')}: ${budy || 'N/A'}`);
    console.log(`   ${chalk.cyan('» Author By')}: TanakaSensei`);
    console.log(chalk.cyan('───────────────────────────────────⳹\n'));
}

//-- STAFF SYSTEM 
let list_staff = [];
  let staff_domp = global.owner;
  for (let i of staff_domp) {
  let name_staff = await lilychan.getName(i + "@s.whatsapp.net")   
    list_staff.push({
      displayName: await lilychan.getName(i + "@s.whatsapp.net"),
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${name_staff}\nFN:${name_staff}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Hubungi staff kami 💬\nitem2.EMAIL;type=INTERNET:tanakadomp@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://www.tanakadomp.biz.id\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
    });
}
  
switch(command) {

// Add these cases to your switch(command) section:

case 'listchannel': {
    if (!isCreator) return m.reply(mess.owner)
    try {
        const channels = await lilychan.getChannels();
        if (!channels || channels.length === 0) {
            return m.reply('Tidak ada channel yang diikuti saat ini.');
        }

        let channelList = '*DAFTAR CHANNEL*\n\n';
        channels.forEach((channel, index) => {
            channelList += `${index + 1}. *Nama*: ${channel.name}\n`;
            channelList += `   *ID*: ${channel.id}\n`;
            channelList += `   *Deskripsi*: ${channel.description || 'Tidak ada deskripsi'}\n`;
            channelList += `   *Subscriber*: ${channel.participantsCount}\n\n`;
        });

        await lilychan.sendMessage(m.chat, {
            text: channelList,
            mentions: [m.sender]
        }, { quoted: m });
    } catch (error) {
        console.error('Error listing channels:', error);
        m.reply('Terjadi kesalahan saat mengambil daftar channel.');
    }
}
break;

case 'joinchannel': {
    if (!isCreator) {
        return ;
    }
    if (!text) return m.reply('Masukkan ID atau link channel!');
    try {
        let channelId = text;
        // If it's a link, extract the code
        if (text.includes('whatsapp.com/channel/')) {
            channelId = text.split('channel/')[1].split('/')[0];
        }

        await lilychan.channelJoin(channelId);
        m.reply('Berhasil bergabung ke channel!');
    } catch (error) {
        console.error('Error joining channel:', error);
        m.reply('Gagal bergabung ke channel. Pastikan ID/link valid dan bot memiliki akses.');
    }
}
break;

case 'leavechannel': {
    if (!isCreator) return m.reply(mess.owner)
    if (!text) return m.reply('Masukkan ID channel!');
    try {
        await lilychan.channelLeave(text);
        m.reply('Berhasil keluar dari channel!');
    } catch (error) {
        console.error('Error leaving channel:', error);
        m.reply('Gagal keluar dari channel. Pastikan ID valid dan bot adalah subscriber.');
    }
}
break;

case 'channelinfo': {
    if (!text) return m.reply('Masukkan ID channel!');
    try {
        const channelInfo = await lilychan.channelInfo(text);
        let info = '*CHANNEL INFO*\n\n';
        info += `*Nama*: ${channelInfo.name}\n`;
        info += `*ID*: ${channelInfo.id}\n`;
        info += `*Deskripsi*: ${channelInfo.description || 'Tidak ada deskripsi'}\n`;
        info += `*Dibuat*: ${moment(channelInfo.creation * 1000).format('DD/MM/YY HH:mm:ss')}\n`;
        info += `*Subscriber*: ${channelInfo.participantsCount}\n`;
        info += `*Status*: ${channelInfo.isActive ? 'Aktif' : 'Tidak Aktif'}\n`;

        if (channelInfo.picture) {
            await lilychan.sendMessage(m.chat, { 
                image: { url: channelInfo.picture },
                caption: info
            }, { quoted: m });
        } else {
            await lilychan.sendMessage(m.chat, { text: info }, { quoted: m });
        }
    } catch (error) {
        console.error('Error getting channel info:', error);
        m.reply('Gagal mendapatkan informasi channel. Pastikan ID valid.');
    }
}
break;

case 'searchchannel': {
    if (!text) return m.reply('Masukkan kata kunci pencarian!');
    try {
        const results = await lilychan.searchChannels(text);
        if (!results || results.length === 0) {
            return m.reply('Tidak ditemukan channel dengan kata kunci tersebut.');
        }

        let searchResult = '*HASIL PENCARIAN CHANNEL*\n\n';
        results.forEach((channel, index) => {
            searchResult += `${index + 1}. *Nama*: ${channel.name}\n`;
            searchResult += `   *ID*: ${channel.id}\n`;
            searchResult += `   *Deskripsi*: ${channel.description || 'Tidak ada deskripsi'}\n`;
            searchResult += `   *Subscriber*: ${channel.participantsCount}\n\n`;
        });

        await lilychan.sendMessage(m.chat, {
            text: searchResult,
            mentions: [m.sender]
        }, { quoted: m });
    } catch (error) {
        console.error('Error searching channels:', error);
        m.reply('Terjadi kesalahan saat mencari channel.');
    }
}
break;

case 'channelmuteunmute': {
    if (!isCreator) {
        return m.reply(mess.owner)
    }
    if (!text) return m.reply('Masukkan ID channel!');
    try {
        const [channelId, action] = text.split('|').map(item => item.trim());
        if (!channelId || !action) {
            return m.reply('Format: .muteunmutechannel channelId|mute/unmute');
        }

        if (action.toLowerCase() === 'mute') {
            await lilychan.channelMute(channelId);
            m.reply('Channel berhasil di-mute!');
        } else if (action.toLowerCase() === 'unmute') {
            await lilychan.channelUnmute(channelId);
            m.reply('Channel berhasil di-unmute!');
        } else {
            m.reply('Action tidak valid. Gunakan "mute" atau "unmute"');
        }
    } catch (error) {
        console.error('Error muting/unmuting channel:', error);
        m.reply('Gagal mengubah status mute channel.');
    }
}
break;

case 'listgc':
case 'grouplist': {
    if (!isCreator) return m.reply(mess.owner);
    let hituet = 0;
    try {
        let getGroups = await lilychan.groupFetchAllParticipating();
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1]);
        let anu = groups.map(v => v.id);
        
        const groupList = groups.map(group => {
            return `*GROUP KE ${++hituet}*
*NAME*: ${group.subject}
*ID*: ${group.id.split("@")[0]}@g.us
*JUMLAH MEMBER*: ${group.participants.length} Member`;
        }).join("\n\n");
        
        await lilychan.sendMessage(m.chat, {
            text: `*BOT BY ${global.botname}*\n*Total Group : ${anu.length}*\n\n${groupList}`,
            mentions: [m.sender]
        }, {
            quoted: m
        });
    } catch (error) {
        console.error("ERROR! List Group\n", error);
        m.reply("Terjadi kesalahan saat mengambil daftar grup:\n" + error.message);
    }
}
break;

    case 'self': {
ModeSelf(m)
    }
   break


case 'japost': {

// mendeteksi jika fitur ini hanya bisa di gunakan di private chat 
if (!isPrivate) {
    return m.reply('❌ Fitur ini hanya dapat digunakan di private chat. Silakan chat pribadi bot untuk menggunakan japost.');
}

    if (!text && !m.quoted) {
        // Tampilkan format
        return m.reply(`📝 *FORMAT JAPOST*

Silakan isi format berikut:
.japost
Nama: 
Harga:
Kategori: [Jasa/Barang]
Deskripsi:
Kontak:

Optional: Reply gambar jika ada

Note: Gunakan format di atas dan isi semua data`);
    }

    try {
        // Parse input
        const input = text || m.quoted.text;
        const lines = input.split('\n');
        const data = {};
        
        lines.forEach(line => {
            const [key, ...value] = line.split(':');
            if (value.length > 0) {
                data[key.toLowerCase().trim()] = value.join(':').trim();
            }
        });

        // Validasi input
        const required = ['nama', 'harga', 'kategori', 'deskripsi', 'kontak'];
        const missing = required.filter(field => !data[field]);
        
        if (missing.length > 0) {
            return m.reply(`❌ Data tidak lengkap. Field yang kurang: ${missing.join(', ')}`);
        }

        // Generate post content
        const template = global.db.data.japost.templates.default;
        const content = template
            .replace('{nama}', data.nama)
            .replace('{harga}', data.harga)
            .replace('{kategori}', data.kategori)
            .replace('{deskripsi}', data.deskripsi)
            .replace('{kontak}', data.kontak);

        // Save to history
        const postId = 'POST' + Date.now();
        global.db.data.japost.posts.push({
            id: postId,
            content: content,
            sender: m.sender,
            timestamp: new Date(),
            data: data
        });

        // Post ke semua grup
        const groupIds = global.db.data.japost.groupIds;
        let successCount = 0;

        for (let groupId of groupIds) {
            try {
                // Jika ada gambar
                if (m.quoted && m.quoted.imageMessage) {
                    await lilychan.sendMessage(groupId, {
                        image: await m.quoted.download(),
                        caption: content
                    });
                } else {
                    await lilychan.sendMessage(groupId, { text: content });
                }
                successCount++;
            } catch (err) {
                console.error(`Failed to post to ${groupId}:`, err);
            }
        }

        // Create status
        const status = await lilychan.sendMessage(m.sender, {
            text: content,
            backgroundType: 1
        }, {
            statusJidList: [m.sender]
        });

        return m.reply(`✅ Post berhasil disebarkan ke ${successCount} grup dan status!
🆔 Post ID: ${postId}`);

    } catch (err) {
        console.error('Error in japost:', err);
        return m.reply('❌ Terjadi error saat memproses post');
    }
}
break;

// Command untuk menambah grup (owner only)
case 'addjapostgroup': {
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply('Masukkan ID grup!');

    try {
        const groupId = text;
        if (global.db.data.japost.groupIds.includes(groupId)) {
            return m.reply('Grup sudah terdaftar!');
        }

        global.db.data.japost.groupIds.push(groupId);
        await global.db.write();

        return m.reply(`✅ Berhasil menambahkan grup ${groupId}`);
    } catch (err) {
        console.error('Error adding group:', err);
        return m.reply('❌ Gagal menambahkan grup');
    }
}
break;

// Command untuk menghapus grup (owner only)
case 'deljapostgroup': {
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply('Masukkan ID grup!');

    try {
        const groupId = text;
        const index = global.db.data.japost.groupIds.indexOf(groupId);
        
        if (index === -1) {
            return m.reply('Grup tidak ditemukan!');
        }

        global.db.data.japost.groupIds.splice(index, 1);
        await global.db.write();

        return m.reply(`✅ Berhasil menghapus grup ${groupId}`);
    } catch (err) {
        console.error('Error removing group:', err);
        return m.reply('❌ Gagal menghapus grup');
    }
}
break;


    case 'list-produk': {
        if (!isPrivate) {
            return m.reply('❌ Fitur ini hanya dapat digunakan di private chat. Silakan chat pribadi bot untuk menggunakan japost.');
        }
        
        if (global.db.data.marketplace.products.length == 0) return m.reply(`🚫 Belum ada produk tersedia.`)
        let text = `*DAFTAR PRODUK*\n\n`
        global.db.data.marketplace.products.forEach(product => {
            const currentPrice = product.discount ? product.price - (product.price * product.discount / 100) : product.price
            text += `ID: ${product.id}\n`
            text += `Nama: ${product.name}\n`
            text += `Harga: Rp ${currentPrice.toLocaleString()}\n`
            if (product.discount && new Date() < new Date(product.discountEnd)) {
                text += `Diskon: ${product.discount}% (s/d ${new Date(product.discountEnd).toLocaleDateString()})\n`
            }
            text += `Stok: ${product.stock}\n`
            text += `Deskripsi: ${product.description}\n\n`
            text += `-------------------\n\n`
        })
        text += `\nUntuk membeli: ${prefix}beli id_produk|jumlah`
        return m.reply(text)
    }
    break;

    case 'beli': {
        if (!isPrivate) {
            return m.reply('❌ Fitur ini hanya dapat digunakan di private chat. Silakan chat pribadi bot untuk menggunakan japost.');
        }
        
        if (!text) return m.reply(`⚠️ Masukkan ID produk dan jumlah yang ingin dibeli.\nContoh: ${prefix}beli Prod001|2`)
        let [productId, quantity] = text.split('|')
        quantity = parseInt(quantity)

        const productIndex = global.db.data.marketplace.products.findIndex(p => p.id === productId)
        if (productIndex === -1) return m.reply(`⚠️ Produk dengan ID ${productId} tidak ditemukan.`)
        
        const product = global.db.data.marketplace.products[productIndex]
        if (product.stock < quantity) return m.reply(`⚠️ Stok tidak mencukupi. Stok tersedia: ${product.stock}`)

        const currentPrice = product.discount ? product.price - (product.price * product.discount / 100) : product.price
        const totalPrice = currentPrice * quantity

        // Generate merchant ID for transaction
        const merchantId = 'TRX' + Date.now()

        try {
            // Create QR Code payment
            const qrResponse = await fetchJson(`https://ruztan.apixd.my.id/api/orkut/createpayment?apikey=echa&amount=${totalPrice}&codeqr=${global.codeqr}`)
            if (!qrResponse.success) return m.reply(`⚠️ Gagal membuat QR pembayaran.`)

            // Send QR Code to user
            const msg = await m.reply(`*DETAIL PEMBAYARAN*\n\n` +
                `ID Produk: ${product.id}\n` +
                `Nama: ${product.name}\n` +
                `Jumlah: ${quantity}\n` +
                `Total: Rp ${totalPrice.toLocaleString()}\n\n` +
                `Silakan scan QR code di atas untuk melakukan pembayaran.\n` +
                `Waktu pembayaran: 5 menit`)

            // Set 5 minutes timeout
            const timeoutDuration = 5 * 60 * 1000
            const startTime = Date.now()

            const checkPayment = async () => {
                try {
                    if (Date.now() - startTime > timeoutDuration) {
                        lilychan.sendMessage(m.chat, { delete: msg.key })
                        return m.reply(`⚠️ Waktu pembayaran habis.`)
                    }

                    const statusResponse = await fetchJson(`https://ruztan.apixd.my.id/api/orkut/cekstatus?apikey=echa&merchant=${global.merchantId}&keyorkut=${global.apiToken}&amount=${totalPrice}`)

                    if (statusResponse.status === 'success') {
                        // Update stock
                        global.db.data.marketplace.products[productIndex].stock -= quantity
                        await global.db.write()

                        // Save transaction
                        global.db.data.marketplace.transactions.push({
                            id: merchantId,
                            productId: product.id,
                            quantity: quantity,
                            totalPrice: totalPrice,
                            buyerJid: m.sender,
                            date: new Date()
                        })
                        await global.db.write()

                        // Notify owner
                        lilychan.reply(global.owner[0], `*TRANSAKSI BERHASIL*\n\n` +
                            `ID Transaksi: ${merchantId}\n` +
                            `Produk: ${product.name}\n` +
                            `Jumlah: ${quantity}\n` +
                            `Total: Rp ${totalPrice.toLocaleString()}\n` +
                            `Pembeli: ${m.sender}`)

                        // Broadcast to all groups
                        const groups = await lilychan.groupList()
                        for (let group of groups) {
                            lilychan.reply(group.id, `*PEMBELIAN BERHASIL*\n\n` +
                                `Produk: ${product.name}\n` +
                                `Jumlah: ${quantity}\n` +
                                `Total: Rp ${totalPrice.toLocaleString()}`)
                        }

                        return m.reply(`✅ Pembayaran berhasil! Produk akan segera dikirim.`)
                    } else if (statusResponse.status === 'pending') {
                        setTimeout(checkPayment, 10000) // Check again in 10 seconds
                    }
                } catch (error) {
                    console.error('Payment check error:', error)
                    setTimeout(checkPayment, 10000)
                }
            }

            setTimeout(checkPayment, 10000) // Start checking after 10 seconds
        } catch (error) {
            console.error('Error in purchase:', error)
            return m.reply(`❌ Terjadi kesalahan: ${error.message}`)
        }
    }
    break;

    case 'tambahprod': {
        if (!isCreator) return m.reply(mess.owner)
        if (!text) return m.reply(`⚠️ Masukkan detail produk.\nFormat: nama|harga|stok|deskripsi`)
        
        let [name, price, stock, description] = text.split('|')
        price = parseInt(price)
        stock = parseInt(stock)

        const productId = CreateProductId()
        global.db.data.marketplace.products.push({
            id: productId,
            name,
            price,
            stock,
            description,
            discount: null,
            discountEnd: null
        })
        await global.db.write()

        return m.reply(`✅ Produk berhasil ditambahkan dengan ID: ${productId}`)
    }
    break;

    case 'hapusprod': {
        if (!isCreator) return m.reply(mess.owner)
        if (!text) return m.reply(`⚠️ Masukkan ID produk yang akan dihapus.`)
        
        const index = global.db.data.marketplace.products.findIndex(p => p.id === text)
        if (index === -1) return m.reply(`⚠️ Produk dengan ID ${text} tidak ditemukan.`)

        global.db.data.marketplace.products.splice(index, 1)
        await global.db.write()
        
        return m.reply(`✅ Produk dengan ID ${text} berhasil dihapus.`)
    }
    break;

    case 'stok': {
        if (!isCreator) return m.reply(mess.owner)
        if (!text) return m.reply(`⚠️ Format: ${prefix}stok tambah/kurangi id_produk|jumlah`)
        
        let [action, productId, amount] = text.split('|')
        amount = parseInt(amount)

        const productIndex = global.db.data.marketplace.products.findIndex(p => p.id === productId)
        if (productIndex === -1) return m.reply(`⚠️ Produk dengan ID ${productId} tidak ditemukan.`)

        if (action === 'tambah') {
            global.db.data.marketplace.products[productIndex].stock += amount
        } else if (action === 'kurangi') {
            if (global.db.data.marketplace.products[productIndex].stock < amount) 
                return m.reply(`⚠️ Stok tidak mencukupi.`)
            global.db.data.marketplace.products[productIndex].stock -= amount
        }
        await global.db.write()

        return m.reply(`✅ Stok produk ${global.db.data.marketplace.products[productIndex].name} berhasil diperbarui. Stok sekarang: ${global.db.data.marketplace.products[productIndex].stock}`)
    }
    break;

    case 'aturharga': {
        if (!isCreator) return m.reply(mess.owner)
        if (!text) return m.reply(`⚠️ Format: ${prefix}aturharga id_produk|harga_baru`)
        
        let [productId, newPrice] = text.split('|')
        newPrice = parseInt(newPrice)

        const productIndex = global.db.data.marketplace.products.findIndex(p => p.id === productId)
        if (productIndex === -1) return m.reply(`⚠️ Produk dengan ID ${productId} tidak ditemukan.`)

        global.db.data.marketplace.products[productIndex].price = newPrice
        await global.db.write()

        return m.reply(`✅ Harga produk ${global.db.data.marketplace.products[productIndex].name} berhasil diubah menjadi Rp ${newPrice.toLocaleString()}`)
    }
    break;

    case 'setdiskon': {
        if (!isCreator) return m.reply(mess.owner)
        if (!text) return m.reply(`⚠️ Format: ${prefix}setdiskon id_produk|persen_diskon|tanggal_berakhir\nContoh: ${prefix}setdiskon Prod001|10|2024-01-31`)
        
        let [productId, discount, endDate] = text.split('|')
        discount = parseInt(discount)

        const productIndex = global.db.data.marketplace.products.findIndex(p => p.id === productId)
        if (productIndex === -1) return m.reply(`⚠️ Produk dengan ID ${productId} tidak ditemukan.`)

        global.db.data.marketplace.products[productIndex].discount = discount
        global.db.data.marketplace.products[productIndex].discountEnd = new Date(endDate)
        await global.db.write()

        // Set timeout to remove discount when it expires
        const timeUntilExpiry = new Date(endDate) - new Date()
        if (timeUntilExpiry > 0) {
            setTimeout(async () => {
                global.db.data.marketplace.products[productIndex].discount = null
                global.db.data.marketplace.products[productIndex].discountEnd = null
                await global.db.write()
            }, timeUntilExpiry)
        }

        return m.reply(`✅ Diskon ${discount}% untuk produk ${global.db.data.marketplace.products[productIndex].name} berhasil diatur sampai ${endDate}`)
    }
    break;


        case 'createrekber': {

        if (!isPrivate) return m.reply('ngapain?')
                if (!text.includes('|')) {
                    return m.reply(`Format salah! Contoh: ${prefix}createrekber namagrup|nomor`);
                }

                const [groupName, nomorU2] = text.split('|').map(str => str.trim());
                const formattedNomorU2 = formatPhoneNumber(nomorU2);
                const userId = m.sender.replace(/@.+/, '');

                try {
                    // Check existing active rekber
                    const existingRekber = global.db.data.rekber.find(r => 
                        r.members.includes(userId) && r.status === 'active'
                    );

                    if (existingRekber) {
                        return m.reply(`❌ Anda masih memiliki rekber aktif. Selesaikan atau batalkan rekber tersebut terlebih dahulu.`);
                    }

                    // Create WhatsApp group
                    const group = await lilychan.groupCreate(groupName, [
                        userId + '@s.whatsapp.net',
                        formattedNomorU2
                    ]);

                    // Create new rekber in database
                    const newRekber = {
                        groupId: group.id,
                        groupName: groupName,
                        members: [userId, nomorU2.replace(/\D/g, '')],
                        transactions: [],
                        status: 'active',
                        createdAt: new Date()
                    };

                    global.db.data.rekber.push(newRekber);
                    await global.db.write();

                    // Send welcome message
                    await lilychan.sendMessage(group.id, {
                        text: `🏦 *REKBER GROUP*\n\nSelamat datang di grup rekber ${groupName}\n\nGunakan command berikut untuk transaksi:\n1. ${prefix}rekber (membuat transaksi)\n2. ${prefix}selesai (menyelesaikan transaksi)\n3. ${prefix}batal-rekber (membatalkan rekber)\n\nBiaya admin untuk setiap transaksi: ${formatRupiah(ADMIN_FEE)}`
                    });

                    return m.reply(`✅ Grup rekber berhasil dibuat:\nNama: ${groupName}\nID: ${group.id}`);
                } catch (error) {
                    console.error('Error creating rekber:', error);
                    return m.reply(`❌ Gagal membuat grup: ${error.message}`);
                }
            }
            break;

            case 'rekber': {
                const userId = m.sender.replace(/@.+/, '');

                try {
                    const activeRekber = global.db.data.rekber.find(r => 
                        r.members.includes(userId) && r.status === 'active'
                    );

                    if (!activeRekber) {
                        return m.reply(`❌ Anda tidak memiliki rekber aktif. Buat rekber terlebih dahulu dengan ${prefix}createrekber`);
                    }

                    const [namaBarang, harga, nomorPenjual, nomorPembeli, reff] = text.split('|').map(str => str.trim());
                    if (!namaBarang || !harga || !nomorPenjual || !nomorPembeli) {
                        return m.reply(`Format salah! Contoh: ${prefix}rekber namabarang|harga|nomorpenjual|nomorpembeli|reff`);
                    }

                    const hargaNumber = parseFloat(harga);
                    const totalBayar = hargaNumber + ADMIN_FEE;

                    // Create payment via API
                    const paymentResponse = await axios.get(`https://ruztan.apixd.my.id/api/orkut/createpayment?apikey=echa&amount=${totalBayar}&codeqr=${global.codeqr}`);

                    if (!paymentResponse.data.success) {
                        throw new Error(paymentResponse.data.msg);
                    }

                    const transactionId = uuidv4();
                    const newTransaction = {
                        id: transactionId,
                        namaBarang,
                        harga: hargaNumber,
                        adminFee: ADMIN_FEE,
                        totalBayar,
                        nomorPenjual: formatPhoneNumber(nomorPenjual).replace('@s.whatsapp.net', ''),
                        nomorPembeli: formatPhoneNumber(nomorPembeli).replace('@s.whatsapp.net', ''),
                        reff,
                        status: 'pending',
                        qrCode: paymentResponse.data.data.qr_code,
                        createdAt: new Date()
                    };

                    activeRekber.transactions.push(newTransaction);
                    await global.db.write();

                    // Send transaction info to group
                    await lilychan.sendMessage(activeRekber.groupId, {
                        text: `💳 *TRANSAKSI BARU*\n\nBarang: ${namaBarang}\nHarga Barang: ${formatRupiah(hargaNumber)}\nBiaya Admin: ${formatRupiah(ADMIN_FEE)}\nTotal Bayar: ${formatRupiah(totalBayar)}\nReff: ${reff}\n\nSilakan scan QR Code untuk pembayaran.`
                    });

                    // Setup payment checking
                    const checkPayment = async () => {
                        try {
                            const statusResponse = await axios.get(`https://ruztan.apixd.my.id/api/orkut/cekstatus?apikey=echa&merchant=${global.merchantId}&keyorkut=${global.apiToken}&amount=${totalBayar}`);

                            if (statusResponse.data.success && statusResponse.data.data.status === 'success') {
                                const rekberIndex = global.db.data.rekber.findIndex(r => 
                                    r.status === 'active' && r.transactions.some(t => t.id === transactionId)
                                );

                                if (rekberIndex !== -1) {
                                    const transaction = global.db.data.rekber[rekberIndex].transactions.find(t => t.id === transactionId);
                                    if (transaction && transaction.status === 'pending') {
                                        transaction.status = 'paid';
                                        transaction.paidAt = new Date();
                                        await global.db.write();

                                        await lilychan.sendMessage(global.db.data.rekber[rekberIndex].groupId, {
                                            text: `✅ *PEMBAYARAN BERHASIL*\n\nBarang: ${namaBarang}\nHarga Barang: ${formatRupiah(hargaNumber)}\nBiaya Admin: ${formatRupiah(ADMIN_FEE)}\nTotal Dibayar: ${formatRupiah(totalBayar)}\n\nPenjual silakan mengirim barang. Setelah barang diterima, pembeli dapat menyelesaikan transaksi dengan command ${prefix}selesai`
                                        });
                                    }
                                }
                            } else {
                                setTimeout(checkPayment, 30000);
                            }
                        } catch (error) {
                            console.error('Payment check error:', error);
                            setTimeout(checkPayment, 30000);
                        }
                    };

                    checkPayment();
                    return m.reply(`✅ QR Code pembayaran telah dikirim ke grup.`);
                } catch (error) {
                    console.error('Error in rekber transaction:', error);
                    return m.reply(`❌ Gagal membuat transaksi: ${error.message}`);
                }
            }
            break;

            case 'selesai': {
                const userId = m.sender.replace(/@.+/, '');

                try {
                    const activeRekberIndex = global.db.data.rekber.findIndex(r => 
                        r.members.includes(userId) && r.status === 'active'
                    );

                    if (activeRekberIndex === -1) {
                        return m.reply(`❌ Tidak ada rekber aktif.`);
                    }

                    const activeRekber = global.db.data.rekber[activeRekberIndex];
                    const pendingTransaction = activeRekber.transactions.find(t => t.status === 'paid');

                    if (!pendingTransaction) {
                        return m.reply(`❌ Tidak ada transaksi yang perlu diselesaikan.`);
                    }

                    if (userId !== pendingTransaction.nomorPembeli) {
                        return m.reply(`❌ Hanya pembeli yang dapat menyelesaikan transaksi.`);
                    }

                    pendingTransaction.status = 'completed';
                    pendingTransaction.completedAt = new Date();
                    await global.db.write();

                    await lilychan.sendMessage(activeRekber.groupId, {
                        text: `✅ *TRANSAKSI SELESAI*\n\nBarang: ${pendingTransaction.namaBarang}\nHarga Barang: ${formatRupiah(pendingTransaction.harga)}\nBiaya Admin: ${formatRupiah(ADMIN_FEE)}\nTotal Transaksi: ${formatRupiah(pendingTransaction.totalBayar)}\n\nPenjual dapat melakukan pencairan dengan command ${prefix}pencairan nomor|nama|jenis ewallet`
                    });

                    return m.reply(`✅ Transaksi selesai. Penjual akan menerima pembayaran setelah melakukan pencairan.`);
                } catch (error) {
                    console.error('Error completing transaction:', error);
                    return m.reply(`❌ Gagal menyelesaikan transaksi: ${error.message}`);
                }
            }
            break;

            case 'batal-rekber': {
                const userId = m.sender.replace(/@.+/, '');

                try {
                    const activeRekberIndex = global.db.data.rekber.findIndex(r => 
                        r.members.includes(userId) && r.status === 'active'
                    );

                    if (activeRekberIndex === -1) {
                        return m.reply(`❌ Tidak ada rekber aktif.`);
                    }

                    const activeRekber = global.db.data.rekber[activeRekberIndex];
                    const pendingTransaction = activeRekber.transactions.find(t => 
                        t.status === 'pending' || t.status === 'paid'
                    );

                    if (pendingTransaction) {
                        return m.reply(`❌ Tidak dapat membatalkan rekber yang memiliki transaksi aktif.`);
                    }

                    await lilychan.groupLeave(activeRekber.groupId);

                    global.db.data.rekber[activeRekberIndex].status = 'cancelled';
                    global.db.data.rekber[activeRekberIndex].cancelledAt = new Date();
                    await global.db.write();

                    return m.reply(`✅ Rekber berhasil dibatalkan.`);
                } catch (error) {
                    console.error('Error cancelling rekber:', error);
                    return m.reply(`❌ Gagal membatalkan rekber: ${error.message}`);
                }
            }
            break;

            case 'pencairan': {
                const userId = m.sender.replace(/@.+/, '');

                try {
                    const activeRekberIndex = global.db.data.rekber.findIndex(r => 
                        r.members.includes(userId) && r.status === 'active'
                    );

                    if (activeRekberIndex === -1) {
                        return m.reply(`❌ Tidak ada rekber aktif.`);
                    }

                    const [nomor, nama, jenisEwallet] = text.split('|').map(str => str.trim());
                    if (!nomor || !nama || !jenisEwallet) {
                        return m.reply(`Format salah! Contoh: ${prefix}pencairan nomor|nama|jenis ewallet`);
                    }

                    const activeRekber = global.db.data.rekber[activeRekberIndex];
                    const completedTransaction = activeRekber.transactions.find(t => 
                        t.status === 'completed' && 
                        t.nomorPenjual === userId &&
                        !t.disbursed
                    );

                    if (!completedTransaction) {
                        return m.reply(`❌ Tidak ada transaksi yang dapat dicairkan.`);
                    }

                    completedTransaction.disbursed = true;
                    completedTransaction.disbursementDetails = {
                        nomor,
                        nama,
                        jenisEwallet,
                        jumlahDicairkan: completedTransaction.harga,
                        timestamp: new Date()
                    };

                    await global.db.write();

                    await lilychan.sendMessage(activeRekber.groupId, {
                        text: `💰 *PENCAIRAN BERHASIL*\n\nNomor: ${nomor}\nNama: ${nama}\nE-wallet: ${jenisEwallet}\nJumlah Dicairkan: ${formatRupiah(completedTransaction.harga)}\n\nBiaya admin ${formatRupiah(ADMIN_FEE)} telah dipotong dari total pembayaran.`
                    });

                    const allComplete = activeRekber.transactions.every(t => 
                        t.status === 'completed' && t.disbursed
                    );

                    if (allComplete) {
                        global.db.data.rekber[activeRekberIndex].status = 'completed';
                        global.db.data.rekber[activeRekberIndex].completedAt = new Date();
                        await global.db.write();

                        await lilychan.groupLeave(activeRekber.groupId);
                        return m.reply(`✅ Pencairan berhasil dan rekber telah selesai.`);
                    }

                    return m.reply(`✅ Pencairan berhasil.`);
                } catch (error) {
                    console.error('Error processing disbursement:', error);
                    return m.reply(`❌ Gagal melakukan pencairan: ${error.message}`);
                }
            }
            break;
        

    case 'cobalist': {
        
        lilychan.sendMessage(m.key.remoteJid, {
          text: "Hello Wolrd !;", 
          footer: "© Fizzxy Dev",
          buttons: [
          {
            buttonId: '.tes',
            buttonText: {
              displayText: 'TESTING BOT'
            },
            type: 1,
          },
          {
            buttonId: ' ',
            buttonText: {
              displayText: 'PRIVATE SCRIPT'
            },
            type: 1,
          },
          {
            buttonId: 'action',
            buttonText: {
              displayText: 'ini pesan interactiveMeta'
            },
            type: 4,
            nativeFlowInfo: {
              name: 'single_select',
              paramsJson: JSON.stringify({
                title: 'message',
                sections: [
                  {
                    title: 'FizzxyDev - 2025',
                    highlight_label: '😜',
                    rows: [
                      {
                        header: 'HEADER',
                        title: 'TITLE',
                        description: 'DESCRIPTION',
                        id: 'YOUR ID',
                      },
                      {
                        header: 'HEADER',
                        title: 'TITLE',
                        description: 'DESCRIPTION',
                        id: 'YOUR ID',
                      },
                    ],
                  },
                ],
              }),
            },
          },
          ],
          headerType: 1,
          viewOnce: true
        }, { quoted: m });
    }
        break
        
case 'menu':
case 'help': 
case 'allmenu': {
let teksmenu = `MENU??
> ai
> addprem
> delprem
> tiktokdl
> tiktoksearch
> sticker
> smeme
> brat
> `;
lilychan.sendMessage(m.key.remoteJid, {
    image: { url: global.thumbnail },
    caption: teksmenu,
    footer: "© lilychanj bot",
    buttons: [
        {
            buttonId: '.owner',
            buttonText: {
                displayText: 'PEMBUAT'
            },
            type: 1
        },
        {
            buttonId: '.tqto',
            buttonText: {
                displayText: 'TQTO'
            },
            type: 1
        }
    ],
    headerType: 1,
    viewOnce: true
}, { quoted: m });
}
break
case 'tqto': 
case 'thanksto': {
    let caption = `ㅡㅈ Thanks To:
TanakaDomp ( *Creator Script* )
Avosky ( *Special Helpers* )
Kaviaan ( *Scraper* )
Alfian ( *Recode* )

YOUR NAME?`

    await lilychan.sendMessage(m.key.remoteJid, {
        image: { url: 'https://raw.githubusercontent.com/TanakaDomp/uploder-db/main/uploads/senn_sed_boy.jpeg' },
        caption: caption,
        footer: "© Ɩylꪱc𝗁α𝗇 ხᦢƚ",
        buttons: [
            {
                buttonId: '.menu',
                buttonText: {
                    displayText: '🍱 MENU'
                },
                type: 1
            }
        ],
        headerType: 1,
        viewOnce: true
    }, { quoted: m });
}
break;
case 'owner':
case 'creator': {  
  lilychan.sendMessage(from, {
    contacts: {
      displayName: `${list_staff.length} Contact`,
      contacts: list_staff
    }
  }, {
    quoted: m
  });
}
break;
case 'addprem': {
    if (!isCreator) return m.reply(mess.owner);
    let jawir = args[0] + "@s.whatsapp.net";

    if (args.length < 2) {
        return m.reply(`Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d`);
    }

    if (m.mentionedJid.length !== 0) {
        for (let i = 0; i < m.mentionedJid.length; i++) {
            addPremiumUser(m.mentionedJid[i], args[1], premium);
         lilychan.sendMessage(m.mentionedJid[i], { text: 'Congratulations you are now premium in Lilychan database 🎊' });
        }
        m.reply("Premium Success");
    } else {
        addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
        lilychan.sendMessage(jawir, { text: 'Congratulations you are now premium in Lilychan database 🎊' });
        m.reply("Success");
    }
}
break

case 'delprem': {
    if (!isCreator) return m.reply(mess.owner);
    if (args.length < 1) return m.reply(`Use :\n*#delprem* @tag\n*#delprem* number`);

    if (m.mentionedJid.length !== 0) {
        for (let i = 0; i < m.mentionedJid.length; i++) {
            premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
            fs.writeFileSync("./Storage/premium.json", JSON.stringify(premium));
        }
        m.reply("Delete success");
    } else {
        premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
        fs.writeFileSync("./Storage/premium.json", JSON.stringify(premium));
        m.reply("Success");
    }
}
break


// AI
case 'ai': { 
    if (!text) return m.reply('Ada yang bisa ku bantu?');

        try {
        let aii = await fetchJson(`https://www.tanakadomp.biz.id/api/openai/open-ai?q=${q}`);
        await lilychan.sendMessage(m.chat, { text: aii.message },{ quoted : m });                
        } catch (error) {
            console.error(error);
            await m.reply("An error occurred while processing your request.");
    }
}
break

// TOOLS
case 'sticker':
case 'stiker':
case 's': {
    if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`);

    if (/image/.test(mime)) {
        let media = await quoted.download();
        let encmedia = await lilychan.sendImageAsSticker(m.chat, media, m, {
            packname: global.packname,
            author: global.author
        });
        await fs.unlinkSync(encmedia);
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!');
        let media = await quoted.download();
        let encmedia = await lilychan.sendVideoAsSticker(m.chat, media, m, {
            packname: global.packname,
            author: global.author
        });
        await fs.unlinkSync(encmedia);
    } else {
        return m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`);
    }
}
break 

case 'smeme': {
    let respond = `Send/Reply image with caption ${prefix + command} txt-bawah|txt-atas`;
    if (!/image/.test(mime)) return m.reply(respond);
    if (!text) return m.reply(respond);

    m.reply(mess.wait);
    const atas = text.split('|')[0] ? text.split('|')[0] : '-';
    const bawah = text.split('|')[1] ? text.split('|')[1] : '-';
    
    let dwnld = await lilychan.downloadAndSaveMediaMessage(qmsg);
    let fatGans = await uploadToCatbox(dwnld);
    let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`;
    
    let pop = await lilychan.sendImageAsSticker(m.chat, smeme, m, {
        packname: packname,
        author: author
    });
    fs.unlinkSync(pop);
}
break

case 'brat': {
    let text;

    if (args.length >= 1) {
        text = args.slice(0).join(" ");
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
    } else {
        return m.reply("Input teks atau reply teks yang ingin dijadikan brat!");
    }

    if (!text) {
        return m.reply(`Penggunaan: ${prefix + command} <teks>`);
    }

    let ngawiStik = await getBuffer(`https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(text)}`);
    await lilychan.sendImageAsSticker(m.chat, ngawiStik, m, {
        packname: `𓄯ִ ── ꯭𐑈ƚꪱִ𝖼𝗄ᧉׄ𝗋 ᎓`,
        author: `${pushname} ׄ 𝅄\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ncrᧉׄdı๋𝗍 : 森晓伟 ταიακαdοოρ.ხiz.id\nAt ${hariini}\n${time2}`
    });
}
break;
// DOWNLOADER 
case 'tiktok':
case 'tiktokdl': {
    let text;
    if (args.length >= 1) {
        text = args.slice(0).join(" ");
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
    } else {
        return m.reply("Input URL atau Reply URL tiktok yang ingin di download!");
    }

    await lilychan.sendMessage(m.chat, { react: { text: "🕐", key: m.key } });

    let old = new Date();
    let tanaka = await tiktokdl(text);
    
    await lilychan.sendMessage(m.chat, { 
        video: { url: tanaka.hdplay }, 
        caption: tanaka.title 
    }, { quoted: m });
}
break; 

// SEARCH FITUR
case 'ttsearch': {
    if (!text) return m.reply(`• *Example :* .${command} jedag jedug`);
    
    lilychan.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });
    
    let lily = await tiktoksearch(`${text}`);
    await lilychan.sendMessage(m.key.remoteJid, {
    video: { url: lily.media.no_watermark },
    caption: lily.title,
    footer: "© Ɩylꪱc𝗁α𝗇 ხᦢƚ",
    buttons: [{
            buttonId: `${prefix}ttsearch ${text}`,
            buttonText: {
                displayText: '🍱 NEXT'
            },
            type: 1
        }
    ],
    headerType: 1,
    viewOnce: true
}, { quoted: m });
}
break
default:
if (global.selfMode && !isCreator) {
return;
}
if (budy.startsWith('$')) {
    if (!isCreator) return m.reply(mess.owner);
    exec(budy.slice(2), (err, stdout) => {
        if (err) return m.reply(err);
        if (stdout) return m.reply(stdout);
    });
}

if (budy.startsWith('~')) {
    if (!isCreator) return m.reply(mess.owner);
    try {
        let evaled = await eval(budy.slice(2));
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
        await m.reply(evaled);
    } catch (err) {
        await m.reply(String(err));
    }
}

if (budy.startsWith('~>')) {
    if (!isCreator) return m.reply(mess.owner);

    function Return(sul) {
        let sat = JSON.stringify(sul, null, 2);
        let bang = util.format(sat);
        if (sat === undefined) {
            bang = util.format(sul);
        }
        return m.reply(bang);
    }

    try {
        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)));
    } catch (e) {
        m.reply(String(e));
    }
}
//batas euy 
}
} catch (err) {
  let formattedError = util.format(err);
  let errorMessage = String(formattedError);
  let stackTrace = err.stack ? err.stack : "Stack trace not available";
  if (typeof err === 'string') {
    m.reply(`Terjadi error:\n\nKeterangan Error: ${errorMessage}`);
  } else {
    console.log(formattedError);
  }
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
