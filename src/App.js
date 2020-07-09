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
import OwnProfile from './pages/OwnProfile'
import NewUser from './pages/NewUser'
import AllUsers from './pages/AllUsers'
import LogIn from './pages/LogIn'
import NewSnowball from './pages/NewSnowball'
import AllSnowballs from './pages/AllSnowballs';


function App() {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)

    const setSession = (session) => {
        setToken(session.token)
        setUser(session.user)
    }

    return (
        <div className="App">
            <Router>
                <div>
                    <Header></Header>
                    <Navbar></Navbar>
            
                    <Switch>
                    <Route exact path="/">
                        <LogIn setSession={setSession}/>
                    </Route>
                    <Route path="/ownprofile">
                        <OwnProfile user={user}/>
                    </Route>
                    <Route path="/newuser">
                        <NewUser />
                    </Route>
                    <Route path="/allusers">
                        <AllUsers />
                    </Route>
                    <Route path="/allsnowballs">
                        <AllSnowballs />
                    </Route>
                    <Route path="/newsnowball">
                        <NewSnowball user={user}/>
                    </Route>
                </Switch>
                </div>
        </Router>
        </div>
    )
}

export default App
