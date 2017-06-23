var React = require('react');
var ReactDOM = require('react-dom');

export class GenInfo extends React.Component {
	render() 
	{
		return (		
			<div>			
				<h2>General Information</h2>
				<p>This is a traveling league with ASA/AABC/MSF sanction and member of the Crow River Youth Baseball Associaion and Crow River Fast Pitch Association</p>
			</div>
		);
	}
};
export class YouthFPA extends React.Component {
	render() 
	{
		return (
			<ul id="fpaInfo">
				<li>Bracket of player is determined by age through December 31 of the previous year of participation (see registration form).</li>
				<li>Tiering of A-B Baseball and Tier I-II Softball teams is based upon:
					<ul>
						<li>Previous season player evaluation</li>
						<li>coaches descisions</li>
					</ul>
				</li>
				<li>This will be done at ATL Coaches meetings</li>
				<li> <a href="http://www.CrowRiverFastPitch.com" target="_blank">CRF Rules</a> (navigate to "League Rules" tab)</li>
				<li>IOU Teams are not tiered</li>
			</ul>
		);
	}
};

