import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {inputText} from "../redux/actions";

const Title = (props) => {
    const text = useSelector(state => {
        const {inputReducer} = state
        return inputReducer.text
    })
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(inputText(e.target.value))
    }
    return (
        <div className='card-title'>
            <div className='card-title-top'>
                <input onChange={handleChange} type="text"/>
            </div>
            <p>{text}</p>
        </div>
    );
};

export default Title;