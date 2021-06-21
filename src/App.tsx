import React from 'react';
import './App.css';
import LoginComponent from "./LoginComponent/LoginComponent";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div>
            <Switch>
                <Route exact path="/">
                    <LoginComponent />
                </Route>
            </Switch>
        </div>
    </Router>
)
}

export default App;
