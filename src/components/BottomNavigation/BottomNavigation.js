/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-indent */
import React from 'react';
import './BottomNavigation.css';

// eslint-disable-next-line react/prop-types
const BottomNavigation = ({ onRouteChange }) => (
	<div>
		<div>
			<nav className="bb bt mw8 center mv4 nowrap flex-wrap self-center">
				<p onKeyPress={null} onClick={() => onRouteChange('home')} className="link pointer underline bg-animate hover-bg-black-10 pa0 pa1-m pa2-l ma1 ma2-m ma3-l b f6 f5-m f4-l">Home</p>
				<p onKeyPress={null} onClick={() => onRouteChange('contactus')} className="link pointer underline bg-animate hover-bg-black-10 pa0 pa1-m pa2-l ma1 ma2-m ma3-l b f6 f5-m f4-l">Contact Us</p>
				<p onKeyPress={null} onClick={() => onRouteChange('termsandconditions')} className="link pointer underline bg-animate hover-bg-black-10 pa0 pa1-m pa2-l ma1 ma2-m ma3-l b f6 f5-m f4-l">Terms & Conditions</p>
				<p onKeyPress={null} onClick={() => onRouteChange('safetyuse')} className="link pointer underline bg-animate hover-bg-black-10 pa0 pa1-m pa2-l ma1 ma2-m ma3-l b f6 f5-m f4-l">Safety & Use</p>
				<p onKeyPress={null} onClick={() => onRouteChange('blog')} className="link pointer underline bg-animate hover-bg-black-10 pa0 pa1-m pa2-l ma1 ma2-m ma3-l b f6 f5-m f4-l">Blog</p>
				<p onKeyPress={null} onClick={() => onRouteChange('productdesign')} className="link pointer underline bg-animate hover-bg-black-10 pa0 pa1-m pa2-l ma1 ma2-m ma3-l b f6 f5-m f4-l">Product Design</p>
			</nav>
		</div>
		<div className="f6 f5-m f4-l black i">
			<p>Copyright © 2019 CMA Wallets, LLC</p>
			<p>
				{'Website by '}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/Earle-Poole#"
				>
					<span className="black underline grow">
						{'Earle Poole'}
					</span>
				</a>
			</p>
		</div>
	</div>
);

export default BottomNavigation;
