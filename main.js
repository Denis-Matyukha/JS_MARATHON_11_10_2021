// module1 gameConsts ↓
//
// const ImagesMK = [
//     'https://i.gifer.com/origin/22/222fbac69db750f98d612eba284b300d_w200.webp',
//     'https://i.gifer.com/origin/9d/9d01c69ffe1ac6ace3470bf4b61f96d0_w200.webp',
//     'https://i.gifer.com/origin/ce/ce2c95c4e286110abc5abe7292012641_w200.webp',
//     'https://i.gifer.com/origin/e4/e4ea520e58f46033bf97d92c3e7e7609_w200.webp',
//     'https://i.gifer.com/origin/51/51400a9b5b73916bc996914bcc6e4c4e_w200.webp',
//     'https://thumbs.gfycat.com/ImaginarySlipperyAsianelephant.webp',
//     'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
//     'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
//     'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
//     'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
//     'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
//     'https://media3.giphy.com/media/xwZ0NeWQz6CuA/200w.gif',
//     'https://thumbs.gfycat.com/QuarrelsomeLegalGrub.webp',
//     'https://thumbs.gfycat.com/RingedSpicyKingsnake.webp',
//     'https://i.gifer.com/Y60L.gif',
// ];

// const logs = {
//     start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
//     end: [
//         'Результат удара [playerWins]: [playerLose] - труп',
//         '[playerLose] погиб от удара бойца [playerWins]',
//         'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
//     ],
//     hit: [
//         '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
//         '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
//         '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
//         '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
//         '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
//         '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
//         '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
//         '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
//         '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
//         '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
//         '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
//         '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
//         '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
//         '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
//         '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
//         '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
//         '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
//         '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
//     ],
//     defence: [
//         '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
//         '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
//         '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
//         '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
//         '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
//         '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
//         '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
//         '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
//     ],
//     draw: 'Ничья - это тоже победа!'
// };

// const { start: logStart, end: logEnd, draw: logDraw} = logs;

// const HIT = {
//     head: 30,
//     body: 25,
//     foot: 20,
// }

// const ATTACK = ['head', 'body', 'foot'];

// const $arenas = document.body.querySelector('.arenas');
// const $fightBtn = document.body.querySelector('.button');
// const $formFight = document.body.querySelector('.control');
// const $chat = document.body.querySelector('.chat');
//
// module1 gameConsts ↑

// import { ImagesMK, logs, HIT, ATTACK, $arenas, $fightBtn, $formFight, $chat } from './gameConsts.js';
import { ImagesMK, HIT, ATTACK, $arenas, $formFight } from './gameConsts.js';
// const { start: logStart, end: logEnd, draw: logDraw } = logs;

// module2 randomiser ↓
//
// const getRandomFromArray = function (arr) {
//     return arr[Math.abs(Math.floor(arr.length - Math.random() * arr.length))];
// };

// const getNumRandom = function (min, max) {
//     return Math.round(min + Math.random() * (max - min))
// };
//
// module2 randomiser ↑

import { getNumRandom } from './randomiser.js';
// module5 getRandomFromArray
// module6 getNumRandom
// module7 getNumRandom
// main.js getNumRandom


// import { createElem , showTitle , createReloadButton , checkResult} from './gameFinal.js';
import { checkResult } from './gameFinal.js';
// module3 gameFinal ↓
//
// const createElem = function (tag, className) {
//     const $tag = document.createElement(tag);
//     if (className) {
//         $tag.classList.add(className);
//     }
//     return $tag;
// };

// const showTitle = function (title) {
//     const $winTitle = createElem('div', 'loseTitle');
//     $winTitle.innerText = title;
//     return $winTitle;
// };

// const createReloadButton = function () {

//     const $reloadWrap = createElem('div', 'reloadWrap');
//     const $reloadBtn = createElem('button', 'button');
//     $reloadBtn.innerText = 'Restart';
//     $reloadBtn.addEventListener('click', function () {
//         window.location.reload();
//     });
//     $reloadWrap.appendChild($reloadBtn);
//     $arenas.appendChild($reloadWrap);
//     $reloadBtn.focus();

// };

// const checkResult = function (player, opponent) {

//     let stopFightOfferReload = function () {
//         $fightBtn.disabled = true;
//         createReloadButton();
//     };

//     if (player.hp <= 0 && opponent.hp <= 0) {

//         $arenas.appendChild(showTitle(`draw`));
//         stopFightOfferReload();
//         opponent.renderHp(0);
//         player.renderHp(0);
//         generateLogs('draw');

//     } else if (player.hp <= 0) {

//         $arenas.appendChild(showTitle(`${opponent.name} wins`));
//         stopFightOfferReload();
//         player.renderHp(0);
//         generateLogs('end', opponent, player);

//     } else if (opponent.hp <= 0) {

//         $arenas.appendChild(showTitle(`${player.name} wins`));
//         stopFightOfferReload();
//         opponent.renderHp(0);
//         generateLogs('end', player, opponent);
//     }
// };
//
// module3 gameFinal ↑

// module4 hpHandlers ↓
//
// const elHp = function () {
//     return document.querySelector(`.player${this.player} .life`);
// };

// const renderHp = function () {
//     elHp.call(this).style.width = +this.hp + '%';
// };

// const changeHp = function (hpCorrection) {

//     this.lastEnjury = hpCorrection;

//     this.hp -= hpCorrection;

//     if (this.hp <= 0) {
//         this.hp = 0;
//     }

// };

// const attack = function () {
//     console.log(`${this.name} Fight...`);
// };
//
// module4 hpHandlers ↑

import { player1, player2, createPlayer } from './genPlayers.js';
// module5 genPlayer ↓
//
// const player1 = {
//     player: 1,
//     name: 'Scorpion',
//     hp: 100,
//     img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
//     weapon: ['keyboard'],
//     lastEnjury: 0,
//     changeHp,
//     renderHp,
//     attack,
//     elHp,
// };

// const player2 = {
//     player: 2,
//     name: 'Subzero',
//     hp: 100,
//     img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
//     weapon: ['keyboard'],
//     lastEnjury: 0,
//     changeHp,
//     renderHp,
//     attack,
//     elHp,
// };

// const createPlayer = function (playerObj) {

//     let $player = createElem('div', `player${playerObj.player}`);
//     let $progressBar = createElem('div', 'progressbar');
//     let $life = createElem('div', 'life');
//     let $nameEl = createElem('div', 'name');

//     $life.style.width = `${playerObj.hp}%`;
//     $nameEl.innerText = playerObj.name;

//     $progressBar.append($life, $nameEl);

//     let $character = document.createElement('div');
//     $character.classList.add('character');

//     let $img = document.createElement('img');

//     $img.src = getRandomFromArray(ImagesMK);
//     $character.appendChild($img);

//     $player.append($progressBar, $character);

//     return $player;
// };
//
// module5 genPlayer ↑

// module6 makeAttack ↓
// 
// const enemyAttack = function () {
//     const e_hit = ATTACK[getNumRandom(0, 2)];
//     const e_defence = ATTACK[getNumRandom(0, 2)];

//     return {
//         e_value: getNumRandom(0, HIT[e_hit]),
//         e_hit,
//         e_defence,
//     }
// };

// const playerAttack = function () {

//     let p_value, p_hit, p_defence;

//     for (let item of $formFight) {
//         let { name: iName, value: iValue } = item;

//         if (item.checked && iName === 'hit') {
//             p_value = getNumRandom(0, HIT[iValue]);
//             p_hit = iValue;
//         }
//         if (item.checked && iName === 'defence') {
//             p_defence = iValue;
//         }
//         // item.checked = false;
//     }

//     return {
//         p_value,
//         p_hit,
//         p_defence
//     };
// };
//
// module6 makeAttack ↑
import { enemyAttack, playerAttack } from './makeAttack.js';
// import { enemyAttack, playerAttack } from './makeAttack.js';
// import enemyAttack from './makeAttack.js';
// import playerAttack from './makeAttack.js';

// module7 genLogs ↓
// 
// const generateLogs = function (type, { name: pl1Name } = {}, player2 = {}) {
//     const { name: pl2Name } = player2;
//     let text = '';
//     const date = new Date();
//     const hours = date.getHours().toString().length === 1 ? `0${date.getHours()}` : date.getHours();
//     const minutes = date.getMinutes().toString().length === 1 ? `0${date.getMinutes()}` : date.getMinutes();
//     const currentTime = `${hours}:${minutes}`;

//     switch (type) {
//         case 'start':
//             text = logStart
//                 .replace('[time]', currentTime)
//                 .replace('[player1]', pl1Name)
//                 .replace('[player2]', pl2Name);
//             break;

//         case 'end':
//             text = logEnd
//             [getNumRandom(0, logEnd.length - 1)]
//                 .replace('[playerWins]', pl1Name)
//                 .replace('[playerLose]', pl2Name);
//             break;

//         case 'draw':
//             text = logDraw;
//             break;

//         default:
//             // 'defence' and 'hit' ↓
//             text = `${currentTime} ${logs[type]
//             [getNumRandom(0, logs[type].length - 1)]
//                 .replace('[playerKick]', pl1Name)
//                 .replace('[playerDefence]', pl2Name)} -${player2.lastEnjury} [${player2.hp}/100]`;
//             break;
//     }

//     const el = `<p>${text}</p>`;
//     $chat.insertAdjacentHTML('afterbegin', el);
// };
// 
// module7 genLogs ↑
import generateLogs from "./genLogs.js";

$formFight.addEventListener('submit', function (e) {
    e.preventDefault();

    const { e_value, e_hit, e_defence } = enemyAttack();
    const { p_value, p_hit, p_defence } = playerAttack();

    if (p_defence !== e_hit) {
        player1.changeHp(getNumRandom(0, e_value));
        player1.renderHp();
        generateLogs('hit', player2, player1);
    }

    if (e_defence !== p_hit) {
        player2.changeHp(getNumRandom(0, p_value));
        player2.renderHp();
        generateLogs('hit', player1, player2);
    }

    checkResult(player1, player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

generateLogs('start', player1, player2);