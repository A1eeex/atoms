import React from 'react';
import {
    BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import TablePage from './components/TablePage'
import UserInfo from "./components/UserInfo";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" component={TablePage} exact />
                    <Route path="/user/:id" component={UserInfo} />
                </Switch>
            </Router>
        </div>
    );
}

export default App
