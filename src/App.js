import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

/* components */
import Header from "./components/Header";
import Navbar from "./components/Navbar";

/* pages */
import Home from './pages/Home'
import Profile from './pages/Profile'
import NewUser from './pages/NewUser'


function App() {

    return (
        <div className="App">
            <Router>
                <div>
                    <Header></Header>
                    <Navbar></Navbar>
            
                    <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/newuser">
                        <NewUser />
                    </Route>
                </Switch>
                </div>
        </Router>
        </div>
    )
}

export default App
