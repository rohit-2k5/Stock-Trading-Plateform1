import React from 'react';

function Hero() {
    return ( 
        <div className='container'> 
            <div className='row p-5 text-center' style={{marginTop: "5rem"}}>
                <h1>Charges</h1>
                <p className='mt-3 fs-5 text-muted'>List of all charges and taxes</p>
            </div>
            <div className='border-top'></div>
            <div className='row p-5' style={{marginTop: "6rem"}}>
                <div className='col text-center'>
                    <img src='media\images\pricingMF.svg' alt='zero' style={{width: "75%"}}></img>
                    <h2 className='mt-3'>Free equity delivery</h2>
                    <p className='mt-4 text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col text-center'>
                    <img src='media\images\intradayTrades.svg' alt='twenty' style={{width: "75%"}}></img>
                    <h2 className='mt-3'>Intraday and F&O trades</h2>
                    <p className='mt-4 text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.  </p>
                </div>
                <div className='col text-center'>
                    <img src='media\images\pricingMF.svg' alt='zero' style={{width: "75%"}}></img>
                    <h2 className='mt-3'>Free direct MF</h2>
                    <p className='mt-4 text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;