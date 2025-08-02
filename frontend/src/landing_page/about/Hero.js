function Hero() {
    return (
        <div className="container">
            <div className='row text-center pb-5' style={{ paddingTop: "8rem" }}>
                <h1 className='fs-2'>
                    We pioneered the discount broking model in India.<br />
                    Now, we are breaking ground with our technology.
                </h1>
            </div>
            <div className='row border-top mt-5'></div>
            <div className='row mt-5 p-3 p-md-5 text-muted flex-column flex-md-row'>
                <div className='col p-3'>
                    <p className='px-2 px-md-5 mb-4'>
                        We kick-started operations on the 15th of August,
                        2010 with the goal of breaking all barriers that
                        traders and investors face in India in terms of cost,
                        support, and technology. We named the company Zerodha,
                        a combination of Zero and "Rodha", the Sanskrit word
                        for barrier.
                    </p>
                    <p className='px-2 px-md-5 mb-4'>
                        Today, our disruptive pricing models and in-house technology
                        have made us the biggest stock broker in India.
                    </p>
                    <p className='px-2 px-md-5'>
                        Over 1.6+ crore clients place billions of orders every year
                        through our powerful ecosystem of investment platforms,
                        contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>
                <div className='col p-3'>
                    <p className='pe-2 pe-md-5 mb-4'>
                        In addition, we run a number of popular open online educational
                        and community initiatives to empower retail traders and investors.
                    </p>
                    <p className='pe-2 pe-md-5 mb-4'>
                        <a className="text-decoration-none" href="#">Rainmatter</a>, our fintech fund and incubator, has invested in
                        several fintech startups with the goal of growing the Indian
                        capital markets.
                    </p>
                    <p className='pe-2 pe-md-5 mb-4'>
                        And yet, we are always up to something new every day. Catch
                        up on the latest updates on our blog or see what the media
                        is saying about us or learn more about our business and product
                        philosophies.
                    </p>
                </div>
            </div>
            <div className='row p-3 p-md-5'>
                <div className='row text-center mb-5'>
                    <h1 className='fs-2'>People</h1>
                </div>
                <div className="row flex-column flex-md-row align-items-center">
                    <div className="col-12 col-md" style={{ marginLeft: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <img
                            src='media/images/nithinKamath.jpg'
                            style={{
                                borderRadius: "100%",
                                width: "60vw",
                                maxWidth: "220px",
                                minWidth: "120px",
                                marginLeft: 0
                            }}
                            alt="Nithin Kamath"
                        />
                        <p className='fs-4 mt-3 text-center'>Nithin Kamath</p>
                        <p className='text-center'>Founder, CEO</p>
                    </div>
                    <div className="col-12 col-md pt-4 text-muted pe-md-3" style={{ marginRight: 0 }}>
                        <p>
                            Nithin bootstrapped and founded Zerodha in 2010 to overcome
                            the hurdles he faced during his decade long stint as a trader.
                            Today, Zerodha has changed the landscape of the Indian broking
                            industry.
                        </p>
                        <p>
                            He is a member of the SEBI Secondary Market Advisory Committee
                            (SMAC) and the Market Data Advisory Committee (MDAC).
                        </p>
                        <p>
                            Playing basketball is his zen.
                        </p>
                        <p>
                            Connect on <a className='text-decoration-none' href='#'>Homepage</a>  / <a className='text-decoration-none' href='#'>TradingQnA</a> / <a className='text-decoration-none' href='#'>Twitter</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;