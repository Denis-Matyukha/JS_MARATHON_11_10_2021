import { $arenas, $fightBtn } from './gameConsts.js';
import generateLogs from './genLogs.js';

export const createElem = (tag, className) => {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
};

export const showTitle = (title) => {
    const $winTitle = createElem('div', 'loseTitle');
    $winTitle.innerText = title;
    return $winTitle;
};

export const createReloadButton = () => {

    const $reloadWrap = createElem('div', 'reloadWrap');
    const $reloadBtn = createElem('button', 'button');
    $reloadBtn.innerText = 'Restart';
    $reloadBtn.addEventListener('click', function () {
        window.location.reload();
    });
    $reloadWrap.appendChild($reloadBtn);
    $arenas.appendChild($reloadWrap);
    $reloadBtn.focus();

};

export const checkResult = (player, opponent) => {

    let stopFightOfferReload = function () {
        $fightBtn.disabled = true;
        createReloadButton();
    };

    if (player.hp <= 0 && opponent.hp <= 0) {

        $arenas.appendChild(showTitle(`draw`));
        stopFightOfferReload();
        opponent.renderHp(0);
        player.renderHp(0);
        generateLogs('draw');

    } else if (player.hp <= 0) {

        $arenas.appendChild(showTitle(`${opponent.name} wins`));
        stopFightOfferReload();
        player.renderHp(0);
        generateLogs('end', opponent, player);

    } else if (opponent.hp <= 0) {

        $arenas.appendChild(showTitle(`${player.name} wins`));
        stopFightOfferReload();
        opponent.renderHp(0);
        generateLogs('end', player, opponent);
    }
};