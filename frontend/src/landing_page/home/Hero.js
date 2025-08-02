function Hero() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img style={{height: "70%", width: "65%"}} src="media/images/homeHero.png" alt="homeherologo" className="mb-5 m-auto"></img>
                <h1 className="mt-3 mb-3">Invest in everything</h1>
                <p className="fs-5">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <a  href={"/signup"}><button style={{width: "17%", margin: "0 auto", backgroundColor: "#387ed1", border: "none", color: "white"}} className="rounded mt-4 mb-5 fs-5 p-2 hover-black">Sign up for free</button></a>
            </div>
        </div>
    );
}

export default Hero;