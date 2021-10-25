module.exports = {
  prefix: "!",
  status: {
    		name: "SuperTicket",
    		type: "watching"
  },
  ExpressServer: true, //If you wanted to make the website run or not
  Port: 3000, //Which port website gonna be hosted
   emojis: {
        giveaway: "🎉",
        special: "🔴",
        general: "870914038933098517"
  },
  ticketembed: {
    title: "Tickets",
    description: "To create a ticket, click the button that suits your request!",
    footer: "By Super Store"
  },
token: process.env.TOKEN || "ODkyNjQ5NzA5ODc1OTA4NjE4.YVP-0w.QACmT5LT4OzRoVNMKUUz80cDTMM",
mongo: process.env.MONGO || "mongodb+srv://Aryan:v62DVRBsQQthGPgU@bot.nk7zs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
};
