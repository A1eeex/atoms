import './App.css';
import Likes from "./components/Likes";
import Title from "./components/Title";
import Comments from "./components/Comments";
import Spin from "./components/Spin";
import {useSelector} from "react-redux";

function App() {

    const error = useSelector(state => {
        const {appReducer} = state
        return appReducer.error
    })
    console.log('error', error)
    return (
        <div className="App">
            <div className="wrap">
                <Spin/>
                <div className="card">
                    {error && (
                        <div className='error-message'>{error}</div>
                    )}
                    <div className="card-image">
                        <img src="./sea.jpg" alt="surfing"/>
                        <Title/>
                        <Likes/>
                    </div>
                    <Comments/>
                </div>
            </div>
        </div>
    );
}

export default App;
