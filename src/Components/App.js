import '../Styling/App.css';
import React from 'react';

import LandingPage from './Pages/LandingPage';
import HomePage from './Pages/HomePage';
import ExperiencePage from './Pages/ExperiencePage';
import NavBar from './Navigation/NavBar';

function App() {
    return (
        <div className="App">
            
            {/* <div className="banner">
                <StarParticles />
                
                <h1 className="text">Jefferson Ly</h1>
            </div> */}
                
                <LandingPage />
                <HomePage />
                <ExperiencePage />
                <NavBar />
        </div>
    );
}

export default App;