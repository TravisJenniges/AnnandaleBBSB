import { Router, IndexRoute, Route } from 'react-router';
import styles from './css/App.css';
import {NavBar} from './content/navbar';
import {GenInfo, Softball, Baseball} from './content/geninfo';
import {Date} from './content/schedule';

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
	    )
	}
}
export class Levels extends React.Component {
	render()
	{
		return (
			<div>
				<NavBar />
				<div className="PageCont">
				</div>
			</div>

		)
	}
}
export class Rules extends React.Component {
	render()
	{
		return (
			<div>
				<NavBar />
				<div className="PageCont">
				</div>
			</div>
		)
	}
}
export class Schedules extends React.Component {
    render()
	{
	    return (
	    	<div>
		    	<NavBar />
		    	<div className="PageCont">
                {/*
                * Set park vals to team who claims them. Exclude if field is available.
                * Date props: {varsityBaseball, clearwater1, clearwater2, cityPark, bigWoods, southHaven, middleSchool, varsitySoftball}
                * Fairly confident there is a better way to do this... will do more research
                */}
			    	<Date varsityBaseball="12B" bigWoods="10A">June 10</Date>
                    <Date clearwater1="9AA" southHaven="12B">June 11</Date>
                    <Date bigWoods="13A">June 12</Date>
			    </div>
		    </div>
	    )
	}
}
export class Contact extends React.Component {
	render()
	{
		return (
			<div>
				<NavBar />
				<div className="PageCont">
				</div>
			</div>
		)
	}
}
