const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: '',
    weapon: ['keyboard'],
    attack: function() {
        console.log(`${this.name} Fight...`);
    }
};

const player2 = {
    name: 'Subzero',
    hp: 95,
    img: '',
    weapon: ['keyboard'],
    attack: function() {
        console.log(`${this.name} Fight...`);
    }
};

const createPlayer = function() {
    let $player = document.createElement('div');
    $player.classList.add('player1');
    
    let $progressBar = document.createElement('div');
    let $life = document.createElement('div');
    let $name = document.createElement('div');
    $progressBar.classList.add('progressbar');
    $life.classList.add('life');
    $name.classList.add('name');
    // append ↓
    $progressBar.append($life,$name);

    
    let $character = document.createElement('div');
    let $img = document.createElement('img');
    $img.src = 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif';
    $character.classList.add('character');
    $character.appendChild($img);
}

/*
- http://reactmarathon-api.herokuapp.com/assets/scorpion.gif
- http://reactmarathon-api.herokuapp.com/assets/kitana.gif
- http://reactmarathon-api.herokuapp.com/assets/liukang.gif
- http://reactmarathon-api.herokuapp.com/assets/sonya.gif
- http://reactmarathon-api.herokuapp.com/assets/subzero.gif
*/