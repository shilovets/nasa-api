import React from "react";
import {Switch, Route} from "react-router-dom";
import {withAstronomyService} from "../hoc/with-astronomy-service";

import Header from "../header/header";
import AstronomyDetails from "../astronomy-details/astronomy-details";
import AstronomyList from "../astronomy-list/astronomy-list";

import "./app.css";

const App = () => {
    return (
        <React.Fragment>
            <Header/>
            <Switch>
                <Route path="/" exact component={AstronomyDetails}/>
                <Route path="/catalog" component={AstronomyList}/>
            </Switch>
        </React.Fragment>
    )
}

export default withAstronomyService()(App);