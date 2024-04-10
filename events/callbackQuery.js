import { getInlineKeyboards } from '../helpers/inlineKeyboards.js';
import { bot } from '../index.js';

const getMessageOfQuery = (data) => {
    if (data === 'About') return 'Обо мне';
    else return 'Tecn';
};

export default function callbackQuery(query) {
    const { data } = query;

    if (data.includes('Resume')) {
        bot.editMessageText('Что именно вас интересует?', {
            chat_id: query.message.chat.id,
            message_id: query.message.message_id,
            reply_markup: {
                inline_keyboard: getInlineKeyboards(data)
            }
        });
    } else {
        bot.editMessageText(getMessageOfQuery(data), {
            chat_id: query.message.chat.id,
            message_id: query.message.message_id,
            reply_markup: {
                inline_keyboard: getInlineKeyboards(data)
            }
        });
    }
}
