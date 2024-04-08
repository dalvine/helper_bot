import TelegramBot from 'node-telegram-bot-api';

import 'dotenv/config.js';
import { myVCard } from './helpers/contacts.js';

const { ACCESS_KEY, PHONE_NUMBER } = process.env;

const bot = new TelegramBot(ACCESS_KEY, { polling: true });

const getMessageOfQuery = (data) => {
    if (data === 'About') return 'Обо мне';
    else return 'Tecn';
};

bot.onText('/start', (msg) => {
    const chatId = msg.from.id;

    bot.sendMessage(
        chatId,
        'Очень рад, что вас заинтересовала моя кандидатура. Давайте знакомиться ближе. Что вас интересует?',
        {
            reply_markup: {
                keyboard: [[{ text: 'Резюме' }, { text: 'Контакты' }], [{ text: 'Проекты' }]],
                is_persistent: true,
                resize_keyboard: true
            }
        }
    );
});

bot.onText('Контакты', (msg) => {
    const chatId = msg.chat.id;

    bot.sendContact(chatId, PHONE_NUMBER, 'Vladislav', {
        last_name: 'Kozyrev',
        vcard: myVCard.getFormattedString()
    });
});

bot.onText('Резюме', (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, 'Что именно вас интересует?', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'О себе', callback_data: 'About' }],
                [{ text: 'Опыт работы', callback_data: 'Work expirence' }],
                [{ text: 'Стек', callback_data: 'Stack' }],
                [{ text: 'Образование', callback_data: 'Education' }],
                [{ text: 'Ин. языки', callback_data: 'Language' }]
            ]
        }
    });
});

bot.on('callback_query', (query) => {
    if (query.data.includes('back_to_resume')) {
        bot.editMessageText('Что именно вас интересует?', {
            chat_id: query.message.chat.id,
            message_id: query.message.message_id,
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'О себе', callback_data: 'About' }],
                    [{ text: 'Опыт работы', callback_data: 'Work expirence' }],
                    [{ text: 'Стек', callback_data: 'Stack' }],
                    [{ text: 'Образование', callback_data: 'Education' }],
                    [{ text: 'Ин. языки', callback_data: 'Language' }]
                ]
            }
        });
    } else {
        bot.editMessageText(getMessageOfQuery(query.data), {
            chat_id: query.message.chat.id,
            message_id: query.message.message_id,
            reply_markup: {
                inline_keyboard: [[{ text: 'Назад', callback_data: JSON.stringify({ action: 'back_to_resume' }) }]]
            }
        });
    }
});
