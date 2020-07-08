import React from 'react';

import Sidebar from '../components/Sidebar';

const Home = () => {
    return (
        <div>
            <div className="main">
                <Sidebar></Sidebar>
                <div className="content">
                </div>
            </div>
        </div>
    );
}

export default Home