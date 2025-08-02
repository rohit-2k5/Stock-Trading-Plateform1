import React from 'react';
import { Link } from 'react-router-dom';

function Education() {
  return ( 
    <div className='container p-5'>
      <div className='row'>
        <div className='col'>
          <img src="media/images/education.svg" alt="varsity" />
        </div>
        <div className='col mt-5'>
          <h1 className='mb-4 fs-2'>Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the 
            world <br />covering everything from the basics to advanced trading.
          </p>
          
          <Link 
            style={{ textDecoration: "none" }} 
            to="/varsity"
          >
            Varsity <i className="mx-2 fa-solid fa-arrow-right-long"></i>
          </Link>
          
          <p className='mt-5'>
            TradingQ&A, the most active trading and investment community in 
            <br />India for all your market related queries.
          </p>
          
          <Link 
            style={{ textDecoration: "none" }} 
            to="/tradingqna"
          >
            TradingQ&A <i className="mx-2 fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Education;
