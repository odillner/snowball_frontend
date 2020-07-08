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
import OwnProfile from './pages/OwnProfile'
import NewUser from './pages/NewUser'
import AllUsers from './pages/AllUsers'
import NewSnowball from './pages/NewSnowball'
import AllSnowballs from './pages/AllSnowballs';


function App() {
    const curr_user = "5f05c8e8a482b61eb86cd04f"

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
                    <Route path="/ownprofile">
                        <OwnProfile id={curr_user}/>
                    </Route>
                    <Route path="/newuser">
                        <NewUser />
                    </Route>
                    <Route path="/allusers">
                        <AllUsers />
                    </Route>
                    <Route path="/allsnowballs" id={curr_user}>
                        <AllSnowballs />
                    </Route>
                    <Route path="/newsnowball" id={curr_user}>
                        <NewSnowball />
                    </Route>
                </Switch>
                </div>
        </Router>
        </div>
    )
}

export default App
