import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

/* components */
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Notification from './components/Notification'

/* pages */
import Home from './pages/Home'
import Friends from './pages/Friends'
import OwnProfile from './pages/OwnProfile'
import NewUser from './pages/NewUser'
import AllUsers from './pages/AllUsers'
import LogIn from './pages/LogIn'
import NewSnowball from './pages/NewSnowball'
import AllSnowballs from './pages/AllSnowballs'

/* services */
import userService from './services/users'

/* utils */

function App() {
    const [currUser, setUser] = useState(null)
    /*used for displaying messages to user*/
    const [notification, setNotification] = useState(null);

    /*sets the current user session from login etc*/
    const setSession = async (session) => {
        let user = await userService.getById(session.user.id)
        user.token = session.token
        setUser(user)
    }

    /*displays message to user*/
    const info = (info) => {
        setNotification({text: info, type: 'info'});
        setTimeout(() => {setNotification(null)}, 5000)
    }
    /*displays error to user*/
    const error = (error) => {
        setNotification({text: error, type: 'error'});
        setTimeout(() => {setNotification(null)}, 5000)
    }

    const display = {info, error}
    

    /*main routing etc*/
    return (
        <div className="App">
            <Router>
                <div>
                    <Header></Header>
                    <Navbar></Navbar>

                    <Notification message={notification}/>

                    <Switch>
                        <Route exact path="/">
                            <Home user={currUser} display={display}/>
                        </Route>
                        <Route exact path="/login">
                            <LogIn user={currUser} display={display} setSession={setSession}/>
                        </Route>
                        <Route path="/ownprofile">
                            <OwnProfile user={currUser} display={display}/>
                        </Route>
                        <Route path="/friends">
                            <Friends user={currUser} display={display}/>
                        </Route>
                        <Route path="/newuser">
                            <NewUser user={currUser} display={display} setSession={setSession}/>
                        </Route>
                        <Route path="/allusers">
                            <AllUsers user={currUser} display={display}/>
                        </Route>
                        <Route path="/allsnowballs">
                            <AllSnowballs user={currUser} display={display}/>
                        </Route>
                        <Route path="/newsnowball">
                            <NewSnowball user={currUser} display={display}/>
                        </Route>
                    </Switch>
                </div>
        </Router>
        </div>
    )
}

export default App
