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
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen/>
            </div>
        </div>
    )
}

export default SafetyUse;