/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-indent */
import React from 'react';
import './Navigation.css';

// eslint-disable-next-line react/prop-types
const Navigation = ({ onRouteChange }) => (
	<div id="navigation-bg">
		<nav className="bb bt mw8 mb4 center flex-wrap">
			<p onKeyPress={null} onClick={() => onRouteChange('home')} className="link pointer underline bg-animate hover-bg-black-10 pa2-m pa3-l ma1 b f7 f6-m f5-l">Home</p>
			<p onKeyPress={null} onClick={() => onRouteChange('leomilitary')} className="link pointer underline bg-animate hover-bg-black-10 pa2-m pa3-l ma1 b f7 f6-m f5-l">LEO/Military</p>
			<p onKeyPress={null} onClick={() => onRouteChange('safetyuse')} className="link pointer underline bg-animate hover-bg-black-10 pa2-m pa3-l ma1 b f7 f6-m f5-l">Safety & Use</p>
			<p className="link pointer underline bg-animate hover-bg-black-10 pa2-m pa3-l ma1 b f7 f6-m f5-l"><a href="https://shoppy.gg/product/hfRLCkS" className="black" target="_blank" rel="noopener noreferrer">Where to buy</a></p>
			<p onKeyPress={null} onClick={() => onRouteChange('formslinks')} className="link pointer underline bg-animate hover-bg-black-10 pa2-m pa3-l ma1 b f7 f6-m f5-l">Forms & Links</p>
			<p onKeyPress={null} onClick={() => onRouteChange('scenarios')} className="link pointer underline bg-animate hover-bg-black-10 pa2-m pa3-l ma1 b f7 f6-m f5-l">Scenarios</p>
			<p onKeyPress={null} onClick={() => onRouteChange('productdesign')} className="link pointer underline bg-animate hover-bg-black-10 pa2-m pa3-l ma1 b f7 f6-m f5-l">Product Design</p>
		</nav>
	</div>
);

export default Navigation;
