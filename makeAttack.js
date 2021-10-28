import { ATTACK, HIT, $formFight } from './gameConsts.js';
import { getNumRandom } from './randomiser.js';

export const enemyAttack = () => {
    const e_hit = ATTACK[getNumRandom(0, 2)];
    const e_defence = ATTACK[getNumRandom(0, 2)];

    return {
        e_value: getNumRandom(0, HIT[e_hit]),
        e_hit,
        e_defence,
    }
};

export const playerAttack = () => {

    let p_value, p_hit, p_defence;

    for (let item of $formFight) {
        let { name: iName, value: iValue } = item;

        if (item.checked && iName === 'hit') {
            p_value = getNumRandom(0, HIT[iValue]);
            p_hit = iValue;
        }
        if (item.checked && iName === 'defence') {
            p_defence = iValue;
        }
        item.checked = false;
    }

    return {
        p_value,
        p_hit,
        p_defence
    };
};