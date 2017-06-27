import styles from './App.css';
import {NavBar} from './navbar';
import {GenInfo, Softball, Baseball} from './geninfo';

var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
    render:
	function()
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
});

export default App;
