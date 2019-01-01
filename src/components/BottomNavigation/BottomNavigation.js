import React from 'react';
import './BottomNavigation.css'

const BottomNavigation = ({onRouteChange}) => {
    return(
        <div>
            <nav className='bb bt mw8 center mt4 mb2'>
                <p onClick={() => onRouteChange('home')} className='link b pointer underline pa3 ph4-l f7 grow f6-l'>Home</p>
                <p onClick={() => onRouteChange('contactus')} className='link b pointer underline pa3 ph4-l f7 grow f6-l'>Contact us</p>
                <p onClick={() => onRouteChange('termsandconditions')} className='link b pointer underline pa3 ph4-l f7 grow f6-l'>Terms & Conditions</p>
                <p onClick={() => onRouteChange('blog')} className='link b pointer underline pa3 ph4-l f7 grow f6-l'>Blog</p>
            </nav>
            <div className='ma3 f7 f6-l dark-gray i'>
                <p>Copyright © 2018 CMA Wallets, LLC</p>
                <p>Website by <a target="_blank" rel="noopener noreferrer" href='https://github.com/Earle-Poole#'><span className='black'>Earle Poole</span></a>.</p>
            </div>
        </div>
    )
}

export default BottomNavigation;