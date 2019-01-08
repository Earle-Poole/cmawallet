import React from 'react';
import './BottomNavigation.css';

const BottomNavigation = ({onRouteChange}) => {
    return(
        <div>
            <div>
                <nav className='bb bt mw8 center mt4 mb4'>
                    <p onClick={() => onRouteChange('home')} className='link pointer underline bg-animate hover-bg-black-10 pa1 pa2-m pa3-l ma1 b f7 f6-m f5-l'>Home</p>
                    <p onClick={() => onRouteChange('contactus')} className='link pointer underline bg-animate hover-bg-black-10 pa1 pa2-m pa3-l ma1 b f7 f6-m f5-l'>Contact Us</p>
                    <p onClick={() => onRouteChange('termsandconditions')} className='link pointer underline bg-animate hover-bg-black-10 pa1 pa2-m pa3-l ma1 b f7 f6-m f5-l'>Terms & Conditions</p>
                    <p onClick={() => onRouteChange('safetyuse')} className='link pointer underline bg-animate hover-bg-black-10 pa1 pa2-m pa3-l ma1 b f7 f6-m f5-l'>Safety & Use</p>
                    <p onClick={() => onRouteChange('blog')} className='link pointer underline bg-animate hover-bg-black-10 pa1 pa2-m pa3-l ma1 b f7 f6-m f5-l'>Blog</p>
                </nav>
            </div>
            <div className='ma3 f7 f6-m f5-l black i'>
                <p>Copyright © 2018 CMA Wallets, LLC</p>
                <p>Website by <a target="_blank" rel="noopener noreferrer" href='https://github.com/Earle-Poole#'><span className='black underline grow'>Earle Poole</span></a>.</p>
            </div>
        </div>
    )
}

export default BottomNavigation;