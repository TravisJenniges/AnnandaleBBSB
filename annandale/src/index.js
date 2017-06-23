import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './navbar';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


function gebID(elem) {
    return document.getElementById(elem);
}

ReactDOM.render(<App />, gebID('root'));
registerServiceWorker();

ReactDOM.render(<NavBar />, gebID('root'));