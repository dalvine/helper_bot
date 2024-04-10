import { bot } from '../index.js';
import { getInlineKeyboards } from '../helpers/inlineKeyboards.js';

export default function handler(msg) {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, 'Что именно вас интересует?', {
        reply_markup: {
            inline_keyboard: getInlineKeyboards('Resume')
        }
    });
}
