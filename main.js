const ImagesMK = [
    'https://i.gifer.com/origin/22/222fbac69db750f98d612eba284b300d_w200.webp',
    'https://i.gifer.com/origin/9d/9d01c69ffe1ac6ace3470bf4b61f96d0_w200.webp',
    'https://i.gifer.com/origin/ce/ce2c95c4e286110abc5abe7292012641_w200.webp',
    'https://i.gifer.com/origin/e4/e4ea520e58f46033bf97d92c3e7e7609_w200.webp',
    'https://i.gifer.com/origin/51/51400a9b5b73916bc996914bcc6e4c4e_w200.webp',
    'https://thumbs.gfycat.com/ImaginarySlipperyAsianelephant.webp',
    'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    'https://media3.giphy.com/media/xwZ0NeWQz6CuA/200w.gif',
    'https://thumbs.gfycat.com/QuarrelsomeLegalGrub.webp',
    'https://thumbs.gfycat.com/RingedSpicyKingsnake.webp',
    'https://i.gifer.com/Y60L.gif',
];

const $arenas = document.body.querySelector('.arenas');
const $randomBtn = document.body.querySelector('.button');


const getRandomFromArray = function (arr) {
    return arr[Math.abs(Math.floor(arr.length - Math.random() * arr.length))];
};

const getNumRandom = function (min, max) {
    return Math.round(min + Math.random() * (max - min))
};

const createElem = function (tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
};

const showTitle = function (title) {
    const $winTitle = createElem('div', 'loseTitle');
    $winTitle.innerText = title;
    return $winTitle;
};

const createReloadButton = function () {

    const $reloadWrap = createElem('div', 'reloadWrap');
    $reloadBtn = createElem('button', 'button');
    $reloadBtn.innerText = 'Restart';
    $reloadBtn.addEventListener('click', function () {
        window.location.reload();
    });
    $reloadWrap.appendChild($reloadBtn);
    $arenas.appendChild($reloadWrap);
    $reloadBtn.focus();

};

const checkResult = function (player, opponent) {

    if (player.hp <= 0 && opponent.hp <= 0) {

        $arenas.appendChild(showTitle(`draw`));
        $randomBtn.disabled = true;
        createReloadButton();
        player.renderHP(0);
        opponent.renderHP(0);

    } else if (player.hp <= 0) {

        player.renderHP(0);
        $arenas.appendChild(showTitle(`${opponent.name} wins`));
        $randomBtn.disabled = true;
        createReloadButton();

    } else if (opponent.hp <= 0) {

        opponent.renderHP(0);
        $arenas.appendChild(showTitle(`${player.name} wins`));
        $randomBtn.disabled = true;
        createReloadButton();
    }
};

const elHP = function () {
    return document.querySelector(`.player${this.player} .life`);
};

const renderHP = function (hp) {
    elHP.call(this).style.width = +hp + '%';
};

const changeHp = function (hp) {

    if (this.hp <= 0) {
        this.hp = 0;
    } else {
        this.hp -= hp;
    }
};

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['keyboard'],
    attack: function () {
        console.log(`${this.name} Fight...`);
    },
    changeHP: changeHp,
    elHP: elHP,
    renderHP: renderHP,
};

const player2 = {
    player: 2,
    name: 'Subzero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['keyboard'],
    attack: function () {
        console.log(`${this.name} Fight...`);
    },
    changeHP: changeHp,
    elHP: elHP,
    renderHP: renderHP,
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


$randomBtn.addEventListener('click', function () {

    player1.changeHP(getNumRandom(0, 20));
    player2.changeHP(getNumRandom(0, 20));

    player1.renderHP(player1.hp);
    player2.renderHP(player2.hp);

    checkResult(player1, player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));