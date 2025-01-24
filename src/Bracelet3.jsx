import React, { useState } from "react";
import './Necklace1.css'
import Navbar from "./Navbar";

const Bracelet3 = () =>{
    const[count,setcount] = useState(1);

    const increment = () =>{
        setcount(count + 1);
    }
    const decrement = () =>{
        if (count>1) {
            setcount(count - 1);    
        } 
    }
    return(
        <div>
            <Navbar />

                <div className="Outer_card">
                    <img src="https://www.shreelaxmijewellers.in/live/img/business_product/cCpszIwno5_20230831114805.jpg" alt="necklace" className="Img1"/>
                    <span className="About">
                        <span className="title">
                            <span className="title_name">Versace</span>
                        </span><br />
                        <span className="Price">
                            Price ~ <span className="Price_amount">$ 754.19</span>
                        </span>
                        <span className="Description">
                            The Versace Bracelet exudes luxury with its iconic design, blending elegance and boldness. A statement piece for sophisticated fashion.Crafted with precision, this bracelet features intricate details, making it a perfect accessory for both casual and formal occasions.
                        </span>
                        <span className="counter">
                            <button onClick={increment}>+</button> <span className="count">{ count }</span> <button onClick={decrement}>-</button>
                        </span>
                        <span><button className="jewellcard_buy">Buy</button></span>
                        <span>
                            <button className="jewellcard_cartbutton" >Add to Cart</button>   <button className="jewellcard_favbutton" >Add to Favourite</button>
                        </span>  
                    </span>
                </div>

        </div>
    )
}

export default Bracelet3;