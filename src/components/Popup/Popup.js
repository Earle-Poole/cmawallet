import React from "react";
import Popup from "reactjs-popup";
import './Popup.css'

//Start with popup showing
var cancelledPopup = 0;
//Check if email has been submitted
var submittedPopup = window.localStorage.getItem("submittedPopup")
//If email has never been submitted, show popup
if(submittedPopup === null ){window.localStorage.setItem("submittedPopup", "0")};

const emailPopup = () => {
    //Check if popup has been cancelled this session, or if email has ever been submitted
    if(cancelledPopup === 0 && submittedPopup === "0"){
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
                            <button 
                                className="button ma3" 
                                onClick={() => {
                                    //If email is submitted, prevent popup from showing again (unless cache/storage is cleared)
                                    window.localStorage.setItem("submittedPopup", "1")
                                    cancelledPopup++
                                    close();
                                }}
                                > Submit 
                            </button>
                            <button
                                className="button ma3"
                                onClick={() => {
                                close();
                                cancelledPopup++
                                }}
                            >
                            Close
                            </button>
                            </div>
                        </div>
                    )}
            </Popup>
        )
    } else {
        return null
    }
}

export default emailPopup;