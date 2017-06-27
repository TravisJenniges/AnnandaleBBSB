import { Router, IndexRoute, Route } from 'react-router';
import styles from './App.css';
import {NavBar} from './navbar';
import {GenInfo, Softball, Baseball} from './geninfo';

var React = require('react');
var ReactDOM = require('react-dom');

export class App extends React.Component {
    render()
	{
	    return (
	    	<div>
		    	<NavBar />
		    	<div className="PageCont">
			    	<GenInfo />
			    	<Softball />
			    	<Baseball />
			    </div>
		    </div>
	    );
	}
};
export class Levels extends React.Component {
	render() 
	{
		return (
			<div>
				<h2>Levels</h2>
			</div>

		);
	}
};

