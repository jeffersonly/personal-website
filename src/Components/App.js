import '../Styling/App.css';
import React from 'react';
import Particles from 'react-particles-js';
import HeavenClouds from './Clouds/HeavenClouds';

function App() {
    return (
        <div className="App">
            
            <div className="banner">
                <Particles 
                    style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, width: '100vw', height: '100vh', pointerEvents: 'none'}} 
                    params={{
                        particles: {
                            number: {
                                value: 50,
                                density: {
                                    enable: true,
                                    value_area: 800
                                },
                            },
                            color: {
                                value: '#fff'
                            },
                            shape: {
                                type: 'star'
                            },
                            size: {
                                value: 3,
                                random: true
                            },
                            line_linked: {
                                enable: false,
                            },
                            move: {
                                speed: 2,
                            },
                        }
                    }}
                />
                <HeavenClouds clouds={"bottom"} />
                <h1 className="text">Jefferson Ly</h1>
            </div>
            <div className="testtest">
            <HeavenClouds clouds={"top"} />
            </div>
            
        </div>
    );
}

export default App;