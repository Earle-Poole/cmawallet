import React from 'react';
import './Navigation.css'

const Navigation = ({onRouteChange}) => {
    return(
        <nav>
            <p onClick={() => onRouteChange('home')} className='link pointer underline ph2'>Home</p>
            <p onClick={() => onRouteChange('leomilitary')} className='link pointer underline ph2'>LEO/Military</p>
            <p onClick={() => onRouteChange('safetyuse')} className='link pointer underline ph2'>Safety & Use</p>
            <p onClick={() => onRouteChange('wheretobuy')} className='link pointer underline ph2'>Where to buy</p>
            <p onClick={() => onRouteChange('formslinks')} className='link pointer underline ph2'>Forms & Links</p>
            <p onClick={() => onRouteChange('scenarios')} className='link pointer underline ph2'>Scenarios</p>
        </nav>
    )
}

export default Navigation;