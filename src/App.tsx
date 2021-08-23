import React from 'react';
import './App.css';
import LoginComponent from "./LoginComponent/LoginComponent";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import DashboardComponent from './DashboardComponent/DashboardComponent';

function App() {
  return (
    <Router>
        <div>
            <Switch>
                <Route exact path="/">
                    <DashboardComponent />
                </Route>
                <Route exact path="/login">
                    <LoginComponent />
                </Route>
            </Switch>
        </div>
    </Router>
)
}

export default App;
