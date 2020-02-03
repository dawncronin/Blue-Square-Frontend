import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import userReducer from './reducers/manageUsers.js';
import resortsReducer from './reducers/manageResorts.js';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    userReducer,
    resortsReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
        , document.getElementById('root'));


serviceWorker.unregister();
