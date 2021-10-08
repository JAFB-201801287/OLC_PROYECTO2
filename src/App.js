import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Switcher from "./components/Switcher";

/*
* @ Component Imported
* */
import HomePage from "./pages/home";

const App = () => {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL + "/"}`}
                           component={HomePage}/>
                </Switch>
            </Router>
        </Fragment>
    );
};

export default App;