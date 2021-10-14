const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: '',
    weapon: ['keyboard'],
    attack: function () {
        console.log(`${this.name} Fight...`);
    }
};

const player2 = {
    name: 'Subzero',
    hp: 95,
    img: '',
    weapon: ['keyboard'],
    attack: function () {
        console.log(`${this.name} Fight...`);
    }
};


// на момент выполнения дз картинки не загружались, поэтому массив с картинками был заменён ↓
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

const createPlayer = function (charClass = 'player1', charName = 'NoName', charHp = '50') {
    let $player = document.createElement('div');
    $player.classList.add(charClass);

    let $progressBar = document.createElement('div');
    let $life = document.createElement('div');
    let $nameEl = document.createElement('div');
    $nameEl.textContent = charName;
    $nameEl.classList.add('name');
    $progressBar.classList.add('progressbar');
    $life.classList.add('life');

    // $life.style.width = `100px`;
    $life.style.width = `${charHp}px`;

    $nameEl.innerText = `${charName}`;

    $progressBar.append($life, $nameEl);
    
    let $character = document.createElement('div');
    let $img = document.createElement('img');

    // $img.src = 'https://i.gifer.com/Y60L.gif';
    // $img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
    // $img.src = Math.abs(Math.floor(5-Math.random()*10));
    // $img.src = ImagesMK[Math.abs(Math.floor(ImagesMK.length-Math.random()*10))];
    let x = ImagesMK[Math.abs(Math.floor(ImagesMK.length-Math.random()*10))];
    console.log(x);
    console.log(typeof x);
    $img.src = x;
    
    $character.classList.add('character');
    $character.appendChild($img);
    
    $player.append($progressBar, $character);

    // document.body.querySelector('.arenas').insertAdjacent('afterbegin',$player);
    // console.log(`fn createPlayer() with args → ${this.args}`);
    // console.log(`fn createPlayer() with args ↓`);
    // console.log([...arguments]);
    // console.log($player);
    // return $player
    document.body.querySelector('.arenas').appendChild($player);
};


createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'SUBZERO', 80);

/*
- http://reactmarathon-api.herokuapp.com/assets/scorpion.gif
- http://reactmarathon-api.herokuapp.com/assets/kitana.gif
- http://reactmarathon-api.herokuapp.com/assets/liukang.gif
- http://reactmarathon-api.herokuapp.com/assets/sonya.gif
- http://reactmarathon-api.herokuapp.com/assets/subzero.gif
- https://i.gifer.com/Y60L.gif
*/
