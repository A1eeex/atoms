import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import { deleteCommentAction, updateComment} from "../redux/actions";

const SingleComment = ({comment}) => {
    const [commentText, setCommentText] = useState('')
    const { text, id } = comment;

    const dispatch = useDispatch()


    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(updateComment(commentText, id))
    }

    const handleDelete = (e)=> {
        e.preventDefault()
       dispatch(deleteCommentAction(id))
    }
    useEffect(() => {
        if (text) {
            setCommentText(text)
        }
    }, [text])
    const handleInput = (e) => {
        setCommentText(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleUpdate} className='comments-item'>
                <div onClick={handleDelete} className='comments-item-delete'>&times;</div>
                <input value={commentText} onChange={handleInput} type="text"/>
                <input type="submit" hidden/>
                <div>
                </div>
            </form>

        </>

    );
};

export default SingleComment;