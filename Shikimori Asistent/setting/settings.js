// BASE CREATE BY RUZTANXD 
/* JANGAN DI HPS HARGAI GOBLOK

• APA BILAH KEHAPUS CREDITS MAKA DI ANGGAP DOSA BESAR 

# RuztanXD Bukan Sepuh ataupun Pengocok jandal RuztanXD cuma mau di anggap ada:) */


require("../all/module.js")

//========== Setting Owner ==========//
global.owner = "6285824689238"
global.idsaluran = "120363282401625654@newsletter"
global.namaowner = "RuztanXD"
global.namabot = "Shikimori Asistent"
global.linkyt = 'https://www.youtube.com/@Ruztanxd'
global.sgc = 'https://chat.whatsapp.com/LvuFe20VLrc2Y1NrsRUe1i'
global.apido = 'api digital ocean lu'
//SAWERIA 
global.mail = 'rustanrustan.10jf@gmail.com' // 

//========== Setting Event ==========//
global.tempatDB = 'database.json' // Jangan ubah
global.autoread = false
global.anticall = true
global.autoreadsw = false
global.owneroff = false
global.autopromosi = false

//======== SETTING ORDER KOUTA MU======///
global.merchantIdOrderKuota = "OK1084915"
global.apiOrderKuota = "825435617314000191084915OKCT29ACCFCE77336E2CDC31A805C74669B7"
global.qrisOrderKuota = "00020101021126670016COM.NOBUBANK.WWW01189360050300000879140214534142077122560303UMI51440014ID.CO.QRIS.WWW0215ID20232590057830303UMI5204481253033605802ID5913KASIHSTORE1116008MAKASSAR61059011162070703A0163043989"


//========== Setting Foto ===========//
global.imgreply = "https://pomf2.lain.la/f/74cm5j1u.jpg"
global.thumb = "https://pomf2.lain.la/f/7zm6e3wx.jpg"
global.imgmenu = fs.readFileSync("./media/Menu.jpg")

//========== Setting Panell ==========//
// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID

////======== SERVER PUBLIC=======//
global.domain = "https://gajelas.harleyhosttt.my.id"
global.apikey = "ptla_Sm8NVlgD3WsPDNJPSQ9F0NWDc8hKyNNfK6G9I3L6L4T" //ptla
global.capikey = "ptlc_0JQEKurkVMCZtxQIDtKS8Q5A6dOeGhVUXBbGWjXbn8Z" //ptlc

///========== SERVER PRIVAT ====== ///
global.domainn = "https://gajelas.harleyhosttt.my.id"
global.apikeyy = "ptla_Sm8NVlgD3WsPDNJPSQ9F0NWDc8hKyNNfK6G9I3L6L4T" //ptla
global.capikeyy = "ptlc_0JQEKurkVMCZtxQIDtKS8Q5A6dOeGhVUXBbGWjXbn8Z" //ptlc


//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi "Gak Ada"
global.dana = "082192465791"
global.gopay = "Belum Tersedia"
global.ovo = "Belum Tersedia"
global.qris = "https://telegra.ph/file/5034a9097839821fb69a0.jpg"
                             

//========= Setting Message =========//
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Done Kak ✅", 
"wait": "⏳Memproses . . .", 
"group": "Command Ini Hanya Untuk Didalam Grup", 
"private": "Command Ini Hanya Untuk Di Private Chat", 
"admin": "Command Ini Hanya Untuk Admin Grup", 
"adminbot": "Command Ini Dapat Di Gunakan Ketika Bot Menjadi Admin", 
"owner": "Maaf Command Ini Hanya Untuk Owner Bot", 
"developer": "Command Ini Hanya Untuk Developer Bot!"
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})