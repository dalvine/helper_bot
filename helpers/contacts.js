import vCard from 'vcards-js';

import 'dotenv/config.js';

const { PHONE_NUMBER, EMAIL } = process.env;

export const myVCard = vCard();

myVCard.note = 'Какой-то коммент';
myVCard.firstName = 'Vladislav';
myVCard.cellPhone = PHONE_NUMBER;
myVCard.birthday = new Date(826183800000);
myVCard.email = EMAIL;
myVCard.gender = 'M';
myVCard.isOrganization = 'АО Росин.тел';
