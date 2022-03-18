import React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Route, Router , } from "react-router-dom";
import App from "./App";
import Header from "./Header";


ReactDOM.render(
    <>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>
    ,document.getElementById('root')
);
