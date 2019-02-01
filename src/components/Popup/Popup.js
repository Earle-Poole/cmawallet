/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import Popup from 'reactjs-popup';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import './Popup.css';


// Start with popup showing
let cancelledPopup = 0;
// Check if email has been submitted from previous visits
let submittedPopup = window.localStorage.getItem('submittedPopup');
// If email has never been submitted, show popup
if (submittedPopup === null) { window.localStorage.setItem('submittedPopup', '0'); }
// If this is the first visit set submittedPopup to 0
submittedPopup = window.localStorage.getItem('submittedPopup');

// Get this from the form's URL. Must add "/post" after "/subscribe"
const url = 'https://udsterleads.us10.list-manage.com/subscribe/post?u=c97ea1160f134dbeb8cbe8bd6&id=66c6445cca';

const simpleForm = () => (
	<MailchimpSubscribe
		url={url}
	/>
);

const emailPopup = () => {
	// Check if popup has been cancelled this session, or if email has ever been submitted
	if (cancelledPopup === 0 && submittedPopup === '0') {
		return (
			// eslint-disable-next-line react/jsx-indent
			<Popup
				defaultOpen
				style={{ width: '350px' }}
				modal
				closeOnDocumentClick
				closeOnEscape
				contentStyle={{ width: '340px' }}
			>
				{close => (
					<div className="modal">
						<div className="header"> Newsletter, offers & promotions </div>
						<div className="content center">
							{'If you provide us with your email address we will contact you with discounts, and updates regarding the stores you can find our product.'}
						</div>
						<div
							onKeyPress={() => {}}
							tabIndex={0}
							className="ma2"
							role="button"
							onClick={() => {
								cancelledPopup += 1;
								window.localStorage.setItem('submittedPopup', '1');
							}}
						>
							{
								simpleForm()
							}
						</div>
						<div className="actions flex justify-center">
							<button
								type="button"
								className="button ma2"
								onClick={() => {
									close();
									cancelledPopup += 1;
								}}
							>
								{'Close'}
							</button>
						</div>
					</div>
				)}
			</Popup>
		);
	}
	return null;
};

export default emailPopup;
