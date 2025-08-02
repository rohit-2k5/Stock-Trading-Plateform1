import React from 'react';
import { Link } from 'react-router-dom';

function Createticket() {
  return ( 
    <div className='container'>
      <div className='row p-5'>
        <h2>To create a ticket, select a relevant topic</h2>
      </div>

      <div className='row p-5'>
        <div className='col p-4'>
          <h5><i className="fa-solid fa-circle-plus me-3"></i>Account Opening</h5>
          <ul className="list-unstyled ms-4 mt-5">
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/account-opening/resident">Resident individual</Link></li>
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/account-opening/minor">Minor</Link></li>
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/account-opening/nri">Non Resident Indian (NRI)</Link></li>
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/account-opening/company">Company, Partnership, HUF and LLP</Link></li>
            <li><Link className="text-decoration-none d-block makeblack" to="/account-opening/glossary">Glossary</Link></li>
          </ul>
        </div>

        <div className='col p-4'>
          <h5><i className="fa-solid fa-user me-3"></i>Your Zerodha Account</h5>
          <ul className="list-unstyled ms-4 mt-5">
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/account/profile">Your Profile</Link></li>
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/account/modification">Account modification</Link></li>
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/account/cmr-dp">Client Master Report (CMR) and Depository Participant (DP)</Link></li>
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/account/nomination">Nomination</Link></li>
            <li><Link className="text-decoration-none d-block makeblack" to="/account/securities-transfer">Transfer and conversion of securities</Link></li>
          </ul>
        </div>

        <div className='col p-4'>
          <h5><i className="fa-solid fa-chart-simple me-3"></i>Kite</h5>
          <ul className="list-unstyled ms-4 mt-5">
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/kite/ipo">IPO</Link></li>
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/kite/trading-faqs">Trading FAQs</Link></li>
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/kite/margins">Margin Trading Facility (MTF) and Margins</Link></li>
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/kite/charts-orders">Charts and orders</Link></li>
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/kite/alerts-nudges">Alerts and Nudges</Link></li>
            <li><Link className="text-decoration-none d-block makeblack" to="/kite/general">General</Link></li>
          </ul>
        </div>
      </div>

      <div className='row ps-5 pe-5 pb-5'>
        <div className='col p-4'>
          <h5><i className="fa-solid fa-indian-rupee-sign me-3"></i>Funds</h5>
          <ul className="list-unstyled ms-4 mt-5">
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/funds/add-money">Add money</Link></li>
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/funds/withdraw">Withdraw money</Link></li>
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/funds/add-bank">Add bank accounts</Link></li>
            <li><Link className="text-decoration-none d-block makeblack" to="/funds/emandates">eMandates</Link></li>
          </ul>
        </div>

        <div className='col p-4'>
          <h5><i className="fa-solid fa-circle-notch me-3"></i>Console</h5>
          <ul className="list-unstyled ms-4 mt-5">
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/console/portfolio">Portfolio</Link></li>
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/console/corporate-actions">Corporate actions</Link></li>
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/console/funds-statement">Funds statement</Link></li>
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/console/reports">Reports</Link></li>
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/console/profile">Profile</Link></li>
            <li><Link className="text-decoration-none d-block makeblack" to="/console/segments">Segments</Link></li>
          </ul>
        </div>

        <div className='col p-4'>
          <h5><i className="fa-solid fa-coins me-3"></i>Coin</h5>
          <ul className="list-unstyled ms-4 mt-5">
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/coin/mutual-funds">Mutual funds</Link></li>
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/coin/nps">National Pension Scheme (NPS)</Link></li>
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/coin/fd">Fixed Deposit (FD)</Link></li>
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/coin/features">Features on Coin</Link></li>
            <li><Link className="text-decoration-none d-block mb-2 makeblack" to="/coin/payments-orders">Payments and Orders</Link></li>
            <li><Link className="text-decoration-none d-block makeblack" to="/coin/general">General</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Createticket;
