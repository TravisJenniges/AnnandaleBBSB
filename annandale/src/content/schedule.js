
var React = require('react');
var ReactDOM = require('react-dom');

export class Date extends React.Component {
    render()
    {
        const fields = {
            'Varsity Baseball': this.props.varsityBaseball,
            'Clearwater #1': this.props.clearwater1,
            'Clearwater #2': this.props.clearwater2,
            'City Park': this.props.cityPark,
            'Big Woods': this.props.bigWoods,
            'South Haven': this.props.southHaven,
            'Middle School': this.props.middleSchool,
            'Varsity Softball': this.props.varsitySoftball
        }
        const fieldAvail = Object.entries(fields).map(([key,value]) => {
            return (
                <li>{key} : {value === true ? 'Available' : value}</li>
            );
        })
        return (
            <ul>{fieldAvail}</ul>
        )
    }
}
Date.defaultProps = {
    varsityBaseball: true,
    clearwater1: true,
    clearwater2: true,
    cityPark: true,
    bigWoods: true,
    southHaven: true,
    middleSchool: true,
    varsitySoftball: true
}
class Field extends React.Component {
    render()
    {
        return (
            <h2>{this.props.name}: {this.props.available ===  true ? 'Available' : this.props.team}</h2>
        )
    }
}
Field.defaultProps = {
    name: null,
    team: null,
    available: false
}
