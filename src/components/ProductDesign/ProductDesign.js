/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';
import './ProductDesign.css';

// eslint-disable-next-line react/prop-types
const ProductDesign = ({ onRouteChange }) => (
	<div className="mw7 tj f6 f5-l center">
		<ol>
			<li>
				<p>
					{`Materials - The Curveball Wallet Holster’s outer shell is made of real leather. The inner shell is a smooth plastic to help 
					reduce friction that the firearm's slide would normally have against an all leather-like holster. There is a foam insert that 
					helps keep the firearm in place.`}
				</p>
			</li>
			<li>
				<p>
					{`Design - The Curveball Wallet Holster is shaped, cut and sewn together by hand. This is done to ensure that the firearm functions 
					properly as if it were not holstered. Because of this you will find a few imperfect cuts and areas of the holster ground down. 
					Please understand that we at CMA Wallets feel it is more important to ensure smooth, unhindered operation of the firearm rather 
					than visual aesthetics.`}
				</p>
				<p className="f8 f7-l pt0 i">
					{'If your Curveball Wallet Holster has seam separation, please review the warranty section of the '}
					<button
						type="button"
						className="pointer b link underline tnc"
						onClick={() => onRouteChange('termsandconditions')}
					>
						{'Terms and Conditions'}
					</button>
					{' of sale to see whether your Wallet Holster is covered by our limited warranty.'}
				</p>
			</li>
			<li>
				{`Hand Dominance - The Curveball Wallet Holster is not designed for ambidexterity, but specifically for a 
				right-handed `}
				<span className="b i">
					{'OR'}
				</span>
				{` left-handed person. The hole for the trigger determines whether the Curveball 
				Wallet Holster is right-handed or left-handed. This design feature ensures that, when placed in the back pocket and drawn 
				out, based on the shooting hand of the owner the trigger would be hidden. This would prevent an attacker from knowing you've 
				drawn a firearm.`}
			</li>
		</ol>
	</div>
);

export default ProductDesign;
