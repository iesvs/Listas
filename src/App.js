import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = "#000"
let defaultStyle = {
		color: defaultTextColor
}
class Aggregate extends Component {
	render(){
		return(
			<div style={{...defaultStyle, width: "40%", display: "inline-block"}}>
				<h2>Number Text</h2>
			</div>
		);
	}
}

class Filter extends Component {
	render(){
		return(
			<div style={defaultStyle}>
				<img/>
				<input type="text"/>
				Filter
			</div>
		);
	}
}

class Playlist extends Component{
	render(){
		return(
			<div style={{...defaultStyle, display: "inline-block", width: "25%"}}>
				<img />
				<h3>Playlist Name</h3>
				<ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
			</div>
		);
	}

}

class App extends Component {
  	render() {
		let appName = "Validacion de los CFDIs"
		return (
			<div className="App">
				<h1>Title</h1>
				<Aggregate/>
				<Aggregate/>
				<Filter/>
				<Playlist/>
				<Playlist/>
				<Playlist/>
				<Playlist/>
			</div>
		);							


		/*return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">{appName}</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);*/
	}
}

export default App;
