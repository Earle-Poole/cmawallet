/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-indent */
import React from 'react';
import './CompatibilityList.css';
import Glock42 from '../../Images/Glock 42.png';
import LCP from '../../Images/LCP.png';
import LCP2 from '../../Images/LCP2.png';
import P3AT from '../../Images/P3AT.png';

const CompatibilityList = () => (
	<div className="container">
		<p id="compatibilityListTitle">
			{'List of compatible firearms'}
		</p>
		<div className="flex row justify-center mx-auto" id="list">
			<div>
				<img src={Glock42} alt="Glock 42" width="200px" height="180px" />
				<p>
					Glock 42
				</p>
			</div>
			<div>
				<img src={LCP} alt="LCP" width="200px" height="180px" />
				<p>
					LCP
				</p>
			</div>
			<div>
				<img src={LCP2} alt="LCP2" width="200px" height="180px" />
				<p>
					LCP2
				</p>
			</div>
			<div>
				<img src={P3AT} alt="P3AT" width="200px" height="180px" />
				<p>
					P3AT
				</p>
			</div>
		</div>
	</div>
);

export default CompatibilityList;
