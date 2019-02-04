/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';
import './Home.css';
import ImageGallery from 'react-image-gallery';
import GunWallet1 from '../../Images/GunWallet1.png';
import GunWallet2 from '../../Images/GunWallet2.png';
import GunWallet3 from '../../Images/GunWallet3.png';
import GunWallet4 from '../../Images/GunWallet4.png';

// eslint-disable-next-line react/prop-types
const Home = () => {
	const images = [
		{
			original: GunWallet1,
			thumbnail: GunWallet1,
			originalAlt: 'CMAWallet Logo | Concealed Wallet Holster | Gun | Firearm | Holster',
		},
		{
			original: GunWallet2,
			thumbnail: GunWallet2,
			originalAlt: 'CMAWallet Logo | Concealed Wallet Holster | Gun | Firearm | Holster',
		},
		{
			original: GunWallet3,
			thumbnail: GunWallet3,
			originalAlt: 'CMAWallet Logo | Concealed Wallet Holster | Gun | Firearm | Holster',
		},
		{
			original: GunWallet4,
			thumbnail: GunWallet4,
			originalAlt: 'CMAWallet Logo | Concealed Wallet Holster | Gun | Firearm | Holster',
		},
	];

	return (
		<div style={{ width: '45%', height: 'auto' }} className="center pointe">
			<ImageGallery
				items={images}
				showFullscreenButton={false}
				autoPlay
				onClick={() => window.open('https://shoppy.gg/product/hfRLCkS', '_blank')}
				slideDuration={700}
				lazyLoad={false}
			/>
		</div>
	);
};

export default Home;
