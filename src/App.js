import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let fakeServerData ={
  user:{
    name:'Shilakha',
    playLists:[
      {
        name:'My Favorites',
        songs:[
        {name: 'Le song', duration:1000},
        {name:'the song', duration:1000},
        {name:'Salagona', duration:1000}]
      },
      {
        name:'Discover Weekly',
        songs:[
        {name: 'Le song', duration:1000},
        {name:'the song', duration:1000},
        {name:'Salagona', duration:1000}]
      },
      {
        name:'Another Playlist --the best!',
        songs:[
        {name: 'Le song', duration:1000},
        {name:'the song', duration:1000},
        {name:'Salagona', duration:1000}]
      },
      {
        name:'Playlist-yeah!',
        songs:[
          {name: 'Le song', duration:1000},
          {name:'the song', duration:1000},
          {name:'Salagona', duration:1000}]
      }
    ]
  }
}

class PlaylistCounter extends Component {
  render(){
    return(
      <div style={{width:"40%", display:"inline-block"}}>
          <h2 style={{color:"#0000FF"}}>{this.props.playLists.length} Playlists</h2>
      </div>
    )
  }
}
// reduce reduces something to single value. 
// Here the playlists gets reduced to list of songs
class HoursCounter extends Component {
  render(){
    let allSongs=this.props.playLists.reduce((songs, eachPlaylist) =>{
      return songs.concat(eachPlaylist.songs)

    },[])
    let totalDuration=allSongs.reduce((sum, eachSong) =>{
      return sum+eachSong.duration
    },0)
    return(
      <div style={{width:"40%", display:"inline-block"}}>
          <h2 style={{color:"#0000FF"}}>{Math.round(totalDuration/60)} hours</h2>
      </div>
    )
  }
}

class Filter extends Component{
  render(){
    return (
      <div>
        <img/>
        <input type='text' onKeyUp={event=>this.props.onTextChange(event.target.value)}/> Filter
      </div>
    )
  }
}

class PlayList extends Component{
  render(){
    let playlist = this.props.playlist
    return (
      <div style={{display:'inline-block', width:'25%'}}>
        <img/>
        <h3>{playlist.name}</h3>
        <ul>
          {playlist.songs.map(song=>
          <li>{song.name}</li>
          )}
          </ul>
      </div>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
        serverData:{},
        filterString:""
    }
  }
  
  componentDidMount(){
    setTimeout(()=> {
      this.setState({serverData:fakeServerData});}, 1000);
    
    
    
  }

  render() {
    return (
      <div className="App">
        {this.state.serverData.user ? 
        <div>
        <h1>
        {this.state.serverData.user.name}'s Playlist</h1>
        <PlaylistCounter playLists={this.state.serverData.user.playLists}/>
        <HoursCounter playLists={this.state.serverData.user.playLists}/>
        <Filter onTextChange={text=> this.setState({filterString:text})}/>
        {
          this.state.serverData.user.playLists.filter(playlist=> playlist.name.toLowerCase().includes(this.state.filterString.toLowerCase())).map(playlist=>
            <PlayList playlist={playlist}/>
          )
        }
        
        
      </div> :<h1>Loading...</h1>
        }
        </div>
    );
  }
}

export default App;
