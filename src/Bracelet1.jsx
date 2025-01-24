import React, { useState } from "react";
import './Necklace1.css'
import Navbar from "./Navbar";

const Bracelet1 = () =>{
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
                    <img src="https://d25g9z9s77rn4i.cloudfront.net/uploads/product/265/1661190684_0429d9ea23405e6d0325.jpg" alt="necklace" className="Img1"/>
                    <span className="About">
                        <span className="title">
                            <span className="title_name">Sleek-Strip Bracelets</span>
                        </span><br />
                        <span className="Price">
                            Price ~ <span className="Price_amount">$ 200</span>
                        </span>
                        <span className="Description">
                            The Sleek-Strip Bracelet features a minimalist, polished design for effortless elegance. Lightweight and versatile, it complements any outfit, perfect for both casual and formal occasions.
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

export default Bracelet1;