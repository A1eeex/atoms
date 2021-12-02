import React, {useEffect, useState} from 'react';
import SingleComment from "./SingleComment";
import {useDispatch, useSelector} from "react-redux";
import {commentCreate, commentsLoad} from "../redux/actions";
import uniqid from "uniqid";


const Comments = (props) => {
    const comments = useSelector(state => {
        const {commentsReducer} = state
        return commentsReducer.comments
    })
    const dispatch = useDispatch()

    const [textComment, setTextComment] = useState('')

    const handleInput = (e) => {
        setTextComment(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const id = uniqid()
        dispatch(commentCreate(textComment, id))
        setTextComment('')
    }
    useEffect(()=> {
        dispatch(commentsLoad())
    },[])
    console.log('comments', comments)
    return (
        <div className='card-comments'>
            <form onSubmit={handleSubmit} className='comments-item-create'>
                <input type="text" value={textComment} onChange={handleInput}/>
                <input type="submit" hidden/>
            </form>
            {!!comments.length && comments.map((item) => (
                <SingleComment key={item.id} comment={item}/>
            ))}

        </div>
    );
};

export default Comments;