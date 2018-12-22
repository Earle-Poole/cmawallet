import React from 'react';
import './Logo.css';
import logo from '../../Images/CMAlogo.png'

const Logo = () => {
    return (
        <div>
            <img className="logo" alt='CMAWallet Logo | Concealed Wallet Holster | Gun | Firearm | Holster' src={logo}/>
        </div>
    )
}

export default Logo;