import { flattenArray } from './utils.js';

const resumeSections = [
    [{ text: 'О себе', callback_data: 'About' }],
    [{ text: 'Опыт работы', callback_data: 'Work expirence' }],
    [{ text: 'Стек', callback_data: 'Stack' }],
    [{ text: 'Образование', callback_data: 'Education' }],
    [{ text: 'Ин. языки', callback_data: 'Language' }]
];

function _getNeighborsSection(currentSection) {
    const sections = flattenArray(resumeSections);
    const currentSectionIndex = sections.findIndex((section) => section.callback_data === currentSection);

    return {
        back: sections[currentSectionIndex - 1] || sections.at(-1),
        next: sections[currentSectionIndex + 1] || sections[0]
    };
}

function _getResumeSectionsInlineButtons(section) {
    const { back, next } = _getNeighborsSection(section);
    return [
        [
            { text: ` ${back.text} ⬅️`, callback_data: back.callback_data },
            { text: 'Вернуться ' + '↩️', callback_data: 'Resume' },
            { text: ` ${next.text} ➡️`, callback_data: next.callback_data }
        ]
    ];
}

export function getInlineKeyboards(section) {
    switch (section) {
        case 'About':
        case 'Work expirence':
        case 'Stack':
        case 'Education':
        case 'Language':
            return _getResumeSectionsInlineButtons(section);

        case 'Resume':
            return resumeSections;
        default:
            return [];
    }
}
