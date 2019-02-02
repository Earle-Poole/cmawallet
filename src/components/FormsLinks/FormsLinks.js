/* eslint-disable react/jsx-indent */
import React from 'react';
import ATFFormThumbnail from '../../Images/ATF Form 1 thumbnail.png';
import ATFFormPDF from '../../Documents/ATF Form 1 Tips.pdf';
import LCP1 from '../../Documents/Forms/LCP/1 LCP.pdf';
import LCP2 from '../../Documents/Forms/LCP/2 LCP.pdf';
import LCP3 from '../../Documents/Forms/LCP/3 LCP.pdf';
import LCP4 from '../../Documents/Forms/LCP/4 LCP.pdf';
import Glock421 from '../../Documents/Forms/Glock42/1 Glock42.pdf';
import Glock422 from '../../Documents/Forms/Glock42/2 Glock42.pdf';
import Glock423 from '../../Documents/Forms/Glock42/3 Glock42.pdf';
import Glock424 from '../../Documents/Forms/Glock42/4 Glock42.pdf';
import P3AT1 from '../../Documents/Forms/P3AT/1 P3AT.pdf';
import P3AT2 from '../../Documents/Forms/P3AT/2 P3AT.pdf';
import P3AT3 from '../../Documents/Forms/P3AT/3 P3AT.pdf';
import P3AT4 from '../../Documents/Forms/P3AT/4 P3AT.pdf';


const FormsLinks = () => (
	<div className="mw7 tj center flex justify-around">
		<div className="pa3 mr2">
			<p className="f3-l f3-m f4 flex wrap">
				{'You can find partially filled out forms here'}
			</p>
			<ul className="nowrap">
				<li>
					<p className="f4-l f5-m f6">
						{'Form 1 Individual Exempt¹'}
					</p>
					<div className="flex">
						<a className="mh2 f4-l f5-m f6 black grow pointer link underline" href={LCP1} target="_blank" rel="noopener noreferrer">LCP</a>
						<a className="mh2 f4-l f5-m f6 black grow pointer link underline" href={Glock421} target="_blank" rel="noopener noreferrer">Glock42</a>
						<a className="mh2 f4-l f5-m f6 black grow pointer link underline" href={P3AT1} target="_blank" rel="noopener noreferrer">P3AT</a>
					</div>
				</li>
				<li>
					<p className="f4-l f5-m f6">
						{'Form 1 Individual Non-Exempt²'}
					</p>
					<div className="flex">
						<a className="mh2 f4-l f5-m f6 black grow pointer link underline" href={LCP2} target="_blank" rel="noopener noreferrer">LCP</a>
						<a className="mh2 f4-l f5-m f6 black grow pointer link underline" href={Glock422} target="_blank" rel="noopener noreferrer">Glock42</a>
						<a className="mh2 f4-l f5-m f6 black grow pointer link underline" href={P3AT2} target="_blank" rel="noopener noreferrer">P3AT</a>
					</div>
				</li>
				<li>
					<p className="f4-l f5-m f6">
						{'Form 1 Trust Exempt'}
					</p>
					<div className="flex">
						<a className="mh2 f4-l f5-m f6 black grow pointer link underline" href={LCP3} target="_blank" rel="noopener noreferrer">LCP</a>
						<a className="mh2 f4-l f5-m f6 black grow pointer link underline" href={Glock423} target="_blank" rel="noopener noreferrer">Glock42</a>
						<a className="mh2 f4-l f5-m f6 black grow pointer link underline" href={P3AT3} target="_blank" rel="noopener noreferrer">P3AT</a>
					</div>
				</li>
				<li>
					<p className="f4-l f5-m f6">
						{'Form 1 Trust Non-Exempt'}
					</p>
					<div className="flex">
						<a className="mh2 f4-l f5-m f6 black grow pointer link underline" href={LCP4} target="_blank" rel="noopener noreferrer">LCP</a>
						<a className="mh2 f4-l f5-m f6 black grow pointer link underline" href={Glock424} target="_blank" rel="noopener noreferrer">Glock42</a>
						<a className="mh2 f4-l f5-m f6 black grow pointer link underline" href={P3AT4} target="_blank" rel="noopener noreferrer">P3AT</a>
					</div>
				</li>
			</ul>
			<p className="f7 f6-m f5-l">¹ : Applies to most Law Enforcement</p>
			<p className="f7 f6-m f5-l">² : Applies to most Citizens</p>
		</div>
		<div className="bl pa3 mr2 nowrap">
			<p className="f3-l f3-m f4 flex wrap justify-center">Tips for filling out ATF Form 1</p>
			<div>
				<a target="_blank" rel="noopener noreferrer" href={ATFFormPDF}>
					<img className="w-80 flex center" alt="CMAWallet Thumbnail | Concealed Wallet Holster | Gun | Firearm | Holster" src={ATFFormThumbnail} />
					<p className="tp0 tm0 underline black flex justify-center">PDF</p>
				</a>
			</div>
		</div>
	</div>
);

export default FormsLinks;
