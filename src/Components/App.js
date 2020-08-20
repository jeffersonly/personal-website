import '../Styling/App.css';
import React, { useState, useEffect } from 'react';

import NavBar from './Navigation/NavBar'; //navigation bar

import history from './Routing/history';
import Routing from './Routing/Routing';
import { Router } from 'react-router-dom'; //router encapsulates all of the application (for routing)

import storage from 'local-storage-fallback'; //used for local storage (store dark/light mode)


//get theme stored in local storage if it exists
function getInitialTheme() {
    const savedTheme = storage.getItem('theme'); //look through storage for theme
    return savedTheme ? JSON.parse(savedTheme) : { darkMode: false } //parse and get theme if it exists, if not default to light
}

//get initial state of whether music is enabled
function getInitialMusicState() {
    const savedMusicState = storage.getItem('musicState'); //look through storage to see music state
    return savedMusicState ? JSON.parse(savedMusicState) : { playMusic: false } //parse and see state, if it doesn't exist default to music not played
}

function App() {
    //theme
    const [theme, setTheme] = useState(getInitialTheme);

    //music state 
    const [musicState, setMusicState] = useState(getInitialMusicState);

    //works like componentDidMount/componentDidUpdate/componentWillUnmount (occurs after a render)
    useEffect(() => {
        storage.setItem('theme', JSON.stringify(theme)); //save the theme into local storage, run when theme changes
        // console.log(theme.darkMode);

        storage.setItem('musicState', JSON.stringify(musicState)); //save the music state into local storage, run when music state changes
        console.log(musicState.playMusic);

        if(theme.darkMode) {
            document.body.classList.add('darkMode');
        } else {
            document.body.classList.remove('darkMode');
        }
    }, [theme, musicState]);

    

    return (
        <div className="App">
            {/* <div className="banner">
                <StarParticles />
                
                <h1 className="text">Jefferson Ly</h1>
            </div> */}

            <Router history={history}>
                <Routing theme={theme} musicState={musicState} />
                <NavBar 
                    onModeChange={() => setTheme({...theme, darkMode: !theme.darkMode})}
                    onMusicChange={() => setMusicState({...musicState, playMusic: !musicState.playMusic})} 
                    initialTheme={theme}
                    initialMusicState={musicState}
                />
            </Router>
        </div>
    );
}

export default App;