import '../Styling/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import NavBar from './Navigation/NavBar'; //navigation bar
import Routing from './Routing/Routing';
import { BrowserRouter } from 'react-router-dom'; //router encapsulates all of the application (for routing)
import storage from 'local-storage-fallback'; //used for local storage (store dark/light mode)
import { AnimatePresence } from 'framer-motion'; //animate route transitions

//get theme stored in local storage if it exists
function getInitialTheme() {
    const savedTheme = storage.getItem('theme'); //look through storage for theme
    return savedTheme ? JSON.parse(savedTheme) : { darkMode: true } //parse and get theme if it exists, if not default to light
}

function App() {
    //theme
    const [theme, setTheme] = useState(getInitialTheme);

    //works like componentDidMount/componentDidUpdate/componentWillUnmount (occurs after a render)
    useEffect(() => {
        storage.setItem('theme', JSON.stringify(theme)); //save the theme into local storage, run when theme changes
        // console.log(theme.darkMode);

        if(theme.darkMode) {
            document.body.classList.add('darkMode');
        } else {
            document.body.classList.remove('darkMode');
        }
    }, [theme]);

    

    return (
        <div className="App">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <AnimatePresence exitBeforeEnter>
                    <Routing theme={theme} />
                    <NavBar
                        key="nav" 
                        onModeChange={() => setTheme({...theme, darkMode: !theme.darkMode})}
                        initialTheme={theme}
                    />
                </AnimatePresence>
            </BrowserRouter>
        </div>
    );
}

export default App;