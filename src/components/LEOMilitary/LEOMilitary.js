import React from 'react';

const LEOMilitary = () => {
    return (
        <div className='mw8 f5 f4-l center tl ph3'>
            Government Agencies: If you are a law enforcement officer, Military Member or government services professional 
            (See the list below). There will be an additional $10.00 off the purchase price.  This will need to be verified 
            via an email with proof of service, such as an ID card.  Please email questions@cmawallets.com with a copy of 
            your ID (please cover over all information except your service type and name) along with a copy of the receipt.  
            We will then issue a $10 refund.
            <br />
            <br />
            <ul className='tl'>
                <li className='pb3'>Law Enforcement Officers/ Corrections Officers: Active or Retired- Must provide a sanitized* copy of LE Picture ID</li>
                <li className='pb3'>Law Enforcement Cadets- Sanitized* documentation of Academy Enrollment</li>
                <li className='pb3'>Military Personnel: Active, Reserve, Guard, Retired- Must provide a sanitized* copy of Military Picture ID, Drivers License with the word Veteran on it, or DD214</li>
                <li className='pb3'>Court Judges- Must provide a sanitized* copy of your Department ID</li>
                <li className='pb3'>Fire Fighters, EMT's & Paramedics: Paid & Volunteer- Must provide a sanitized* copy of your Department ID</li>
                <li className='pb3'>State Licensed Security Companies- Must provide a sanitized* copy of your Department ID.</li>
            </ul>
            *Sanitized means that you do not send any personal information to include, but not limited to Social Security, Address, Employee ID, etc.  We basically just need to see your name, your picture and the organizations name on the card.
        </div>
    )
}

export default LEOMilitary;