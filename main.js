import { player1, player2, createPlayer } from './genPlayers.js';
import { enemyAttack, playerAttack } from './makeAttack.js';
import { $arenas, $formFight } from './gameConsts.js';
import { getNumRandom } from './randomiser.js';
import { checkResult } from './gameFinal.js';
import generateLogs from "./genLogs.js";

$formFight.addEventListener('submit', function (e) {
    e.preventDefault();

    const { e_value, e_hit, e_defence } = enemyAttack();
    const { p_value, p_hit, p_defence } = playerAttack();

    if (p_defence !== e_hit) {
        player1.changeHp(getNumRandom(0, e_value));
        player1.renderHp();
        generateLogs('hit', player2, player1);
    }

    if (e_defence !== p_hit) {
        player2.changeHp(getNumRandom(0, p_value));
        player2.renderHp();
        generateLogs('hit', player1, player2);
    }

    checkResult(player1, player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

generateLogs('start', player1, player2);