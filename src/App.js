import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
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
    /*used for displaying messages to user*/
    const [notification, setNotification] = useState(null);

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

    /*contains current application state*/
    const [state, setState] = useState({
        user: null,
        users: null,
        display: {info,error}
    })

    /*starts application session & sets state*/
    const setSession = async (session) => {
        let user = await userService.getById(session.user.id)
        user.token = session.token

        const users = await userService.getAll()
        setState({
            user: user,
            users: users,
            display: {info,error}
        })
    }

    const endSession = async () => {
        setState({
            user: null,
            users: null,
            display: {info,error}
        })
    }
    
    /*main routing etc*/
    return (
        <div className="App">
            <Router>
                <div>
                    <Header></Header>
                    <Navbar state={state}></Navbar>

                    <Notification message={notification}/>

                    <Switch>
                        <Route exact path="/">
                            <Home state={state}/>
                        </Route>
                        <Route exact path="/login">
                            <LogIn state={state} setSession={setSession}/>
                        </Route>
                        <Route path="/ownprofile">
                            <OwnProfile state={state}/>
                        </Route>
                        <Route path="/friends">
                            <Friends state={state}/>
                        </Route>
                        <Route path="/newuser">
                            <NewUser state={state}/>
                        </Route>
                        <Route path="/allusers">
                            <AllUsers state={state}/>
                        </Route>
                        <Route path="/allsnowballs">
                            <AllSnowballs state={state}/>
                        </Route>
                        <Route path="/newsnowball">
                            <NewSnowball state={state}/>
                        </Route>
                    </Switch>
                </div>
        </Router>
        </div>
    )
}

export default App
