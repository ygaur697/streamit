import React from "react";
import LoginComponent from "./LoginComponent/LoginComponent";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function routerConfig() {
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