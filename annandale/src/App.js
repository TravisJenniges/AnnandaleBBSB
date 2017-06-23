import styles from './App.css';
import {NavBar} from './navbar';
import {GenInfo, YouthFPA} from './geninfo';

var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
    render:
	function()
	{
	    return (
	    	<div>
		    	<NavBar />
		    	<GenInfo />
		    	<YouthFPA />
		    </div>
	    );
	}
});

export default App;
