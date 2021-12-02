import {COMMENT_CREATE, COMMENTS_LOAD, DELETE_COMMENT, UPDATE_COMMENT} from "./types";

const initialState = {
    comments: []
}

export const commentsReducer = (state = initialState, action) => {
    console.log('sssss', action)
    switch (action.type) {

        case(COMMENT_CREATE):
            return {
                ...state,
                comments: [...state.comments, action.data]
            }
        case (UPDATE_COMMENT):
            const {data} = action
            const {comments} = state
            const itemIndex = comments.findIndex((index) => {
                return index.id === data.id
            })
            const nextComments = [...comments.slice(0, itemIndex), data, ...comments.slice(itemIndex + 1)]
            return {
                ...state,
                comments: nextComments
            }
        case(DELETE_COMMENT):
            return (() => {
                const {id} = action
                const {comments} = state
                const newComments = [...comments].filter((item) => {
                    return item.id !== id
                })
                return {
                    ...state,
                    comments: newComments
                }
            })()
        case(COMMENTS_LOAD):
            const commentsNew = action.data.map((item) => {
                return {
                    text: item.name,
                    id: item.id,
                }
            })
            return {
                ...state,
                comments: commentsNew
            }

        default:
            return state
    }
}

