let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `*SEWA*
⌲ Sewa = _5k/grup (1 minggu)_
⌲ Sewa = _15k/grup (1 bulan)_
⌲ Sewa = _35k/grup (Perma)_


༅ _*KEUNTUNGAN SEWABOT*_

✧ *Bisa Menyuruh Bot Buka/Tutup Group*
✧ *Kick Orang*
✧ *Add Orang*
✧ *Anti Link On*
✧ *Bisa Memasukkan Bot Ke dalam Grup*

*❗Jika Tidak Menggunakan Bot Selama 2 minggu, bot akan leave*

◪ *Jika Minat Hubungi Owner*

https://6283852349738?text=Sewa+Bot+!

`.trim(), `${wm}`, 'Rules', '#rules', 'Owner', '#Nowner', m)
}

handler.help = ['sewa', 'sewabot']
handler.tags = ['info']
handler.command = /^sewa(bot)?$/i

module.exports = handler

let wm = global.botwm