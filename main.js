// default canonical GIFs:
// const ImagesMK = [
//     'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
//     'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
//     'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
//     'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
//     'http://reactmarathon-api.herokuapp.com/assets/subzero.gif'
// ];

const ImagesMK = [
    'https://i.gifer.com/Y60L.gif',
    'https://media3.giphy.com/media/xwZ0NeWQz6CuA/200w.gif',
    'https://thumbs.gfycat.com/QuarrelsomeLegalGrub.webp',
    'https://thumbs.gfycat.com/RingedSpicyKingsnake.webp',
    'https://thumbs.gfycat.com/ImaginarySlipperyAsianelephant.webp',
    'https://i.gifer.com/origin/22/222fbac69db750f98d612eba284b300d_w200.webp',
    'https://i.gifer.com/origin/9d/9d01c69ffe1ac6ace3470bf4b61f96d0_w200.webp',
    'https://i.gifer.com/origin/ce/ce2c95c4e286110abc5abe7292012641_w200.webp',
    'https://i.gifer.com/origin/e4/e4ea520e58f46033bf97d92c3e7e7609_w200.webp',
    'https://i.gifer.com/origin/51/51400a9b5b73916bc996914bcc6e4c4e_w200.webp'
];

const $arenas = document.body.querySelector('.arenas');
const $randomBtn = document.body.querySelector('.button');

const getRandomFromArray = function (arr) {
    return arr[Math.abs(Math.floor(arr.length - Math.random() * arr.length))];
};

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['keyboard'],
    attack: function () {
        console.log(`${this.name} Fight...`);
    }
};

const player2 = {
    player: 2,
    name: 'Subzero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['keyboard'],
    attack: function () {
        console.log(`${this.name} Fight...`);
    }
};

const createElem = function (tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
};

const createPlayer = function (playerObj) {

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

const getNumRandom = function (min, max) {
    return Math.round(min + Math.random() * (max - min))
};

const showTitle = function (title) {
    const $winTitle = createElem('div', 'winTitle');
    $winTitle.innerText = title;
    return $winTitle;
};

const checkResult = function (player, opponent) {

    const $playerLife = document.querySelector(`.player${player.player} .life`);
    const $opponentLife = document.querySelector(`.player${player.player} .life`);

    const existedTitle = $arenas.querySelector('.winTitle');
    if (existedTitle) existedTitle.remove();


    if (player.hp <= 0 && opponent.hp <= 0) {
        $arenas.appendChild(showTitle(`draw`));
        $randomBtn.disabled = true;
        $playerLife.style.width = 0 + '%';
        $opponentLife.style.width = 0 + '%';

        console.log(player.hp, `  player.hp     `, opponent.hp, `  opponent.hp`);

    } else if (player.hp <= 0) {
        $playerLife.style.width = 0 + '%';
        $arenas.appendChild(showTitle(`${opponent.name} wins`));
        $randomBtn.disabled = true;

        console.log(player.hp, `  player.hp     `, opponent.hp, `  opponent.hp`);
    } else if (opponent.hp <= 0) {
        $opponentLife.style.width = 0 + '%';
        $arenas.appendChild(showTitle(`${player.name} wins`));
        $randomBtn.disabled = true;

        console.log(player.hp, `  player.hp     `, opponent.hp, `  opponent.hp`);
    }

};

const changeHp = function (player) {
    const $playerLife = document.querySelector(`.player${player.player} .life`);
    const opponent = player.player === 1 ? player2 : player1;

    player.hp -= getNumRandom(0, 20);
    $playerLife.style.width = player.hp + '%';

    checkResult(player, opponent);
};

$randomBtn.addEventListener('click', function () {
    changeHp(player1);
    changeHp(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));