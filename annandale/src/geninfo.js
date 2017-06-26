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
export class Softball extends React.Component {
	render() 
	{
		return (
			<div>
				<div>
					<h2>ATL Youth Fast Pitch Association</h2>
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
				</div>
				<div>
					<h2>Tier II Softball</h2>
					<ul>
						<li>Most Players will be registered in this division.</li>
						<li>Same rules as previous years.</li>
						<li>All Girls will be placed in their qualifying Age Bracket unless a Parent or Guardian request the player participate in an older Age Bracket.  This must be noted on the registration form.</li>
						<li>Rules: <a href="http://www.CrowRiverFastPitch.com" target="_blank">See Crow River Youth Softball web page</a>.</li>
					</ul>
				</div>
				<div>
					<h2>Tier I Softball</h2>
					<ul>
						<li>Player should have previously played in summer traveling league and is participating in AHS softball.</li>
						<li>Because of the higher expectations most players qualify for division B softball.</li>
						<li>Higher level of competition and more advanced skills (pitching, hitting, throwing) are required.</li>
						<li>More practice time and weekend tournaments can be expected.</li>
						<li>All Girls will be placed in their qualifying age bracket unless a parent or guardian requests the player participate in an older age bracket. This must be noted on the registration form.</li>
						<li>Each game night will be a double header of 70 minutes or 5 inning games.</li>
						<li>The starting time is 6pm (15 min grace period for late arrivals).</li>
						<li>Umpires will be ASA certified or umpires mutually agreed upon by both coaches.</li>
					</ul>
				</div>
			</div>
		);
	}
};
export class Baseball extends React.Component {
	render()
	{
		return (
			<div>
				<div>
					<h2>Crow River Youth Baseball Association</h2>
					<p>Bracket of player is determined by age through April 30 of current year of participation (see registration form).</p>
					<p><a href="http://www.Herald-Journal.com/rec/baseball.html" target="_blank">CRYB Rules</a>.</p>
				</div>
				<div>
					<h2>Divison B Baseball</h2>
					<ul>
						<li>Most players are expected to be playing in this division.</li>
						<li>Same rules and format as previous years.</li>
						<li>Weekend tournament at the discretion of coaches.</li>
					</ul>
				</div>
				<div>
					<h2>Division A Baseball</h2>
					<ul>
						<li>Player should have played previously in summer traveling league and is participating in AHS baseball if a program is available.</li>
						<li>Higher level of competition and more advanced skills (pitching, hitting, throwing) required.</li>
						<li>More practice time and weekend tournaments are expected.</li>
						<li>Division A teams will only play Division A teams.</li>
					</ul>
				</div>
			</div>
		)
	}
};