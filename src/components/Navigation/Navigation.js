import React from 'react';
import './Navigation.css'

const Navigation = ({onRouteChange}) => {
    return(
        <div id='navigation-bg'>
            <nav className='bb bt mw8 mb4 center flex-wrap'>
                <p onClick={() => onRouteChange('home')} className='link pointer underline bg-animate hover-bg-black-10 pa1 pa2-m pa3-l ma1 b f7 f6-m f5-l'>Home</p>
                <p onClick={() => onRouteChange('leomilitary')} className='link pointer underline bg-animate hover-bg-black-10 pa1 pa2-m pa3-l ma1 b f7 f6-m f5-l'>LEO/Military</p>
                <p onClick={() => onRouteChange('safetyuse')} className='link pointer underline bg-animate hover-bg-black-10 pa1 pa2-m pa3-l ma1 b f7 f6-m f5-l'>Safety & Use</p>
                <p onClick={() => onRouteChange('wheretobuy')} className='link pointer underline bg-animate hover-bg-black-10 pa1 pa2-m pa3-l ma1 b f7 f6-m f5-l'>Where to buy</p>
                <p onClick={() => onRouteChange('formslinks')} className='link pointer underline bg-animate hover-bg-black-10 pa1 pa2-m pa3-l ma1 b f7 f6-m f5-l'>Forms & Links</p>
                <p onClick={() => onRouteChange('scenarios')} className='link pointer underline bg-animate hover-bg-black-10 pa1 pa2-m pa3-l ma1 b f7 f6-m f5-l'>Scenarios</p>
                <p onClick={() => onRouteChange('productdesign')} className='link pointer underline bg-animate hover-bg-black-10 pa1 pa2-m pa3-l ma1 b f7 f6-m f5-l'>Product Design</p>
            </nav>
        </div>
    )
}

export default Navigation;