import React, { useState, useEffect } from 'react';
import './App.css'
import Profile from './pages/profile'
import userService from './services/users'

function App() {
    useEffect(() => {
        const res = userService.getAll()

    }, [])

    return (
        <div className="App">
            <Profile/>
        </div>
    )
}

export default App
