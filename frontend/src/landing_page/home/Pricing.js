import React from 'react';
import { Link } from 'react-router-dom';

function Pricing() {
  return ( 
    <div className="container p-5">
      <div className='row p-5'>
        <div className='col-5'>
          <h1 className='fs-2'>Unbeatable pricing</h1>
          <p className='mt-4 text-muted'>
            We pioneered the concept of discount broking and 
            price transparency in India. Flat fees and no hidden 
            charges.
          </p>
          <Link 
            style={{ textDecoration: "none" }} 
            to="/pricing"
          >
            See pricing
            <i className="mx-2 fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>

        <div className='col-7'>
          <div className="row mt-4">
            <div className='col mt-1'>
              <img style={{ width: "170%" }} src='media/images/pricing0.svg' alt="pricing-1" />
            </div>
            <div className='col'>
              <p className='text-muted mt-5 mx-1' style={{ fontSize: "0.65rem" }}>
                Free account opening
              </p>
            </div>
            <div className='col mx-3 mt-1'>
              <img style={{ width: "170%" }} src='media/images/pricing0.svg' alt="pricing-2" />
            </div>
            <div className='col'>
              <p className='text-muted mt-4 mx-1' style={{ fontSize: "0.65rem" }}>
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className='col mx-3 mt-2'>
              <img style={{ width: "170%" }} src='media/images/intradayTrades.svg' alt="intraday-trades" />
            </div>
            <div className='col'>
              <p className='text-muted mt-5' style={{ fontSize: "0.65rem" }}>
                Intraday and F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
