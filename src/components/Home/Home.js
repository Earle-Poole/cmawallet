import React from 'react';
import './Home.css';
import ImageGallery from 'react-image-gallery';
import GunWallet1 from '../../Images/GunWallet1.png';
import GunWallet2 from '../../Images/GunWallet2.png';
import GunWallet3 from '../../Images/GunWallet3.png';
import GunWallet4 from '../../Images/GunWallet4.png';

const Home = () => {
    const images = [
        {original: GunWallet1,
        thumbnail: GunWallet1,
        description: "CMA Wallets",
        originalAlt: "CMAWallet Logo | Concealed Wallet Holster | Gun | Firearm | Holster"},
        {original: GunWallet2,
        thumbnail: GunWallet2,
        description: "CMA Wallets",
        originalAlt: "CMAWallet Logo | Concealed Wallet Holster | Gun | Firearm | Holster"},
        {original: GunWallet3,
        thumbnail: GunWallet3,
        description: "CMA Wallets",
        originalAlt: "CMAWallet Logo | Concealed Wallet Holster | Gun | Firearm | Holster"},
        {original: GunWallet4,
        thumbnail: GunWallet4,
        description: "CMA Wallets",
        originalAlt: "CMAWallet Logo | Concealed Wallet Holster | Gun | Firearm | Holster"}
    ]

    return (
        <div style={{ width: '65%', height: 'auto', }} className='center'>
            <ImageGallery 
            items={images} 
            showFullscreenButton={false}
            autoPlay={true}
            slideDuration={700}
            lazyLoad={false}
            />
        </div>
    )
}

export default Home;