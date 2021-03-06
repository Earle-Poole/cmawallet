/* eslint-disable react/jsx-indent */
import React from 'react';
import './Logo.css';
import logo from '../../Images/CMAlogo.png';

const Logo = () => (
	<div id="logo-bg">
		<img className="logo" id="logo" alt="CMAWallet Logo | Concealed Wallet Holster | Gun | Firearm | Holster" src={logo} />
	</div>
);

export default Logo;
