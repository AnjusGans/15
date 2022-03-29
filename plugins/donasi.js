let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `PEMBOHONG KAU PEMBOHONG
`.trim(), `${wm}`, 'Owner', '.owner')

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(si|te)$/

module.exports = handler

let wm = global.botwm