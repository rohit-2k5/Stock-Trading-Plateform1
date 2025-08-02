import React from 'react';
import { Link } from 'react-router-dom';

function Brokerage() {
  return ( 
    <div className='container'>
      <div className="row p-5">
        <div className='col-8 p-3 text-center'>
          <Link className='text-decoration-none' to="/brokerage-calculator">
            <h3 className='fs-5'>Brokerage Calculator</h3>
          </Link>
          <ul className='mt-4 text-muted' style={{ textAlign: "left", lineHeight: "2rem" }}>
            <li>
              Call & trade and RMS auto-squareoff: Additional 
              charges of &#8377;50 + GST per order.
            </li>
            <li>
              Digital contract notes will be sent via e-mail.
            </li>
            <li>
              Physical copies of contract notes, if required, 
              shall be charged &#8377;20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or &#8377;100 per executed order
              for equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or &#8377;200 per executed order
              for equity (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will 
              be charged &#8377;40 per executed order instead of &#8377;20 per executed
              order.
            </li>
          </ul>
        </div>

        <div className='col-4 text-center p-3'>
          <Link className='text-decoration-none' to="/charges-list">
            <h3 className='fs-5'>List of charges</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
