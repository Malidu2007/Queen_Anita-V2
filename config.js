//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "true";
global.video = "true";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "94767748006";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "treu";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://tenor.com/view/power-chainsawman-gif-25501450";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUNDbVdxeFVVRmdvMXFVUThHMnZ3by9jbTVXc1R1OFh3eU81RDg1MDdFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieG1SaXBqMlRTcktWajY5NDVmUFBLZHc1eWRoOHdycUl4V0tFY3hYU0N6WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQkJPS2lJc2hhaG9aK1ZoZTNEMEJxQ1d0Uy8wcVBkS21PR1ZQS0E2Rkg4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQmJ3bzZXc3lLYndWUjNtUXppcnF0d0JrcjBlKzJXZlFuMWI5TmsySVRRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhFVTR6Q1hpRWxqeElGRzlIQVFzMXdSOVlZYnRnZ1RBd3NUNDltbWpsbFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldRdGM4YUVONnRlRHBOMjQ4TnhKVmYzM0Q5Y2wyV1JxNU1SN1RSdXJGRUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU09pcnViWHBiYUdhM0hmbngyaTRnM0pUYUFnUFl1SjEzdHAxRDJXTDEzQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWFjZFo1KzJNdmtMTzN0U0NEbnBFaHppYmJ2cElEU2tXMVBMWmFrSDF3Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhEc3hOL05tSlJxM3ZtMHZvd0lPK21odlAvVjhOenl2RHJVbFpvSUtTS3gxdXI0WTZkVGI0WXpCTEwzNklhc0dkT3Vyd2lMdlZtN2RpZE9Cb2tRQmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OSwiYWR2U2VjcmV0S2V5IjoiNElQNEFHY1N6YnZ3VUJGY2U3MDd3cEVDdXhlSUpTSmx2WWZGdXc5NVFFND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDc2Nzc0ODAwNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1RTI2Qzk5QzJBOTE0NzI2QzQ5MDc0REZFODRDMDAwNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNjMyMDQ1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJaUW9lbEszeFREUzVCSUU0TUx3NVJ3IiwicGhvbmVJZCI6ImFmYzM0ZGU4LTI3YzItNDU2Zi1hZTc2LTg1ZTc4ZDAwMzM0ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvbytrTCtZVVpKODZRd0pxOWNCL2h1OHZtYTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU83UDFVaVVoNVNMMUVDd3EydkhVZGdwbEtzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5CSjQyNTFHIiwibWUiOnsiaWQiOiI5NDc2Nzc0ODAwNjo2NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJ+SGVzaHUgYmJofiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS1NLaXZjRkVOMk90YlVHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNW9tS3dmS1NleG5rTVY5Yk9mQXF4Mk9DamZSU3RvRWJrYitkSzNscjl5ND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUnlzM240YVRuUzJ5dHRXSVZXVjhEcUtFd2Y5ZFU0RU0xUG5hL0VNNEFNMXd1QTRXek1rdlhoWVpnVVVhREY4dVlmNTlmQU1nQ0RqWnd1ejZpWjVnQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IkxqT01KbGk5S0t0bEZaWVRZU016bmdBZlRqcDM5YnZoQU9DaXcxZTYwUUJyVDhXU3ZKMGIrbGR2UW1sN2xUSGwvdmIvN09rTkFWQXlEY1QycDJ0ZGlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3Njc3NDgwMDY6NjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZWFKaXNIeWtuc1o1REZmV3pud0tzZGpnbzMwVXJhQkc1Ry9uU3Q1YS9jdSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjYzMjA0MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJV2QifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
