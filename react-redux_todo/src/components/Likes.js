import React from 'react';
import {connect} from 'react-redux'
import {decrementLikes, incrementLikes} from "../redux/actions";

const Likes = (props) => {
    return (
        <div className='button-controls'>
            <button onClick={props.onIncrementLikes}>♥ {props.likes}</button>
            <button onClick={props.onDecrementLikes}>👎</button>
        </div>
    );
};

function mapStateToProps(state) {
    const {likesReducer} = state
    return {
        likes: likesReducer.likes
    }
}

function mapDispatchToProps(dispatch) {
    return {

        onDecrementLikes: () =>  dispatch(decrementLikes()),
        onIncrementLikes: () => {
            return dispatch(incrementLikes())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);











