import React from 'react'
import './App.css';
import Header from './Header'
import List from './Containers/List'
import Good from './Containers/Good'
import Bad from './Containers/Bad'
import {apiResponse} from './api'

class App extends React.Component {

  state = {
    api: apiResponse
  }

  goodClickHandler = (artist) => {
    // console.log("good: ", artist)
    let newObject = {...this.state}
    let foundArtist = newObject.api.items.find( a => a.name === artist.name)
    foundArtist.status = "good"
    this.setState({newObject})
  }

  badClickHandler = (artist) => {
    // console.log("bad: ", artist)
    let newObject = {...this.state}
    let foundArtist = newObject.api.items.find( a => a.name === artist.name)
    foundArtist.status = "bad"
    this.setState({newObject})
  }

  filterGood = () => {
    return this.state.api.items.filter( artist => artist.status === "good")
  }

  filterBad = () => {
    return this.state.api.items.filter( artist => artist.status === "bad")
  }
  
  render(){
    return (
      <div className="App">
        <Header />
        <List 
          artists={this.state.api}
          goodClickHandler={this.goodClickHandler}
          badClickHandler={this.badClickHandler}
          />
        <Good 
          artists={this.filterGood()}
          goodClickHandler={this.goodClickHandler}
          badClickHandler={this.badClickHandler}
        />
        <Bad 
          artists={this.filterBad()}
          goodClickHandler={this.goodClickHandler}
          badClickHandler={this.badClickHandler}
        />
      </div>
    );
  }
}

export default App;
