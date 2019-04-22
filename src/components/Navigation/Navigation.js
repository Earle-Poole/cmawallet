/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-indent */
import React from 'react';
import './Navigation.css';

// eslint-disable-next-line react/prop-types
const Navigation = ({ onRouteChange }) => (
	<div id="navigation-bg">
		<nav className="bb bt mw8 mb4 center flex-wrap">
			<p onKeyPress={null} onClick={() => onRouteChange('home')} className="link pointer underline bg-animate hover-bg-black-10 pa0 pa1-m pa2-l ma1 ma2-m ma3-l b f6 f5-m f4-l">Home</p>
			<p onKeyPress={null} onClick={() => onRouteChange('leomilitary')} className="link pointer underline bg-animate hover-bg-black-10 pa0 pa1-m pa2-l ma1 ma2-m ma3-l b f6 f5-m f4-l">LEO/Military</p>
			<p onKeyPress={null} onClick={() => onRouteChange('safetyuse')} className="link pointer underline bg-animate hover-bg-black-10 pa0 pa1-m pa2-l ma1 ma2-m ma3-l b f6 f5-m f4-l">Safety & Use</p>
			<p className="link pointer underline bg-animate hover-bg-black-10 pa0 pa1-m pa2-l ma1 ma2-m ma3-l b f6 f5-m f4-l"><a href="https://shoppy.gg/product/hfRLCkS" className="black" target="_blank" rel="noopener noreferrer">Buy It Now</a></p>
			<p onKeyPress={null} onClick={() => onRouteChange('formslinks')} className="link pointer underline bg-animate hover-bg-black-10 pa0 pa1-m pa2-l ma1 ma2-m ma3-l b f6 f5-m f4-l">Forms & Links</p>
			<p onKeyPress={null} onClick={() => onRouteChange('scenarios')} className="link pointer underline bg-animate hover-bg-black-10 pa0 pa1-m pa2-l ma1 ma2-m ma3-l b f6 f5-m f4-l">Scenarios</p>
			<p onKeyPress={null} onClick={() => onRouteChange('compatibilitylist')} className="link pointer underline bg-animate hover-bg-black-10 pa0 pa1-m pa2-l ma1 ma2-m ma3-l b f6 f5-m f4-l">Compatibility List</p>
		</nav>
	</div>
);

export default Navigation;
