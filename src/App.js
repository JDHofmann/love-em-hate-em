import React from 'react'
import './App.css';
import Header from './Header'
import List from './Containers/List'
import Good from './Containers/Good'
import Bad from './Containers/Bad'

class App extends React.Component {

  render(){

    return (
      <div className="App">
        <Header />
        <List />
        <Good />
        <Bad />
      </div>
    );
  }
}

export default App;
