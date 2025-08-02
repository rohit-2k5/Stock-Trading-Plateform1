import {Link} from "react-router-dom";

function OpenAccount() {
    return ( 
        <div className="container p-5 mb-5 mt-5">
            <div className="row text-center">
                <h1 className="mt-3 mb-3 fs-2">Open a Zerodha account</h1>
                <p className="fs-5 text-muted">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link to={"/signup"}><button style={{width: "17%", margin: "0 auto", backgroundColor: "#387ed1", border: "none", color: "white"}} className="rounded mt-4 mb-5 fs-5 p-2 hover-black">Sign up for free</button></Link>
            </div>
        </div>
     );
}

export default OpenAccount;