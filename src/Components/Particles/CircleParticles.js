import React from 'react';
import Particles from 'react-particles-js';

function CircleParticles() {
    return(
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
                        type: 'circle'
                    },
                    size: {
                        value: 5,
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
    );
}

export default CircleParticles;