import React, { useState } from "react";
import './Necklace1.css'
import Navbar from "./Navbar";

const Bracelet4 = () =>{
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
                    <img src="https://images.jdmagicbox.com/quickquotes/images_main/mens-gold-bracelet-for-party-2221919160-yklj15vm.jpg" alt="necklace" className="Img1"/>
                    <span className="About">
                        <span className="title">
                            <span className="title_name">Men's Chain Bracelet</span>
                        </span><br />
                        <span className="Price">
                            Price ~ <span className="Price_amount">$ 170.42</span>
                        </span>
                        <span className="Description">
                            This elegant golden men's wrist chain bracelet offers a bold yet refined style, perfect for adding a touch of sophistication to any look.
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
export default Bracelet4;