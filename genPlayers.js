import { ImagesMK } from "./gameConsts.js";
import { createElem } from "./gameFinal.js";
import { getRandomFromArray } from "./randomiser.js";

// export const player1 = {
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

// export const player2 = {
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


export const createPlayerElement = (playerObj) => {

    let $player = createElem('div', `player${playerObj.player}`);
    let $progressBar = createElem('div', 'progressbar');
    let $life = createElem('div', 'life');
    let $nameEl = createElem('div', 'name');

    $life.style.width = `${playerObj.hp}%`;
    $nameEl.innerText = playerObj.name;

    $progressBar.append($life, $nameEl);

    let $character = document.createElement('div');
    $character.classList.add('character');

    let $img = document.createElement('img');

    $img.src = getRandomFromArray(ImagesMK);
    $character.appendChild($img);

    $player.append($progressBar, $character);

    return $player;
};

// import Player from './genPlayers.js';


// function elHp() {
//     return document.querySelector(`.player${this.player} .life`);
// };

// function renderHp() {
//     elHp.call(this).style.width = +this.hp + '%';
// };

// function changeHp(hpCorrection) {

//     this.lastEnjury = hpCorrection;

//     this.hp -= hpCorrection;

//     if (this.hp <= 0) {
//         this.hp = 0;
//     }

// };

// function attack() {
//     console.log(`${this.name} Fight...`);
// };

export default class Player {
    constructor(props) {
        this.player = props.player;
        this.weapon = props.weapon;
        this.name = props.name;
        this.img = props.img;
        this.hp = props.hp;
        this.lastEnjury = 0;
        this.elHp = () => {
            let el = document.querySelector(`.player${this.player} .life`);
            console.log(`el→`,el);
            return el;
        };
    };

    renderHp = () => this.elHp.call(this).style.width = +this.hp + '%';
    attack = () => console.log(`${this.name} Fight...`);
    changeHp = (hpCorrection) => {
        this.lastEnjury = hpCorrection;
        this.hp -= hpCorrection;
        if (this.hp <= 0) this.hp = 0;
    };

};

// export const player1 = new Player({
//     player: 1,
//     name: 'Scorpion',
//     hp: 100,
//     img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
//     weapon: ['keyboard'],
// });

// export const player2 = new Player({
//     player: 2,
//     name: 'Subzero',
//     hp: 100,
//     img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
//     weapon: ['externalHdd1TB'],
// });

// export default Player;