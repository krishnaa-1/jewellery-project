import React, { useState } from "react";
import './Necklace1.css'
import Navbar from "./Navbar";

const Necklacelist1 = () =>{
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
                    <img src="https://tse4.mm.bing.net/th?id=OIP.4GUqTiZY4iPErt-pe3Xc-gHaHa&pid=Api&P=0&h=180" alt="necklace" className="Img1"/>
                    <span className="About">
                        <span className="title">
                            <span className="title_name">Royale Choker</span>
                        </span><br />
                        <span className="Price">
                            Price ~ <span className="Price_amount">$ 618.46</span>
                        </span>
                        <span className="Description">
                        A royal choker necklace is a close-fitting, elegant accessory adorned with precious gemstones and fine metals. Its intricate design and regal appeal make it a timeless statement piece for grand occasions.
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

export default Necklacelist1;