import ReactDOM from "react-dom/client";
import React from "react";
import Head from "./Components/HeaderComponents/Header.js";
import Foot from "./Components/FooterComponents/Footer.js";
import Body from "./Components/BodyComponents/Body.js";
import TopResContainer from "./Components/BodyComponents/TopResChainComponents/TopResContainer.js";
import Counter from "./utils/Counter.js";


const Main = ()=> {
    return (
        <>
            <div>
                <Head/>
                <TopResContainer/>
                <Body/>
                <Foot/>
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));  
//index.html --> div_id=root
root.render(<Main/>);
