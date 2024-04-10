import TelegramBot from 'node-telegram-bot-api';

import 'dotenv/config.js';
import callbackQuery from './events/callbackQuery.js';
import handlerResume from './sections/resume.js';
import handlerContacts from './sections/contacts.js';
import { getKeyboards } from './helpers/keyboards.js';

const { ACCESS_KEY } = process.env;

export const bot = new TelegramBot(ACCESS_KEY, { polling: true });

bot.onText('/start', (msg) => {
    const chatId = msg.from.id;

    bot.sendMessage(
        chatId,
        'Очень рад, что вас заинтересовала моя кандидатура. Давайте знакомиться ближе. Что вас интересует?',
        {
            reply_markup: {
                keyboard: getKeyboards('Main'),
                is_persistent: true,
                resize_keyboard: true
            }
        }
    );
});

bot.onText('Контакты', handlerContacts);

bot.onText('Резюме', handlerResume);

bot.on('callback_query', callbackQuery);
