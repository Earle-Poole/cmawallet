import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Home from './components/Home/Home'
import Popup from './components/Popup/Popup';
import './App.css';
import 'tachyons';

const initialState = {
  route: 'home',
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState;
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }
  
  render() {
    const { route } = this.state;
    return (
      <div className="App">
        <Logo />
        <Navigation onRouteChange={this.onRouteChange}/> 
        { route === 'home'
      ? <div>
        <Popup />
        <Home />
      </div> :
        <div>

        </div> }
      </div>
    );
  }
}

export default App;
