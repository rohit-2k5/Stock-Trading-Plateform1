import React from 'react';
import { Link } from 'react-router-dom';

function Stats() {
  return ( 
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-6 p-5">
          <h1 className="mb-5 fs-2">Trust with confidence</h1>
          
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ 
            ₹6 lakh crores of equity investments and contribute to 
            15% of daily retail exchange volumes in India.
          </p>

          <h2 className="mt-5 fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push 
            notifications. High quality apps that you use at your pace,
            the way you like. Our philosophies.
          </p>

          <h2 className="mt-5 fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments 
            in 30+ fintech startups offer you tailored services 
            specific to your needs.
          </p>

          <h2 className="mt-5 fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't 
            just facilitate transactions, but actively help you do 
            better with your money.
          </p>
        </div>

        <div className="col-6 p-5 mt-5">
          <img style={{width: "100%"}} src="media/images/ecosystem.png" alt="ecosystem" />
          
          <div className="mt-3 text-center">
            {/* Using Link instead of href="#" */}
            <Link 
              to="/products" 
              style={{ textDecoration: "none" }} 
              className="mx-5"
            >
              Explore our product
              <i className="mx-2 fa-solid fa-arrow-right-long"></i>
            </Link>

            <Link 
              to="/kite-demo" 
              style={{ textDecoration: "none" }} 
              className="mx-5"
            >
              Try Kite demo
              <i className="mx-2 fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
