import Hero from './Hero'
import Leftsection from './Leftsection';
import Rightsection from './Rightsection';
import Universe from './Universe';


function Productpage() {
    return ( 
        <>
            <Hero/>
            <Leftsection 
                imageUrl="media\images\kite.png" 
                pName="Kite" 
                pDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo="#"
                learnMore="#"
                googlePlay="#"
                appStore="#"
            />
            <Rightsection
                imageUrl="media\images\consoleimage (1).png" 
                pName="Console" 
                pDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                tryDemo="#"
                learnMore="#"
                googlePlay="#"
                appStore="#"
            />
            <Leftsection 
                imageUrl="media\images\coin.png" 
                pName="Coin" 
                pDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                tryDemo="#"
                learnMore="#"
                googlePlay="#"
                appStore="#"
            />
            <Rightsection
                imageUrl="media\images\kiteimage.svg" 
                pName="Kite Connect API" 
                pDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                tryDemo="#"
                learnMore="#"
                googlePlay="#"
                appStore="#"
            />
            <Leftsection 
                imageUrl="media\images\varsity.png" 
                pName="Varsity mobile" 
                pDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                tryDemo="#"
                learnMore="#"
                googlePlay="#"
                appStore="#"
            />
            <Universe/>
        </>
     );
}

export default Productpage;