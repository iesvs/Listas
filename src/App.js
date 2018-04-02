import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
	color: "#fff"
};
let fakeServerData = {
	user: {
		name: "Jebus",
		playlists: [
			{
				name: "Playlist ONE",
				songs:[
							{name: "Song 1 PL ONE", duration: 1345},
							{name: "Song 2 PL ONE", duration: 1350},
							{name: "Song 3 PL ONE", duration: 1350}
						]
			},
			{
				name: "Playlist TWO",
				songs:[
							{name: "Song 1 PL TWO", duration: 1345},
							{name: "Song 2 PL TWO", duration: 1309},
							{name: "Song 3 PL TWO", duration: 1234}
						]
			},
			{
				name: "Playlist THREE",
				songs:[
							{name: "Song 1 PL THREE", duration: 1345},
							{name: "Song 2 PL THREE", duration: 1220},
							{name: "Song 3 PL THREE", duration: 1310}
						]
			},
			{
				name: "Playlist FOUR",
				songs:[
							{name: "Song 1 PL FOUR", duration: 1345},
							{name: "Song 2 PL FOUR", duration: 1300},
							{name: "Song 3 PL FOUR", duration: 1200}
			]
			}
		]
	}
};

class PlaylistCounter extends Component {
	render(){
		return(
			<div style={{...defaultStyle, width: "40%", display: "inline-block"}}>
				<h2>{this.props.playlists && this.props.playlists.length} Playlists</h2>
			</div>
		);
	}
}

class HoursCounter extends Component {
	render(){
		let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
			return songs.concat(eachPlaylist.songs)
		}, [])
		let totalDuration = allSongs.reduce((sum, eachSong) => {
			return sum + eachSong.duration
		}, 0)
		return(
			<div style={{...defaultStyle, width: "40%", display: "inline-block"}}>
				<h2>{Math.round(totalDuration/60)} Hours</h2>
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
	constructor(){
		super();
		this.state = {serverData: {}}
	}
	componentDidMount(){
		setTimeout(() => {
			this.setState((state) => ({ serverData: fakeServerData}));
			//console.log(this.state.serverData);

		}, 1000);
		
	}
  	render() {
		let appName = "Validacion de los CFDIs"
		return (
			<div className="App">
				{this.state.serverData.user ? 
				<div>
					<h1 style={{...defaultStyle, "fontSize": "54px"}}>
						{this.state.serverData.user.name}'s Music Playlists
					</h1>
					<PlaylistCounter playlists={this.state.serverData.user.playlists}/>
					<HoursCounter playlists={this.state.serverData.user.playlists}/>
					<Filter/>
					<Playlist/>
					<Playlist/>
					<Playlist/>
					<Playlist/>
				</div> : <h1 style={defaultStyle}>Loading...</h1>
				}
			</div>
		);
	}
}

export default App;
