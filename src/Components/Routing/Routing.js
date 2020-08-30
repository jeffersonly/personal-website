import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Page Imports
import HomePage from '../Pages/HomePage';
import ExperiencePage from '../Pages/ExperiencePage';
import ContactPage from '../Pages/ContactPage';

const Routing = (props) => {
    return (
        <Switch>
            <Route path="/" exact render={() => <HomePage theme={props.theme} />} />
            <Route path="/experience" exact render={() => <ExperiencePage theme={props.theme} />}/>
            <Route path="/contact" exact render={() => <ContactPage theme={props.theme} />}/>
            <Route path="/*" render={() => <HomePage theme={props.theme} />} />
        </Switch>
    );
}

export default Routing;