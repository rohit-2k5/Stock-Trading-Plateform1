function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src="media\images\largestBroker.svg" alt="award"></img>
                </div>
                <div className='col-6 p-5 mt-4'>
                    <h1  className="fs-2 mb-3" >Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retails order volumes in india daily by trading and investing in:</p>
                    <div className='row mt-5'>
                         <div className='col-6'>
                        <ul>
                            <li><p>Futures and Options</p></li>
                            <li><p>Commodity derivatives</p></li>
                            <li><p>Currency derivatives</p></li>
                        </ul>
                    </div>  
                    <div className='col-6'>
                        <ul>
                            <li><p>Stocks & IPOs</p></li>
                            <li><p>Direct mutual funds</p></li>
                            <li><p>Bonds and Govt. Securities</p></li>
                        </ul>
                    </div> 
                    </div> 
                    <img style={{width: "90%"}} className="w-70" src="media\images\pressLogos.png" alt="presslogo" ></img>          
                </div>
            </div>
        </div>
    );
}

export default Awards;