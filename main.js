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
// const isGameFinished = false;

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
    // if (isGameFinished) {
        const $reloadWrap = createElem('div', 'reloadWrap');
        $reloadBtn = createElem('button', 'button');
        $reloadBtn.innerText = 'Restart';
        $reloadBtn.addEventListener('click', function(){
            window.location.reload();
        });
        $reloadWrap.appendChild($reloadBtn);
        $arenas.appendChild($reloadWrap);
    // }
};
// const finishGame = function () {
//     isGameFinished && !isGameFinished;
// };

const checkResult = function (player, opponent) {

    // const $playerLife = document.querySelector(`.player${player.player} .life`);
    // const $opponentLife = document.querySelector(`.player${player.player} .life`);

    const existedTitle = $arenas.querySelector('.winTitle');
    if (existedTitle) existedTitle.remove();

    if (player.hp <= 0 || opponent.hp <= 0) {
        $randomBtn.disabled = true;
        // create restart btn here

        // finishGame();
        createReloadButton();
    }
    
    if (player.hp <= 0 && opponent.hp <= 0) {
        
        $arenas.appendChild(showTitle(`draw`));
        createReloadButton();
        // $randomBtn.disabled = true;

        // $playerLife.style.width = 0 + '%';
        // $opponentLife.style.width = 0 + '%';
        // renderHP.call(player, 0);
        // renderHP.call(opponent, 0);
        player.renderHP(0);
        opponent.renderHP(0);

        console.log(player.hp, `  player.hp     `, opponent.hp, `  opponent.hp`);

    } else if (player.hp <= 0) {

        // $playerLife.style.width = 0 + '%';
        // renderHP.call(player, 0);
        player.renderHP(0);
        // opponent.renderHP(0);

        $arenas.appendChild(showTitle(`${opponent.name} wins`));
        createReloadButton();
        // $randomBtn.disabled = true;
        console.log(player.hp, `  player.hp     `, opponent.hp, `  opponent.hp`);

    } else if (opponent.hp <= 0) {

        // $opponentLife.style.width = 0 + '%';
        // renderHP.call(opponent, 0);
        // player.renderHP(0);
        opponent.renderHP(0);

        $arenas.appendChild(showTitle(`${player.name} wins`));
        createReloadButton();
        // $randomBtn.disabled = true;

        console.log(player.hp, `  player.hp     `, opponent.hp, `  opponent.hp`);
    }

};
const elHP = function () {
    return document.querySelector(`.player${this.player} .life`);
};
const renderHP = function (hp) {
    elHP.call(this).style.width = +hp + '%';
};
const changeHp = function (hp) {
    // const $playerLife = document.querySelector(`.player${player.player} .life`);
    // const $playerLife = elHP(player);
    // const $playerLife = elHP.bind(player, player);
    // const $playerLife = elHP.bind(player)(player);
    // const $playerLife = elHP.apply(player, [player]);

    
    // console.log(`$playerLife____`,$playerLife );
    
    // cleared
    // player.hp -= getNumRandom(0, 20);
    
    // // render
    // const $playerLife = elHP.call(player);
    // $playerLife.style.width = player.hp + '%';
    
    // // checkResult → should be in an EventListener
    // const opponent = player.player === 1 ? player2 : player1;
    // checkResult(player, opponent);

    // this.hp -= getNumRandom(0, hp);
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
    renderHP: renderHP
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
    renderHP: renderHP
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

/*Вторая функци elHP (это именно функция) должна возвращать 
document.querySelector, который должен ссылаться на внутреннее 
поле player, которое выводит 1 или 2, и обращаться к его классу .life. 
Таким образом мы вызывая метод elHP у нашего объекта 
сможем обращаться к жизням, что бы их изменять. */
// const elHP = function () {
//     return document.querySelector(`.player${this.player} .life`);
// };

/**Третья функци renderHP должна только рендерить hp, т.е. рисовать hp при помощи style.width. */
// const renderHP = function (hp) {
//     elHP.call(this).style.width = +hp + '%';
// };
// const renderHP = function (hpElem, points) {
//     hpElem.style.width = +points + '%';
// };

// 
// 
/*Все эти функции должны быть созданы один раз и использоваться одноименных методах у обоих объектах. */
/**Т.е. ссылайся в них через this на свойства и методы того объекта, в котором они используются. */
/**В том месте где мы с вами вызывали changeHP теперь должны вызывать метод типа 
 * `player1.changeHP(getRandom(20))` */
// 
/* Имейте ввиду, что этот метод изменяет только жизни, за перерисовку ваших жизней теперь отвечает другой метод, `player1.renderHP()` */
// 
// 

/*Функция changeHP должна в аргументах принимать, 
на какое кол-во надо изменять HP. И решать, 
нужно ли отнимать или ставить 0. 
Больше ничего эта функция не должна делать.*/
// const changeHp = function (hp) {
//     // const $playerLife = document.querySelector(`.player${player.player} .life`);
//     // const $playerLife = elHP(player);
//     // const $playerLife = elHP.bind(player, player);
//     // const $playerLife = elHP.bind(player)(player);
//     // const $playerLife = elHP.apply(player, [player]);

    
//     // console.log(`$playerLife____`,$playerLife );
    
//     // cleared
//     // player.hp -= getNumRandom(0, 20);
    
//     // // render
//     // const $playerLife = elHP.call(player);
//     // $playerLife.style.width = player.hp + '%';
    
//     // // checkResult → should be in an EventListener
//     // const opponent = player.player === 1 ? player2 : player1;
//     // checkResult(player, opponent);

//     // this.hp -= getNumRandom(0, hp);
//     if (this.hp <= 0) {
//         this.hp = 0;
//     } else {
//         this.hp -= hp;
//     }
// };



$randomBtn.addEventListener('click', function () {

    player1.changeHP(getNumRandom(0, 20));
    player2.changeHP(getNumRandom(0, 20));

    player1.renderHP(player1.hp);
    player2.renderHP(player2.hp);

    // changeHp.call(player1, getNumRandom(0, 20));
    // changeHp.call(player2, getNumRandom(0, 20));

    // checkResult → should be in an EventListener
    // const opponent = player.player === 1 ? player2 : player1;
    checkResult(player1, player2);

    // if (player1.hp <= 0 || player2.hp <= 0) {
    //     $randomBtn.disabled = true;
    //     // create restart btn here
    // }
});

// const changeHp = function (player) {
//     // const $playerLife = document.querySelector(`.player${player.player} .life`);
//     // const $playerLife = elHP(player);
//     // const $playerLife = elHP.bind(player, player);
//     // const $playerLife = elHP.bind(player)(player);
//     // const $playerLife = elHP.apply(player, [player]);
//     const $playerLife = elHP.call(player);

//     // console.log(`$playerLife____`,$playerLife );

//     const opponent = player.player === 1 ? player2 : player1;

//     player.hp -= getNumRandom(0, 20);
    
//     $playerLife.style.width = player.hp + '%';

//     checkResult(player, opponent);
// };

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));




/*## Task #2 (*)

Давайте дальше тренироваться в создании дополнительных элементов.
Создайте функцию `createReloadButton` внутри это функции создайте div с классом *reloadWrap* и кнопку с классом *button*
Текст внутри кнопки напишите Restart.
не забудьте вложить эту кнопку в div.
Стили для этих элементов ниже

Для начала повесть на кнопку событие click и в функции обратного вызова вызывай метод `window.location.reload()`
Вторым этапом, кнопка должна появляться только в том случае когда игра закончилась.*/