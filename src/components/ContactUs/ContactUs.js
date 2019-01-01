import React from 'react';

const ContactUs = () => {
    return(
        <div className='flex center mw7 justify-between'>
            <div>
                <p className='mb5 f3 underline center'>
                    Email
                </p>
                <p >
                    <a className="black underline pointer dim" href="mailto:questions@cmawallets.com">
                        questions@cmawallets.com
                    </a>
                </p>
            </div>
            <div>
                <p className='mb5 f3 underline center'>
                    Phone
                </p>
                <p>
                    (281) 545-4103
                </p>
            </div>
            <div>
                <p className='mb4 f3 underline center'>
                    Address
                </p>
                <div>
                    <p>CMA Wallets</p>
                    <p>P.O. Box 19881</p>
                    <p>Sugar Land, TX 77496</p>
                </div>
            </div>

        </div>
    )
}

export default ContactUs;