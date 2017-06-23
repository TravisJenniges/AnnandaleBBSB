var React = require('react');
var ReactDOM = require('react-dom');

var pages = ['home', 'levels', 'rules', 'schedules'];

export class NavBar extends React.Component {
	render() 
	{
		var pageLI = pages.map(function(page, i) {
			return <li key={'link_'+i}><a href={page}>{page}</a></li>
		});
		return (<ul>{pageLI}</ul>);
	}
};