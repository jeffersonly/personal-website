import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

//Page Imports
import HomePage from '../Pages/HomePage';
import ExperiencePage from '../Pages/ExperiencePage';

const Routing = (props) => {
    console.log(props);
    const location = useLocation();
    return (
        <Switch location={location} key={location.pathname}>
            <Route path="/" exact render={() => <HomePage theme={props.theme} musicState={props.musicState} />} />
            <Route path="/experience" exact render={() => <ExperiencePage theme={props.theme} musicState={props.musicState} />}/>
            <Route path="/*" render={() => <HomePage theme={props.theme} musicState={props.musicState} />} />
        </Switch>
    );
}

export default Routing;