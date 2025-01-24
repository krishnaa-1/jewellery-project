import React from "react";
import Jewellcard from "./jewellcard";
import './Necklace.css';
import Navbar from "./Navbar";

const Giftcardlist = () =>{
    return(
        <div className="Giftcardlist">
            <Navbar/>
            <span className="Giftcard">No Giftcard Available Right Now !!</span>
        </div>
    )
}

export default Giftcardlist;