import '../Styling/App.css';
import React from 'react';

import HomePage from './Pages/HomePage';
import ExperiencePage from './Pages/ExperiencePage';
import ProjectPage from './Pages/ProjectsPage';
import NavBar from './Navigation/NavBar';

function App() {
    return (
        <div className="App">
            
            {/* <div className="banner">
                <StarParticles />
                
                <h1 className="text">Jefferson Ly</h1>
            </div> */}

                <HomePage />
                <ExperiencePage />
                <ProjectPage />
                <NavBar />
        </div>
    );
}

export default App;