const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/6ed51d9ca3914432e9df4.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ 👑🌎☠" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348084644182,2347073082957";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/6ed51d9ca3914432e9df4.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_07_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MixcbiAgICAgICAgNjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4MixcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3LFxuICAgICAgICA0MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDU0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjksXG4gICAgICAgIDg3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA2OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgODksXG4gICAgICAgIDE1LFxuICAgICAgICA4NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI2LFxuICAgICAgICAxODksXG4gICAgICAgIDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODksXG4gICAgICAgIDEzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA1OSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEsXG4gICAgICAgIDYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMixcbiAgICAgICAgNTksXG4gICAgICAgIDIwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDQwLFxuICAgICAgICA4NixcbiAgICAgICAgMTYsXG4gICAgICAgIDYwLFxuICAgICAgICA2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMixcbiAgICAgICAgMjI2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxODIsXG4gICAgICAgIDg2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI3LFxuICAgICAgICA5NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0LFxuICAgICAgICA4NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIitlTWtSNGw4OUR3cXpJZW5QaldDSjArdUFJMGs5bjNtZEl6VHlDYm5BZnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImJ3S0gxOWF3VGtlMm9fbEVWb0tzTkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTc3Y2QwY2MtYWIwOC00ZmYzLWI4NTUtYTJjZGM4MTdiNWQwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgxLFxuICAgICAgMjIsXG4gICAgICA1LFxuICAgICAgMjUyLFxuICAgICAgNjksXG4gICAgICAxNDEsXG4gICAgICAyMTIsXG4gICAgICA0OCxcbiAgICAgIDE5OCxcbiAgICAgIDIzLFxuICAgICAgMTQwLFxuICAgICAgMTI3LFxuICAgICAgMTA3LFxuICAgICAgODksXG4gICAgICAxNTAsXG4gICAgICAyNixcbiAgICAgIDI0NSxcbiAgICAgIDgwLFxuICAgICAgMTA4LFxuICAgICAgMjQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMCxcbiAgICAgIDI0NixcbiAgICAgIDE3MCxcbiAgICAgIDIxNCxcbiAgICAgIDIwMCxcbiAgICAgIDU4LFxuICAgICAgMTQ0LFxuICAgICAgMjM5LFxuICAgICAgMTYwLFxuICAgICAgMTI3LFxuICAgICAgMTU5LFxuICAgICAgNTYsXG4gICAgICAxMTksXG4gICAgICAxMzEsXG4gICAgICAyNDYsXG4gICAgICAxMDAsXG4gICAgICA4NSxcbiAgICAgIDc3LFxuICAgICAgMTgzLFxuICAgICAgOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRVFINUY5RFRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwODQ2NDQxODI6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0MzAyNjk5OTkwMjM3OToyM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQaVF6b2dGRUpTeXY3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhOdHJ0RWVDQ2Z4YmxsQzFZMGduNTQwMlRaR1ZuVC85K05mRzRVY0Z4Q2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZkpkSVNnTGQyb0dTM1VZbmwwSUNYUjdmRElyaE80ZWV6ekhVd2xyRDdOYUVuYkNQNGluRGtlc0IrU1kzNDM5UFY2SlUyRDl3YTZCa1NvT0pvOHJFRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYWZMNDlwVjlyd2Z6bGxsdjZCYitrZnJ3TXkzTHRmSlIvMmIrQk9qTkNmdFdWZE0yQVY3a2xGTG51M21LUFEwUi9SS2h5ZEVlaUgxQjMxVDhvNHZ5anc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA4NDY0NDE4MjoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDcwMzI2M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ 👑🌎☠" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ąҍօѵҽ ąӀӀ 👑🌎☠",
  packname: process.env.PACK_NAME || "ąҍօѵҽ ąӀӀ 👑🌎☠",
  botname : process.env.BOT_NAME  || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ 👑🌎☠",
  ownername:process.env.OWNER_NAME|| "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ 👑🌎☠",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
