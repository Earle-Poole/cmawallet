/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-indent */
import React from 'react';

const LEOMilitary = () => (
	<div>
		<div className="mw7 f6 f5-l center tj tl ph3">
				Government Agencies: If you are a law enforcement officer, Military Member or government
				services professional (See the list below). There will be an additional $10.00 off the
				purchase price.  This will need to be verified via an email with proof of service, such
				as an ID card.  Please email
			<a className="black underline pointer dim" href="mailto:questions@cmawallets.com">
				{' questions@cmawallets.com' }
			</a>
			{` with a copy of your ID (please cover over all information except your service type and
			name) along with a copy of the receipt. We will then issue a $10 refund.`}
			<br />
			<br />
			<ul className="tl f6 f5-l">
				<li className="pb3">Law Enforcement Officers/ Corrections Officers: Active or Retired - Must provide a sanitized¹ copy of LE Picture ID</li>
				<li className="pb3">Law Enforcement Cadets - Sanitized¹ documentation of Academy Enrollment</li>
				<li className="pb3">Military Personnel: Active, Reserve, Guard, Retired - Must provide a sanitized¹ copy of Military Picture ID, Drivers License with the word Veteran on it, or DD214</li>
				<li className="pb3">Court Judges - Must provide a sanitized¹ copy of your Department ID</li>
				<li className="pb3">Fire Fighters, EMT's & Paramedics: Paid & Volunteer - Must provide a sanitized¹ copy of your Department ID</li>
				<li className="pb3">State Licensed Security Companies - Must provide a sanitized¹ copy of your Department ID.</li>
			</ul>
			<div className="f7 f6-l i">
				¹Sanitized means that you do not send any personal information to include, but
				not limited to Social Security, Address, Employee ID, etc.  We basically just need to
				see your name, your picture and the organizations name on the card.
			</div>
		</div>
	</div>
);

export default LEOMilitary;
