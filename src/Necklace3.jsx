import React, { useState } from "react";
import './Necklace1.css'
import Navbar from "./Navbar";

const Necklacelist3 = () =>{
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
                    <img src="https://rukminim2.flixcart.com/image/850/1000/kxdl3m80/necklace-chain/r/o/x/1-slgoldc-000228n-necklace-s-l-gold-original-imag9ukhueqhezat.jpeg?q=90&crop=false" alt="necklace" className="Img1"/>
                    <span className="About">
                        <span className="title">
                            <span className="title_name">Petal Necklace</span>
                        </span><br />
                        <span className="Price">
                            Price ~ <span className="Price_amount">$ 484.28</span>
                        </span>
                        <span className="Description">    
                            The Golden Petal Necklace is a delicate and enchanting piece inspired by the beauty of nature. Designed with intricate petal motifs, this necklace radiates elegance and charm. Its golden finish adds a luxurious touch, making it perfect for both casual and formal occasions. Lightweight and versatile, the Golden Petal Necklace is an exquisite accessory that complements any outfit,
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

export default Necklacelist3;