import { logs, $chat } from './gameConsts.js';
import { getNumRandom } from './randomiser.js';

const { start: logStart, end: logEnd, draw: logDraw } = logs;

const generateLogs = (type, { name: pl1Name } = {}, player2 = {}) => {
    const { name: pl2Name } = player2;
    let text = '';
    const date = new Date();
    const hours = date.getHours().toString().length === 1 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes().toString().length === 1 ? `0${date.getMinutes()}` : date.getMinutes();
    const currentTime = `${hours}:${minutes}`;

    switch (type) {
        case 'start':
            text = logStart
                .replace('[time]', currentTime)
                .replace('[player1]', pl1Name)
                .replace('[player2]', pl2Name);
            break;

        case 'end':
            text = logEnd
            [getNumRandom(0, logEnd.length - 1)]
                .replace('[playerWins]', pl1Name)
                .replace('[playerLose]', pl2Name);
            break;

        case 'draw':
            text = logDraw;
            break;

        default:
            // 'defence' and 'hit' ↓
            text = `${currentTime} ${logs[type]
            [getNumRandom(0, logs[type].length - 1)]
                .replace('[playerKick]', pl1Name)
                .replace('[playerDefence]', pl2Name)} -${player2.lastEnjury} [${player2.hp}/100]`;
            break;
    }

    const el = `<p>${text}</p>`;
    $chat.insertAdjacentHTML('afterbegin', el);
};

export default generateLogs;