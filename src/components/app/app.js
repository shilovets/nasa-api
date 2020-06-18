import React, {Component} from "react";
import PictureDetails from "../picture-details/picture-details";

import "./app.css";
import Header from "../header/header";
import {BrowserRouter, Switch, Route} from "react-router-dom";

export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/" exact component={PictureDetails}/>
                    <Route path="/catalog" render={() => <h1>This is future catalog</h1>}/>
                </Switch>
            </BrowserRouter>
        )
    }
}