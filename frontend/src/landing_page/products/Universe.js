import React from 'react';
import { Link } from 'react-router-dom';

function Universe() {
    return ( 
        <div className='container'>
            <div className='row mt-5 p-5 text-center'>
                <p className='fs-5 text-muted mb-5'>Want to know more about our technology stack? Check out the <a className='text-decoration-none' href='https://zerodha.tech'>Zerodha.tech</a> blog.</p>
                <h1  className='mt-5'>The Zerodha Universe</h1>
                <p className='mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row ps-5 pe-5 pt-5'>
                <div className='col text-center p-5'>
                    <div style={{marginBottom: "5rem"}}>
                        <img style={{width: "70%"}} src='media\images\zerodhaFundhouse.png' alt='fudnhouse'></img>
                        <p className='mt-3 text-muted'>Asset management</p>
                    </div>
                    <div>
                        <img style={{width: "70%"}} src='media\images\streakLogo.png' alt='fudnhouse'></img>
                        <p className='mt-3 text-muted'>Algo & strategy platefrom</p>
                    </div>
                </div>
                <div className='col text-center p-5'>
                    <div style={{marginBottom: "7rem"}}>
                        <img style={{width: "70%"}} src='media\images\sensibullLogo.svg' alt='fudnhouse'></img>
                        <p className='mt-4 text-muted'>Options trading plateform</p>
                    </div>
                    <div>
                        <img style={{width: "70%"}} src='media\images\smallcaseLogo.png' alt='fudnhouse'></img>
                        <p className='mt-3 text-muted'>Thematic investing plateform</p>
                    </div>
                </div>
                <div className='col text-center p-5'>
                     <div style={{marginBottom: "5rem"}}>
                        <img style={{width: "60%"}} src='media\images\tijori.svg' alt='fudnhouse'></img>
                        <p className='mt-2 text-muted'>Investement research plateform</p>
                    </div>
                    <div>
                        <img style={{width: "50%"}} src='media\images\dittoLogo.png' alt='fudnhouse'></img>
                        <p className='mt-2 text-muted'>Personalized advice on life<br/> and health insurance.</p>
                    </div>
                </div>
            </div>
            
<Link to={"/signup"}><button style={{width: "17%", marginLeft: "33rem", backgroundColor: "#387ed1", border: "none", color: "white"}} className="rounded mt-4 mb-5 fs-5 p-2 hover-black">Sign up for free</button></Link>
            
        </div>
     );
}

export default Universe;