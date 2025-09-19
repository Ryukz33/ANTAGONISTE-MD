const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANTAGONISTE~MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU94UEFDUWhVRHpONTRkTGt2T2VxRnVZRk1mUlZVdHlMZ3BPZ21VQmVHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVVDcSt6am13MDh3YnZnNlRML2o0L3I4WXBrSVArb2dLR29EZWQ0azFCQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTFVGVi8vZVNuL0tLcGRDR0lneTlMQ2l0Rk85emhIY2dtVUJ4dlNpb2tRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRHVDNy9LbXNNbGFiTGc0eGtueVRHQS9UbTNWdXJ6ZW5TYVQzM3JWQUFzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlNeVl3b2k4dml2RVdqdDRqNzZkK1Jmak4vV09FbGJEWndmMG40bFMrbWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJQOUhEMnhFNThaTWxuQVRDLzgrV1p2N08rUlFTYWhMSlgzME9abWlCbUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUlYOHoxYktwYTBrZGxVV0NhY1J4bWxOQXZqRTNCM2Q3b21PSGl5VG1FYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibWhBampWT3hucTBFUTFnNklwZXFjMWhLV3dDSVI1bkxrRFYveDByS3VIOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRJWGxEY1VNb3ZpM2NaZWhjQ0JUWjA2QlRJT3habmlKcUwzakZmM1JvK3hDbEEvZE01SjZWZ1NESHZUUnREaE10dnRRVDNTdkxWdEFFZEd1bndDVUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjEsImFkdlNlY3JldEtleSI6IlJldTdDNy9mS09KOGU2SXN6ZkRlUzQ1R2F0andGNjdWZ2RoNlN4MXYxd289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ik1IWkdRQ0RTIiwibWUiOnsiaWQiOiIxMzA1ODk2MjQ0MzozQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjM0NTc0MzcwMDY2NTM2OjNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQZkMrWXNERUo2V3Q4WUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGZm1OM3o3RWNKM09LQVNBMGdDdFo5bUxZOVhpbkxlZ2tSUXhMV2RBbW1RPSIsImFjY291bnRTaWduYXR1cmUiOiJ2RXZSYmYyMVpKZmVCL0ZCMkZRcVRHYzdxWW8rcDYrRXJnZFBIczVxR0srSGhBdEFZcnphc2tFSzZFMFlqYjY4b2xEcXhBUnRGc0tPcjJWak5UblBqUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoieW5od0lQZFhPZXFLcDErait3bm9FeEdEbjFsQ2RSa1FjU0lnQnhFN05NQnN3R0JKa0hqejRkY0JoMG5uVXhaZzRGL0todTFvRVJoZ3VIdUlaNUphQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxMzA1ODk2MjQ0MzozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJYNWpkOCt4SENkemlnRWdOSUFyV2ZaaTJQVjRweTNvSkVVTVMxblFKcGsifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU4MzE3MzQ3LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJCcCJ9",
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ANTAGONISTE-MD*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "true",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/uj69m9.jpeg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ANTAGONISTE-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ANTAGONISTE-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "18296343335",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝘈𝘕𝘛𝘈𝘎𝘖𝘕𝘐𝘚𝘛𝘌 𝘵𝘦𝘤𝘩",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ by 𝘈𝘕𝘛𝘈𝘎𝘖𝘕𝘐𝘚𝘛𝘌 𝘵𝘦𝘤𝘩*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/uj69m9.jpeg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *ANTAGONISTE-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "true",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "13058962443",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
};
