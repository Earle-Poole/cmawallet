import React from "react";
import Popup from "reactjs-popup";
import './Popup.css'

const emailPopup = () => {
    return (
        <Popup defaultOpen={true}
            style={{width: '350px'}} 
            modal
            closeOnDocumentClick
            closeOnEscape
            contentStyle={{width: '340px'}}>
                {close => (
                    <div className="modal">
                        <div className="header"> Newsletter, offers & promotions </div>
                        <div className="content center">
                            If you provide us with your email address we will contact you with discounts, and updates
                            regarding the stores you can find our product.
                        </div>
                        <input style={{width: '19rem', height: '2rem'}} type="email" placeholder="Email Address"/>
                        <div className="actions flex justify-between">
                        <Popup
                            trigger={<button className="button ma3"> Submit </button>}
                            position="top center"
                            closeOnDocumentClick
                        >
                        <span>
                            Words
                        </span>
                        </Popup>
                        <button
                            className="button ma3"
                            onClick={() => {
                            close()
                            }}
                        >
                            Close
                        </button>
                        </div>
                    </div>
                )}
        </Popup>
    )
}

export default emailPopup;