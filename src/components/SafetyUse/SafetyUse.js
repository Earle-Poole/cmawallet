import React from 'react';

const SafetyUse = () => {
    return (
        <div className=''>
            <span className='bg-yellow f2'>PLEASE WATCH THIS VIDEO</span>
            <p className='f4'>This provides guidance on how to properly handle your weapon with the holster.</p>
            <div>
                <iframe
                className="pa1" 
                width="720px" 
                height="480px" 
                title="CMAWallets, LLC" 
                src="https://www.youtube.com/embed/5XZPO3oE0MY?rel=0" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen/>
            </div>
            <p className="f6 i">Thanks to <a href="http://www.g2grange.com/" className="black pointer">G2G Shooting Range</a> in Rosenberg, TX for allowing us to record this video in their facility.</p>
            <p className="f6 i">Special thanks to Sky Productions for the creation of this video.</p>
        </div>
    )
}

export default SafetyUse;