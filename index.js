const TelegramBot = require("node-telegram-bot-api");
const express = require("express");

const app = express();
const bot = new TelegramBot(process.env.BOT_TOKEN, {
  polling: true,
});

app.get("/", (req, res) => {
  res.send("EHC Support Bot is Running!");
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    bot.sendMessage(
      chatId,
      `👋 Welcome to EHC App Support

আপনাকে স্বাগতম।

নিচের একটি অপশন নির্বাচন করুন 👇`,
      {
        reply_markup: {
          keyboard: [
            ["💰 Deposit", "💸 Withdraw"],
            ["👤 KYC", "🎁 Bonus"],
            ["📞 Support"]
          ],
          resize_keyboard: true,
          persistent_keyboard: true
        }
      }
    );
    return;
  }

  if (text === "💰 Deposit") {
    bot.sendMessage(
      chatId,
      `💰 Deposit Guide

• Deposit Method: bKash / Nagad
• Minimum Deposit: 300 BDT
• Deposit করার পর Transaction ID সাবমিট করুন।`
    );
    return;
  }

  if (text === "💸 Withdraw") {
    bot.sendMessage(
      chatId,
      `💸 Withdrawal Guide

✅ KYC সম্পন্ন না করলে উত্তোলন করা যাবে না।

• Minimum Withdraw: 300 BDT
• Processing Time: 0-24 Hours`
    );
    return;
  }

  if (text === "👤 KYC") {
    bot.sendMessage(
      chatId,
      `👤 KYC Verification

Profile → KYC এ যান।

তারপর:
• NID/Passport/Driving License
• Selfie
• Submit করুন।`
    );
    return;
  }

  if (text === "🎁 Bonus") {
    bot.sendMessage(
      chatId,
      `🎁 Bonus Information

• New User Bonus
• Referral Bonus
• Daily Reward

বিস্তারিত জানতে সাপোর্টে যোগাযোগ করুন।`
    );
    return;
  }

  if (text === "📞 Support") {
    bot.sendMessage(
      chatId,
      `📩 আপনার সমস্যাটি এক মেসেজে লিখে পাঠান।

আমাদের সাপোর্ট টিম যত দ্রুত সম্ভব উত্তর দেবে।`
    );
    return;
  }

  bot.sendMessage(
    chatId,
    "❓ দুঃখিত, আমি প্রশ্নটি বুঝতে পারিনি। নিচের মেনু থেকে একটি অপশন নির্বাচন করুন অথবা /start লিখুন।"
  );
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("EHC Support Bot is Running...");
});
