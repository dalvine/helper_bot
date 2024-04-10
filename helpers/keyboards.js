export function getKeyboards(section) {
    switch (section) {
        case 'Main':
            return [[{ text: 'Резюме' }, { text: 'Контакты' }], [{ text: 'Проекты' }]];
        default:
            return [];
    }
}
