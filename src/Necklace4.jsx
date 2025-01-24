import React, { useState } from "react";
import './Necklace1.css'
import Navbar from "./Navbar";

const Necklacelist4 = () =>{
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
                    <img src="https://tse3.mm.bing.net/th?id=OIP.KiuZwAyyzP5ThoH8_wxxbwHaHa&pid=Api&P=0&h=180" alt="necklace" className="Img1"/>
                    <span className="About">
                        <span className="title">
                            <span className="title_name">Phoebus Necklace</span>
                        </span><br />
                        <span className="Price">
                            Price ~ <span className="Price_amount">$ 1024.12</span>
                        </span>
                        <span className="Description">
                            The Gold Phoebus Necklace is a masterpiece of elegance and artistry. Crafted with radiant gold, this necklace features a timeless design that blends traditional charm with modern aesthetics. Its intricate detailing and smooth finish highlight the craftsmanship, while the lustrous gold exudes luxury.
                        </span>
                        <span className="counter">
                            <button onClick={increment}>+</button> <span className="count">{ count }</span> <button onClick={decrement}>-</button>
                        </span>
                        <span><button className="jewellcard_buy">Buy</button></span>
                        <span>
                            <button className="jewellcard_cartbutton">Add to Cart</button>   <button className="jewellcard_favbutton">Add to Favourite</button>
                        </span>  
                    </span>
                </div>

        </div>
    )
}

export default Necklacelist4;