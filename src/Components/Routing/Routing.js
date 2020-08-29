import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

//Page Imports
import HomePage from '../Pages/HomePage';
import ExperiencePage from '../Pages/ExperiencePage';
import ContactPage from '../Pages/ContactPage';

const Routing = (props) => {
    const location = useLocation();
    return (
        <Switch location={location} key={location.pathname}>
            <Route path="/" exact render={() => <HomePage theme={props.theme} />} />
            <Route path="/experience" exact render={() => <ExperiencePage theme={props.theme} />}/>
            <Route path="/contact" exact render={() => <ContactPage theme={props.theme} />}/>
            <Route path="/*" render={() => <HomePage theme={props.theme} />} />
        </Switch>
    );
}

export default Routing;