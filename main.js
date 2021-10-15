
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

const getRandomFromArray = function(arr) {
    return arr[Math.abs(Math.floor(arr.length-Math.random()*arr.length))];
};

const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['keyboard'],
    attack: function () {
        console.log(`${this.name} Fight...`);
    }
};

const player2 = {
    name: 'Subzero',
    hp: 95,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['keyboard'],
    attack: function () {
        console.log(`${this.name} Fight...`);
    }
};

const createPlayer = function (charClass = 'player1', player) {

    let $player = document.createElement('div');
    $player.classList.add(charClass);

    let $progressBar = document.createElement('div');
    let $life = document.createElement('div');
    let $nameEl = document.createElement('div');

    $nameEl.classList.add('name');
    $progressBar.classList.add('progressbar');
    $life.classList.add('life');

    $life.style.width = `${player.hp}%`;
    $nameEl.innerText = player.name;

    $progressBar.append($life, $nameEl);
    
    let $character = document.createElement('div');
    let $img = document.createElement('img');

    $img.src = getRandomFromArray(ImagesMK);
    
    $character.classList.add('character');
    $character.appendChild($img);
    
    $player.append($progressBar, $character);

    $arenas.appendChild($player);
};

createPlayer('player1', player1);
createPlayer('player2', player2);