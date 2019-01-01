import React from 'react';
import './FormsLinks.css';
import ATFFormThumbnail from '../../Images/ATF Form 1 thumbnail.png';
import ATFFormPDF from '../../Documents/ATF Form 1 Tips.pdf';

const FormsLinks = () => {
    return(
        <div className="mw7 tj center flex justify-around">
            <div className="pa3 mr2 nowrap">
                <p className="f3">You can find partially filled out forms here</p>
                <ul>
                    <li>
                        <p>Form 1 Individual Exempt¹</p>
                        <div className='flex'>
                            <a className='mh2 black grow pointer link underline' href='https://www.dropbox.com/s/p0tiqq19f1actza/Form1%20Individual%20LCP%20Exempt.pdf?dl=0'>LCP</a> <a className='mh2 black grow pointer link underline' href='https://www.dropbox.com/s/tn951jamviq2mi7/Form1%20Individual%20Glock42%20Exempt.pdf?dl=0'>Glock42</a> <a className='mh2 black grow pointer link underline' href='https://www.dropbox.com/s/krr17rt1myiy7l2/Form1%20Individual%20P3AT%20Exempt.pdf?dl=0'>P3AT</a>
                        </div>
                    </li>
                    <li>
                        <p>Form 1 Individual Non-Exempt²</p>
                        <div className='flex'>
                            <a className='mh2 black grow pointer link underline' href='https://www.dropbox.com/s/w34gzpwq4n6wjy9/Form1%20Individual%20LCP%20non-exempt.pdf?dl=0'>LCP</a> <a className='mh2 black grow pointer link underline' href='https://www.dropbox.com/s/5jkoz3l405vsz63/Form1%20Individual%20Glock42%20Non-Exempt.pdf?dl=0'>Glock42</a> <a className='mh2 black grow pointer link underline' href='https://www.dropbox.com/s/4icr0t6q8dw6dek/Form1%20Individual%20P3AT%20Non-Exempt.pdf?dl=0'>P3AT</a>
                        </div>
                    </li>
                    <li>
                        <p>Form 1 Trust Exempt</p>
                        <div className='flex'>
                            <a className='mh2 black grow pointer link underline' href='https://www.dropbox.com/s/upc36q3owri20j8/Form1%20Trust%20LCP%20Exempt.pdf?dl=0'>LCP</a> <a className='mh2 black grow pointer link underline' href='https://www.dropbox.com/s/36qr94433kjrsed/Form1%20Trust%20Glock42%20Exempt.pdf?dl=0'>Glock42</a> <a className='mh2 black grow pointer link underline' href='https://www.dropbox.com/s/0x8j30bxvuuh7ss/Form1%20Trust%20P3AT%20Exempt.pdf?dl=0'>P3AT</a>
                        </div>
                    </li>
                    <li>
                        <p>Form 1 Trust Non-Exempt</p>
                        <div className='flex'>
                            <a className='mh2 black grow pointer link underline' href='https://www.dropbox.com/s/axqbnq99qt7ajll/Form1%20Trust%20LCP%20non-exempt.pdf?dl=0'>LCP</a> <a className='mh2 black grow pointer link underline' href='https://www.dropbox.com/s/h1viy2z8u17jhgr/Form1%20Trust%20Glock42%20Non-Exempt.pdf?dl=0'>Glock42</a> <a className='mh2 black grow pointer link underline' href='https://www.dropbox.com/s/6354skbqj3mlrp9/Form1%20Trust%20P3AT%20Non-Exempt.pdf?dl=0'>P3AT</a>
                        </div>
                    </li>
                </ul>
                <p className="f7 f6-l">¹ : Applies to most Law Enforcement</p>
                <p className="f7 f6-l">² : Applies to most Citizens</p>
            </div>
            <div className="bl pa3 mr2 nowrap">
                <p className="f3">Tips for filling out ATF Form 1</p>
                <div>
                    <a target="_blank" rel="noopener noreferrer" href={ATFFormPDF}>
                    <img className="w-80 flex center" alt="CMAWallet Thumbnail | Concealed Wallet Holster | Gun | Firearm | Holster" src={ATFFormThumbnail} />
                    <p className="tp0 tm0 underline black flex justify-center">PDF</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FormsLinks;