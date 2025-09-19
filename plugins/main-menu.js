const os = require('os');
const { cmd, commands } = require('../command');
const config = require('../config');

// Small caps function
function toSmallCaps(str) {
  const smallCaps = {
    A: 'ᴀ', B: 'ʙ', C: 'ᴄ', D: 'ᴅ', E: 'ᴇ', F: 'ғ', G: 'ɢ', H: 'ʜ',
    I: 'ɪ', J: 'ᴊ', K: 'ᴋ', L: 'ʟ', M: 'ᴍ', N: 'ɴ', O: 'ᴏ', P: 'ᴘ',
    Q: 'ǫ', R: 'ʀ', S: 's', T: 'ᴛ', U: 'ᴜ', V: 'ᴠ', W: 'ᴡ', X: 'x',
    Y: 'ʏ', Z: 'ᴢ'
  };
  return str.toUpperCase().split('').map(c => smallCaps[c] || c).join('');
}

// Format uptime
function uptime() {
  const sec = process.uptime();
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = Math.floor(sec % 60);
  return `${h}h ${m}m ${s}s`;
}

cmd({
  pattern: 'menu',
  alias: ['allmenu', 'jesus'],
  desc: 'Show command menu',
  category: 'menu',
  react: '📜',
  filename: __filename
}, async (conn, mek, m, { from, pushname, isOwner }) => {

  const reply = (text) => conn.sendMessage(from, { text }, { quoted: mek });

  if (!isOwner) return reply("❌ This command is for the bot *owner only*.");

  try {
    const botName = config.BOT_NAME || '𝐀𝐍𝐓𝐀𝐆𝐎𝐍𝐈𝐒𝐓𝐄-𝐌𝐃';
    const ownerName = config.OWNER_NAME || '𝐀𝐍𝐓𝐀𝐆𝐎𝐍𝐈𝐒𝐓𝐄 𝐓𝐄𝐂𝐇';
    const menuImage = config.MENU_IMAGE_URL || 'https://files.catbox.moe/uj69m9.jpeg';
    const userName = pushname || 'User';
    const prefix = config.PREFIX || '.';
    const mode = config.MODE || 'default';

    const stages = [
      '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜  0%',
      '🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜  10%',
      '🟩🟩⬜⬜⬜⬜⬜⬜⬜⬜  25%',
      '🟩🟩🟩🟩⬜⬜⬜⬜⬜⬜  50%',
      '🟩🟩🟩🟩🟩🟩⬜⬜⬜⬜  75%',
      '🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩  100%'
    ];

    let loadingMsg = await conn.sendMessage(from, { text: `🖤 Loading...\n${stages[0]}` }, { quoted: mek });

    for (let i = 1; i < stages.length; i++) {
      await new Promise(r => setTimeout(r, 500));
      await conn.sendMessage(from, {
        edit: loadingMsg.key,
        text: `🖤 Loading...\n${stages[i]}`
      }).catch(() => {}); // ignore edit errors
    }

    await new Promise(r => setTimeout(r, 900));
    await conn.sendMessage(from, {
      edit: loadingMsg.key,
      text: `✅ Loading complete! Preparing menu...`
    }).catch(() => {});

    // Group commands by category
    const grouped = {};
    for (const plugin of commands) {
      const category = (plugin.category || 'other').toUpperCase();
      if (!grouped[category]) grouped[category] = [];
      grouped[category].push(plugin);
    }

    const ramUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(1);
    const totalRam = (os.totalmem() / 1024 / 1024).toFixed(1);

    const headerText = `
╭─❍ 𝐈𝐍𝐅𝐎𝐒 𝐁𝐎𝐓
│ • Bot      : ${botName}
│ • Version  : 1.0.0
│ • Creator  : *${ownerName}*
│ • Mode     : *${mode}*
│ • Status   : VIP BUY ONLY
│ • RAM      : 🛠️ ${ramUsage}MB / ${totalRam}MB
│🔰 Prefix: *${prefix}*
│ • Runtime  : ${uptime()}
╰────────────────`;

    let menuText = headerText + '\n\n';

    for (let category of Object.keys(grouped)) {
      menuText += `╭─❍ ${category} ║\n`;
      const cmds = grouped[category].filter(c => c.pattern).sort((a, b) => a.pattern.localeCompare(b.pattern));
      cmds.forEach(c => {
        menuText += `│► ${prefix}${toSmallCaps(c.pattern.split('|')[0])}\n`;
      });
      menuText += '╰────────────────\n';
    }
    menuText += `\n\n🔋 Powered by ${ownerName}`;

    await conn.sendMessage(from, {
      image: { url: menuImage },
      caption: menuText.trim(),
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 777,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363419768812867@newsletter',
          newsletterName: botName,
          serverMessageId: 143
        }
      }
    }, { quoted: mek });

    // Random audio
    const audioOptions = [
      'https://files.catbox.moe/3cj1e3.mp4',
      'https://files.catbox.moe/vq3odo.mp4',
      'https://files.catbox.moe/fo2kz0.mp4',
      'https://files.catbox.moe/31os2j.mp4',
      'https://files.catbox.moe/2auhjw.mp4',
      'https://files.catbox.moe/czk8mu.mp4'
    ];

    const randomAudio = audioOptions[Math.floor(Math.random() * audioOptions.length)];

    try {
      await conn.sendMessage(from, {
        audio: { url: randomAudio },
        mimetype: 'audio/mp4',
        ptt: true
      }, { quoted: mek });
    } catch (e) {
      console.error('⚠️ Audio send failed:', e.message);
    }

  } catch (e) {
    console.error('❌ Menu error:', e.message);
    await reply(`❌ Menu Error: ${e.message}`);
  }
});