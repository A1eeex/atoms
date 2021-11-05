import React from 'react';
import {
    BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import TablePage from './components/TablePage'

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" component={TablePage} exact />
                    <Route path="/user:id" component={UserInfo} exact />
                </Switch>
            </Router>
        </div>
    );
}

export default App
