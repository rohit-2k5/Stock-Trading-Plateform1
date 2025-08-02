import React from 'react';

function Leftsection({imageUrl, pName, pDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container'>
            <div className='row mt-5 ps-5 pt-5'>
                <div className="col" style={{marginLeft: "6.5rem"}}>
                    <img src={imageUrl} alt='kite'></img>
                </div>
                <div className="col ps-5" style={{marginTop: "3rem", marginLeft: "7rem"}}>
                    <h2>{pName}</h2>
                    <p className='mt-4 text-muted w-70 pe-5 mb-4' style={{fontSize:"1.07rem"}}>{pDescription}</p>
                    <a className='text-decoration-none me-5' href={tryDemo}>Try demo <i class="fa-solid fa-arrow-right ms-1"></i></a>
                    <a className='text-decoration-none' href={learnMore}>Learn more <i class="fa-solid fa-arrow-right ms-1"></i></a>
                    <div className='mt-4'>
                        <a href={googlePlay}><img className='pe-3 hover-opacity-low' src='media\images\googlePlayBadge.svg' alt='googleplay'></img></a>
                        <a href={appStore}><img className='hover-opacity-low' src='media\images\appstoreBadge.svg' alt='appstore'></img></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Leftsection;