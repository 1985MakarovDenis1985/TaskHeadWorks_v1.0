import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {compose, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

//------------------------------
import App from "./App";



ReactDOM.render(
        <App/>,
    document.getElementById('root')
);
