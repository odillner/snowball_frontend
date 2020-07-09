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
import Notification from './components/Notification';

/* pages */
import OwnProfile from './pages/OwnProfile'
import NewUser from './pages/NewUser'
import AllUsers from './pages/AllUsers'
import LogIn from './pages/LogIn'
import NewSnowball from './pages/NewSnowball'
import AllSnowballs from './pages/AllSnowballs';

/* services */
import userService from './services/users'

function App() {
    const [user, setUser] = useState(null)
    const [notification, setNotification] = useState(null);

    const setSession = async (session) => {
        let user = await userService.read(session.user.id)
        user.token = session.token
        setUser(user)
    }

    const message = (message) => {
        setNotification({text: message, type: 'message'});
        setTimeout(() => {setNotification(null)}, 5000)
    }
    
    const error = (error) => {
        setNotification({text: error, type: 'error'});
        setTimeout(() => {setNotification(null)}, 5000)
    }

    const display = {message, error}

    return (
        <div className="App">
            <Router>
                <div>
                    <Header></Header>
                    <Navbar></Navbar>

                    <Notification message={notification}/>

                    <Switch>
                        <Route exact path="/">
                            <LogIn setSession={setSession} display={display}/>
                        </Route>
                        <Route path="/ownprofile">
                            <OwnProfile user={user} display={display}/>
                        </Route>
                        <Route path="/newuser">
                            <NewUser display={display}/>
                        </Route>
                        <Route path="/allusers">
                            <AllUsers display={display}/>
                        </Route>
                        <Route path="/allsnowballs">
                            <AllSnowballs display={display}/>
                        </Route>
                        <Route path="/newsnowball">
                            <NewSnowball user={user} display={display}/>
                        </Route>
                    </Switch>
                </div>
        </Router>
        </div>
    )
}

export default App
