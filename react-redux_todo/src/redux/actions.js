import {
    COMMENT_CREATE,
    COMMENTS_LOAD,
    DECREMENT,
    DELETE_COMMENT, ERROR_DISPLAY_OFF, ERROR_DISPLAY_ON,
    INCREMENT,
    INPUT_TEXT, LOADER_DISPLAY_OFF,
    LOADER_DISPLAY_ON,
    UPDATE_COMMENT
} from "./types";

export function incrementLikes() {
    return {
        type: INCREMENT
    }
}

export function decrementLikes() {
    return {
        type: DECREMENT
    }
}

export function inputText(text) {
    return {
        type: INPUT_TEXT,
        text
    }
}

export function commentCreate(text, id) {
    return {
        type: COMMENT_CREATE,
        data: {text: text, id: id}
    }
}

export function updateComment(text, id) {
    return {
        type: UPDATE_COMMENT,
        data: {text, id}
    }
}

export function deleteCommentAction(id) {
    return {
        type: DELETE_COMMENT,
        id
    }
}

export function commentsLoad() {
    return async dispatch => {
        try {
            dispatch(loaderOn())
            const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
            const jsonData = await response.json()

            setTimeout(() => {
                dispatch({
                    type: COMMENTS_LOAD,
                    data: jsonData
                })
                dispatch(loaderOff())
            }, 1000)
        } catch (e) {
            dispatch(errorOn('Error API'))
            dispatch(loaderOff())
        }

    }
}

export function loaderOn() {
    return {
        type: LOADER_DISPLAY_ON,
    }
}

export function loaderOff() {
    return {
        type: LOADER_DISPLAY_OFF,
    }
}

export function errorOn(text) {
    return dispatch => {
        dispatch({
            type: ERROR_DISPLAY_ON,
            text
        })
        setTimeout(() => {
            dispatch(errorOff())
        }, 2000)
    }
}

export function errorOff() {
    return {
        type: ERROR_DISPLAY_OFF,
    }
}