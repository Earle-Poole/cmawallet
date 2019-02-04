/* eslint-disable react/jsx-indent */
import React from 'react';

const ContactUs = () => (
	<div className="flex center mw8 justify-around">
		<div className="pr5 br">
			<p className="mb5 f3 underline center">
				{'Email'}
			</p>
			<p>
				<a className="black f4 underline pointer dim" href="mailto:questions@cmawallets.com">
					{'questions@cmawallets.com'}
				</a>
			</p>
		</div>
		<div className="nowrap mh4">
			<p className="mb5 f3 underline center">
				{'Phone'}
			</p>
			<p className="f4">
				{'(281) 545-4103'}
			</p>
		</div>
		<div className="nowrap pl5 bl">
			<p className="mb0 f3 underline center">
				{'Address'}
			</p>
			<div>
				<p className="f4">CMA Wallets</p>
				<p className="f4">P.O. Box 19881</p>
				<p className="f4">Sugar Land, TX 77496</p>
			</div>
		</div>
	</div>
);

export default ContactUs;
