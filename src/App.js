import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import BottomNavigation from './components/BottomNavigation/BottomNavigation'
import Logo from './components/Logo/Logo';
import Home from './components/Home/Home';
import Popup from './components/Popup/Popup';
import LEOMilitary from './components/LEOMilitary/LEOMilitary';
import SafetyUse from './components/SafetyUse/SafetyUse';
import ProductDesign from './components/ProductDesign/ProductDesign';
import FormsLinks from './components/FormsLinks/FormsLinks';
import WhereToBuy from './components/WhereToBuy/WhereToBuy';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
import ContactUs from './components/ContactUs/ContactUs';
import Scenarios from './components/Scenarios/Scenarios';
import Blog from './components/Blog/Blog';
import './App.css';
import 'tachyons';

//TO-DO: Add link to email in LEOMilitary


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
        ( route === 'leomilitary')
        ? <div>
          <LEOMilitary />
          </div> : 
        ( route === 'safetyuse')
        ? <div>
          <SafetyUse />
          </div> : 
        ( route === 'productdesign')
        ? <div>
          <ProductDesign onRouteChange={this.onRouteChange}/>
          </div> : 
        ( route === 'formslinks') 
        ? <div>
          <FormsLinks />
          </div> : 
        ( route === 'wheretobuy') 
        ? <div>
          <WhereToBuy />
          </div> : 
        ( route === 'termsandconditions'
        ? <div>
          <TermsAndConditions />
          </div> : 
        ( route === 'contactus')
        ? <div>
          <ContactUs />
          </div> : 
        ( route === 'scenarios')
        ? <div>
          <Scenarios />
          </div> : 
        ( route ==='blog')
        ? <div>
          <Blog />
          </div> : <div></div>
        )
        }
        <BottomNavigation onRouteChange={this.onRouteChange}/>
      </div>
    );
  }
}

export default App;
