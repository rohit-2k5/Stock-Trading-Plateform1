import React from 'react';

function Rightsection({imageUrl, pName, pDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container'>
            <div className='row ps-5 mt-5'>
                <div className="col ps-5" style={{marginTop: "8rem", marginRight: "7rem"}}>
                    <h2>{pName}</h2>
                    <p className='mt-4 text-muted w-70 pe-5 mb-4' style={{fontSize:"1.07rem"}}>{pDescription}</p>
                    <a className='text-decoration-none me-5' href={tryDemo}>Try demo <i class="fa-solid fa-arrow-right ms-1"></i></a>
                    <a className='text-decoration-none' href={learnMore}>Learn more <i class="fa-solid fa-arrow-right ms-1"></i></a>
                    <div className='mt-4'>
                        <a href={googlePlay}><img className='pe-3 hover-opacity-low' src='media\images\googlePlayBadge.svg' alt='googleplay'></img></a>
                        <a href={appStore}><img className='hover-opacity-low' src='media\images\appstoreBadge.svg' alt='appstore'></img></a>
                    </div>
                </div>
                <div className="col mb-5" style={{marginRight: "6.5rem", marginTop: "4rem" }}>
                    <img src={imageUrl} alt='kite'></img>
                </div>
            </div>
        </div>
     );
}

export default Rightsection;