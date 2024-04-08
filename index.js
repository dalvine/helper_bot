import TelegramBot from 'node-telegram-bot-api';
import 'dotenv/config.js';

const { ACCESS_KEY, PHONE_NUMBER } = process.env;

const bot = new TelegramBot(ACCESS_KEY, { polling: true });

bot.onText('/start', (msg) => {
    const chatId = msg.from.id;
    bot.se;

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
    const msgId = msg.message_id;
    bot.deleteMessage(chatId, msgId);

    bot.sendContact(chatId, PHONE_NUMBER, 'Vladislav', {
        last_name: 'Kozyrev'
    });
});
