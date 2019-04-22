/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import Logo from './components/Logo/Logo';
import Home from './components/Home/Home';
import Popup from './components/Popup/Popup';
import LEOMilitary from './components/LEOMilitary/LEOMilitary';
import SafetyUse from './components/SafetyUse/SafetyUse';
import ProductDesign from './components/ProductDesign/ProductDesign';
import FormsLinks from './components/FormsLinks/FormsLinks';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
import ContactUs from './components/ContactUs/ContactUs';
import Scenarios from './components/Scenarios/Scenarios';
import Blog from './components/Blog/Blog';
import CompatibilityList from './components/CompatabilityList/CompatibilityList';
import './App.css';
import 'tachyons';

class App extends Component {
		state = {
			initialState: {
				route: 'home',
			},
		};

	onRouteChange = (input) => {
		this.setState({ initialState: { route: input } });
	}

	routeSelector = () => {
		const { route } = this.state.initialState;
		switch (route) {
		case 'home':
			return (
				<div>
					<Popup />
					<Home />
				</div>
			);
		case 'leomilitary':
			return (
				<LEOMilitary />
			);
		case 'safetyuse':
			return (
				<SafetyUse />
			);
		case 'productdesign':
			return (
				<ProductDesign
					onRouteChange={this.onRouteChange}
				/>
			);
		case 'formslinks':
			return (
				<FormsLinks />
			);
		case 'termsandconditions':
			return (
				<TermsAndConditions />
			);
		case 'contactus':
			return (
				<ContactUs />
			);
		case 'scenarios':
			return (
				<Scenarios />
			);
		case 'blog':
			return (
				<Blog />
			);
		case 'compatibilitylist':
			return (
				<CompatibilityList />
			);
		default:
			return null;
		}
	}

	render() {
		return (
			<div className="App">
				<Logo />
				<Navigation onRouteChange={this.onRouteChange} />
				<div>
					{this.routeSelector()}
				</div>
				<BottomNavigation onRouteChange={this.onRouteChange} />
			</div>
		);
	}
}

export default App;
