import React, { useState } from "react";
import './Necklace1.css'
import Navbar from "./Navbar";

const Necklacelist2 = () =>{
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
                    <img src="https://tse2.mm.bing.net/th?id=OIP.tdgq2eTQELExWkTwJ4TmjQHaE8&pid=Api&P=0&h=180" alt="necklace" className="Img1"/>
                    <span className="About">
                        <span className="title">
                            <span className="title_name">Heart Pendant</span>
                        </span><br />
                        <span className="Price">
                            Price ~ <span className="Price_amount">$ 431.75</span>
                        </span>
                        <span className="Description">
                            A gold heart pendant is a timeless symbol of love and elegance. Crafted in radiant gold, it features a sleek heart design, making it a perfect accessory for any occasion or a heartfelt gift for someone special.
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

export default Necklacelist2;