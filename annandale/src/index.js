import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { App, Levels } from './App';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


function gebID(elem) {
    return document.getElementById(elem);
}

ReactDOM.render(<Routes history={browserHistory} />, gebID('root'));

registerServiceWorker();