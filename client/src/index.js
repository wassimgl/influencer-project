import React from 'react';
import './index.css'
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import * as ReactDOMClient from 'react-dom/client';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
axios.defaults.baseURL = 'https://influencer-projet.herokuapp.com/';
const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Provider store = {store}>
        <App />
    </Provider>
    </BrowserRouter>
);
