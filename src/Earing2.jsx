import React, { useState } from "react";
import './Necklace1.css'
import Navbar from "./Navbar";

const Earing2 = () =>{
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
                    <img src="data:image/webp;base64,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" alt="necklace" className="Img1"/>
                    <span className="About">
                        <span className="title">
                            <span className="title_name">Glorious Floret</span>
                        </span><br />
                        <span className="Price">
                            Price ~ <span className="Price_amount">$ 300.21</span>
                        </span>
                        <span className="Description">  
                            The Glorious Floret golden earrings are a beautiful blend of elegance and style, featuring a delicate floral design. Crafted from high-quality gold, these earrings radiate a luxurious shine. Their sophisticated look adds a graceful touch to any outfit, making them an ideal accessory for those who appreciate timeless beauty.
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
export default Earing2;