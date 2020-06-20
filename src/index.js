import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import App from "./components/app/app";
import AstronomyService from "./services/astronomy-service";
import {AstronomyProvider} from "./components/astronomy-service-context/astronomy-service-context";

import "./index.css";

import store from "./store";

const astronomyService = new AstronomyService();

ReactDOM.render(
    <Provider store={store}>
        <AstronomyProvider value={astronomyService}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </AstronomyProvider>
    </Provider>
    ,
    document.getElementById('root')
);