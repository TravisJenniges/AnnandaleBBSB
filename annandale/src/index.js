import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { App, Levels, Rules, Schedules, Contact } from './App';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';


function gebID(elem) {
    return document.getElementById(elem);
}

ReactDOM.render(<Routes history={hashHistory} />, gebID('root'));

registerServiceWorker();
