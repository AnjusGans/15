let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.send2Button(m.chat, `
 *RULES* 

1. Dilarabg Spam Command
2. Dilarang Kirim Virtex
3. Dilarang Spam Menu Ga Jelas
4. Dilarang Telp / Vc
5. Dilarang Promosi
6. Bot Tidak Menerima Save Kontak
7. Dilarang Chat Owner Jika Tidak Penting
${wm}
`.trim(), 'Harap patuhin peraturan tersebut', '⋮☰ Menu', '.menu', 'Owner', '.nowner', m)

handler.help = ['rules']
handler.tags = ['info']

handler.command = /^(rules|peraturan)$/i

module.exports = handler

let wm = global.botwm