import React from 'react';
import './Navigation.css'

const Navigation = ({onRouteChange}) => {
    return(
        <nav className='bb bt mw8 center mb4'>
            <p onClick={() => onRouteChange('home')} className='link pointer dib underline bg-animate hover-bg-black-10 pa3 ph4-l b f7 f6-l'>Home</p>
            <p onClick={() => onRouteChange('leomilitary')} className='link pointer dib underline bg-animate hover-bg-black-10 pa3 ph4-l b f7 f6-l'>LEO/Military</p>
            <p onClick={() => onRouteChange('safetyuse')} className='link pointer dib underline bg-animate hover-bg-black-10 pa3 ph4-l b f7 f6-l'>Safety & Use</p>
            <p onClick={() => onRouteChange('wheretobuy')} className='link pointer dib underline bg-animate hover-bg-black-10 pa3 ph4-l b f7 f6-l'>Where to buy</p>
            <p onClick={() => onRouteChange('formslinks')} className='link pointer dib underline bg-animate hover-bg-black-10 pa3 ph4-l b f7 f6-l'>Forms & Links</p>
            <p onClick={() => onRouteChange('scenarios')} className='link pointer dib underline bg-animate hover-bg-black-10 pa3 ph4-l b f7 f6-l'>Scenarios</p>
            <p onClick={() => onRouteChange('productdesign')} className='link pointer dib underline bg-animate hover-bg-black-10 pa3 ph4-l b f7 f6-l'>Product Design</p>
        </nav>
    )
}

export default Navigation;