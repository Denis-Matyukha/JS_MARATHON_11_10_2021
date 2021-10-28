import { ImagesMK } from "./gameConsts.js";
import { createElem } from "./gameFinal.js";
import { getRandomFromArray } from "./randomiser.js";

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

export default class Player {
    constructor(props) {
        this.player = props.player;
        this.weapon = props.weapon;
        this.name = props.name;
        this.img = props.img;
        this.hp = props.hp;
        this.lastEnjury = 0;
        this.elHp = () => document.querySelector(`.player${this.player} .life`);
    };

    renderHp = () => this.elHp.call(this).style.width = +this.hp + '%';
    attack = () => console.log(`${this.name} Fight...`);
    changeHp = (hpCorrection) => {
        this.lastEnjury = hpCorrection;
        this.hp -= hpCorrection;
        if (this.hp <= 0) this.hp = 0;
    };

};