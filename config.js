// =============================================
// VERSION UPDATE
// UPDATE TERAKHIR 15 November 2024 JAM 00:00 WIB
// GITHUB : TanakaDomp
// VERSION : 1.1.0
// =============================================

const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')

//====== [ SETTING ORDERKUOTA PAYMENT GATEWAY ] ======//
global.apiToken = ''
global.codeqr = ''
global.merchantId = ''
//====== [ SETTING PAIRING & TOKEN ] ========//
global.pairing = '6285785313072'
//====== [ SETTING OWNER  ] ========//
global.owner = [ '6285785313072' ]
global.owner0 = '6285785313072@s.whatsapp.net'
global.ownernumber = '6285785313072'
global.ownername = "森晓伟 Domp"
//====== [ SETTING BOT ] ========//
global.botname = 'Alfikyy Bot'
global.botnumber = '6285785313072'
global.bot_version = '1.1.0'
global.prefa = ['/','!','.','#','&']
//====== [ SETTING PACKNAME ] ========//
global.packname = 'ׄ 𓄯ִ ── ꯭𐑈ƚꪱִ𝖼𝗄ᧉׄ𝗋 ᎓  lylꪱc𝗁α𝗇 ხᦢƚ  '
global.author = `Crᧉׄdı๋𝗍 : 森晓伟 ταიακαdοოρ.ხiz.id\nAt ${hariini}\n${time}`
global.themeemoji = '🍁'
global.wm = " TanakaSense.js."
global.idch = '--@newsletter'
global.titlech = '--'
//====== [ THEME URL & URL ] ========//
global.thumbnail = 'https://files.catbox.moe/p4g53y.jpg'
global.Url = 'https://whatsapp.com/channel/0029VaW25g5F1YlKczMRmd1h'
//====== [ GLOBAL MESSAGES  ] ========//
global.mess = {
    done: '*( 🎂 )* Success!!',
    prem: 'Sorry, this feature can only be used by premium users.\nIf you want to buy premium, type *.buyprem*',
    admin: '*( Error )* Fitur ini khusus untuk penjabat!!',
    botadmin: '*( Error )* Sepertinya lilychanj bukan admin!!',
    owner: '*( Error )* Kamu bukan ownerkuu!!',
    group: '*( Error )* Fitur ini khusus dalam group!!',
    private: '*( Error )* Fitur ini hanya untuk private chat!!',
    wait: '*( Loading )* Chotto matte...',
    error: 'Error!',
}

//  - AKHIR -
//  JIKA ADA YANG KURANG MENGERTI SILAHKAN CHAT ADMIN DI WHATSAPP MAUPUN DI TELEGRAM OKEY
//  - Number : +62 815 4117 7589
//  - Telegram : @tanaka_senn


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`Update'${__filename}'`)
    delete require.cache[file]
    require(file)
})