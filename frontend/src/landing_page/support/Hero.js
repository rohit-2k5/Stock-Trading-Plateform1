import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="container-fluid border" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        {/* Updated to use Link instead of invalid href="#" */}
        <Link
          style={{ color: "white", textDecoration: "none" }}
          to="/track-tickets"
        >
          Track Tickets
        </Link>
      </div>

      <div className="row ps-5 pe-5 pb-5" style={{ marginLeft: "6rem" }}>
        <div className="col p-5">
          <h2>
            Search for an answer or browse help topics to create a ticket
          </h2>
          <input
            id="supportInput"
            placeholder="Eg. how to i activate F&O, why is my order getting rejected.."
          />
          <div className="mt-2">
            <Link to="/support">Track account opening</Link>
            <Link to="/support" className="ms-3">Track segment activation</Link>
            <Link to="/support" className="ms-3">Intraday margins</Link>
            <Link to="/support" className="ms-3">Kite user manual</Link>
          </div>
        </div>

        <div className="col p-5">
          <h3 className="ms-3 mb-3">Features</h3>
          <ol>
            <li>
              <Link to="/support">
                Current Takeovers and Delisting - January
              </Link>
            </li>
            <li className="mt-2">
              <Link to="/support">Kite user manual</Link>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
