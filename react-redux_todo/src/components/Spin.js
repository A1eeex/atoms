import React from 'react';
import Loader from 'react-loader-spinner'
import { useSelector} from "react-redux";

const Spin = (props) => {

    const spinner= useSelector(state => {
        const {appReducer} = state
        return appReducer.loading
    })

    return (
        <div className='loader-styles'>
            <Loader
                type="TailSpin"
                color="#00BFFF"
                height={100}
                width={100}
                visible={spinner}/>
        </div>
    );
};

export default Spin;