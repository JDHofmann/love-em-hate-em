import React from 'react'
import './App.css';
import Header from './Header'
import List from './Containers/List'
import Good from './Containers/Good'
import Bad from './Containers/Bad'

class App extends React.Component {

  goodClickHandler = (member) => {
    console.log(member)
  }

  badClickHandler = (member) => {
    console.log(member)
  }

  render(){

    return (
      <div className="App">
        <Header />
        <List 
          goodClickHandler={this.goodClickHandler}
          badClickHandler={this.badClickHandler}
          />
        <Good />
        <Bad />
      </div>
    );
  }
}

export default App;
