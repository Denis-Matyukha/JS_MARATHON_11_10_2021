
// на момент выполнения дз  
// gif картинки из Notion не всегда загружались, 
// (возможно, проблема на моей стороне, но решить её не получилось)
// поэтому массив с картинками был временно заменён ↓

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


const playerLose = function (name) {
    const $loseTitle = createElem('div', 'loseTitle');
    $loseTitle.innerText = `${name} lose`;
    console.log(`playerLose_Fn`);
    console.log($loseTitle);
    return $loseTitle;
};

const changeHp = function (player) {
    // const $playerLife = document.querySelector('.player2 .life');
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    // const $playerLife = document.querySelector()
    // player.hp -=20;
    player.hp -= Math.ceil(Math.random() * 20);
    // $playerLife.style.width = player.hp + '%';
    $playerLife.style.width = player.hp + '%';
    
    if (player.hp <= 0) {
        player.hp = 0;
        $playerLife.style.width = 0 + '%';
        $arenas.appendChild(playerLose(player.name));
        $randomBtn.disabled = true;
    }
};

$randomBtn.addEventListener('click', function () {
    changeHp(player1);
    changeHp(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));