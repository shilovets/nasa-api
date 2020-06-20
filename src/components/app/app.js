import React from "react";
import {Switch, Route} from "react-router-dom";
import {withAstronomyService} from "../hoc/with-astronomy-service";

import Header from "../header/header";
import PictureDetails from "../picture-details/picture-details";
import PictureList from "../picture-list/picture-list";

import "./app.css";

const App = () => {
    return (
        <React.Fragment>
            <Header/>
            <Switch>
                <Route path="/" exact component={PictureDetails}/>
                <Route path="/catalog" component={PictureList}/>
            </Switch>
        </React.Fragment>
    )
}

export default withAstronomyService()(App);