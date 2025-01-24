import React, { useState } from "react";
import './Necklace1.css'
import Navbar from "./Navbar";

const Bracelet2 = () =>{
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
                    <img src="https://pachchigarjewellers.com/wp-content/uploads/sites/554/2023/06/BRG_1394__2023-06-14-18-27-04-1-scaled.jpg" alt="necklace" className="Img1"/>
                    <span className="About">
                        <span className="title">
                            <span className="title_name">Rudraksha Bracelet</span>
                        </span><br />
                        <span className="Price">
                            Price ~ <span className="Price_amount">$ 240.13</span>
                        </span>
                        <span className="Description">
                            The Rudraksha Bracelet combines natural Rudraksha beads with a sleek design, offering spiritual significance and timeless style. Perfect for daily wear and meditation.
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

export default Bracelet2;