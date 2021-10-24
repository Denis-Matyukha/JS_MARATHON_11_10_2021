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

const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}

const ATTACK = ['head', 'body', 'foot'];

const $arenas = document.body.querySelector('.arenas');
const $fightBtn = document.body.querySelector('.button');
const $formFight = document.body.querySelector('.control');


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

    let stopFightOfferReload = function () {
        $fightBtn.disabled = true;
        createReloadButton();
    };

    if (player.hp <= 0 && opponent.hp <= 0) {

        $arenas.appendChild(showTitle(`draw`));
        stopFightOfferReload();
        opponent.renderHp(0);
        player.renderHp(0);

    } else if (player.hp <= 0) {

        $arenas.appendChild(showTitle(`${opponent.name} wins`));
        stopFightOfferReload();
        player.renderHp(0);

    } else if (opponent.hp <= 0) {

        $arenas.appendChild(showTitle(`${player.name} wins`));
        stopFightOfferReload();
        opponent.renderHp(0);
    }
};

const elHp = function () {
    return document.querySelector(`.player${this.player} .life`);
};

const renderHp = function (hp) {
    elHp.call(this).style.width = +hp + '%';
};

const changeHp = function (hp) {

    if (this.hp <= 0) {
        this.hp = 0;
    } else {
        this.hp -= hp;
    }
};

const attack = function () {
    console.log(`${this.name} Fight...`);
};

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['keyboard'],
    changeHp,
    renderHp,
    attack,
    elHp,
};

const player2 = {
    player: 2,
    name: 'Subzero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['keyboard'],
    changeHp,
    renderHp,
    attack,
    elHp,
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

const enemyAttack = function () {
    const hit = ATTACK[getNumRandom(0, 2)];
    const defence = ATTACK[getNumRandom(0, 2)];

    return {
        value: getNumRandom(0, HIT[hit]),
        hit,
        defence,
    }
};

const playerAttack = function () {

    const attack = {};

    for (const item of $formFight) {
        if (item.checked && item.name === 'hit') {
            attack.value = getNumRandom(0, HIT[item.value]);
            attack.hit = item.value;
        }
        if (item.checked && item.name === 'defence') {
            attack.defence = item.value;
        }
        item.checked = false;
    }

    return attack;
}

$formFight.addEventListener('submit', function (e) {
    e.preventDefault();

    const enemy = enemyAttack();

    const player = playerAttack();

    // for (const item of this) {
    //     if (item.checked && item.name === 'hit') {
    //         attack.value = getNumRandom(0, HIT[item.value]);
    //         attack.hit = item.value;
    //     }
    //     if (item.checked && item.name === 'defence') {
    //         attack.defence = item.value;
    //     }
    //     item.checked = false;
    // }

    // if (attack.defence !== enemy.hit) {
    //     player1.changeHp(getNumRandom(0, enemy.value));
    //     player1.renderHp(player1.hp);
    // }

    // if (enemy.defence !== attack.hit) {
    //     player2.changeHp(getNumRandom(0, attack.value));
    //     player2.renderHp(player2.hp);
    // }

    if (player.defence !== enemy.hit) {
        player1.changeHp(getNumRandom(0, enemy.value));
        player1.renderHp(player1.hp);
    }

    if (enemy.defence !== player.hit) {
        player2.changeHp(getNumRandom(0, player.value));
        player2.renderHp(player2.hp);
    }

    checkResult(player1, player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));