const TelegramBot = require("node-telegram-bot-api");
const express = require("express");

const app = express();

const bot = new TelegramBot(process.env.BOT_TOKEN, {
  polling: true,
});

app.get("/", (req, res) => {
  res.send("EHC Support Bot is Running!");
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "👋 Welcome to EHC Support Bot!\n\nআমি আপনার অফিসিয়াল সাপোর্ট সহকারী।"
  );
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
