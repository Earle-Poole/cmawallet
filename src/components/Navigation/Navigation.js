import React from 'react';
import './Navigation.css'

const Navigation = ({onRouteChange}) => {
    return(
        <nav className='bb bt mw8 center mb4'>
            <p onClick={() => onRouteChange('home')} className='link pointer underline pa3 ph4-l f6 f5-l'>Home</p>
            <p onClick={() => onRouteChange('leomilitary')} className='link pointer underline pa3 ph4-l f6 f5-l'>LEO/Military</p>
            <p onClick={() => onRouteChange('safetyuse')} className='link pointer underline pa3 ph4-l f6 f5-l'>Safety & Use</p>
            <p onClick={() => onRouteChange('wheretobuy')} className='link pointer underline pa3 ph4-l f6 f5-l'>Where to buy</p>
            <p onClick={() => onRouteChange('formslinks')} className='link pointer underline pa3 ph4-l f6 f5-l'>Forms & Links</p>
            <p onClick={() => onRouteChange('scenarios')} className='link pointer underline pa3 ph4-l f6 f5-l'>Scenarios</p>
        </nav>
    )
}

export default Navigation;