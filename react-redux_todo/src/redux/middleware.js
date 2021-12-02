import {COMMENT_CREATE} from "./types";
import {errorOn} from "./actions";

const badWords = ['bich', 'козел']

export function spamFilter(store) {
    return function (next) {
        return function (action) {
            if (action.type === COMMENT_CREATE) {
                const hasBadWords = badWords.some((elem) => action.data.text.includes(elem)) //some ,буде шукати чи э дане сдово чи не маэ(повертає true or false) // includes(кожне слово масиву)
                if (hasBadWords) {
                    return store.dispatch(errorOn('Аяяяй !!! но но но !!!'))
                }
            }
            return next(action)
        }
    }
}