import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Header from "../header/header";
import PictureDetails from "../picture-details/picture-details";
import PictureList from "../picture-list/picture-list";

import "./app.css";

export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/" exact component={PictureDetails}/>
                    <Route path="/catalog" component={PictureList}/>
                </Switch>
            </BrowserRouter>
        );
    };
};