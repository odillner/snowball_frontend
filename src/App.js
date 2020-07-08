import React, { useState, useEffect } from 'react';
import './App.css'
import Profile from './pages/Profile'
import NewUser from './pages/NewUser'

function App() {

    return (
        <div className="App">
            <Profile id='5f059ee966f3ec1a480243ca'/>
            <NewUser/>
        </div>
    )
}

export default App
