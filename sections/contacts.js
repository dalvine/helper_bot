import { bot } from '../index.js';
import { myVCard } from '../helpers/contacts.js';
import 'dotenv/config.js';

const { PHONE_NUMBER } = process.env;

export default function handler(msg) {
    const chatId = msg.chat.id;

    bot.sendContact(chatId, PHONE_NUMBER, 'Vladislav', {
        last_name: 'Kozyrev',
        vcard: myVCard.getFormattedString()
    });
}
