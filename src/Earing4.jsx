import React, { useState } from "react";
import './Necklace1.css'
import Navbar from "./Navbar";

const Earing4 = () =>{
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
                    <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTenlMvKb4WDjMZvtuYpVUSd0yv_isnx9CPB5WCAgIZ8OP6rK9mcU48nQVxTc6HsGWRBJi3a9efi9xpj5D9WGvKqdr882yN7B06h2XHL8LXbJpZ01eE0HRt2gK7G2_8Gfl4QX86Mw&usqp=CAc" alt="necklace" className="Img1"/>
                    <span className="About">
                        <span className="title">
                            <span className="title_name">Elle Drop</span>
                        </span><br />
                        <span className="Price">
                            Price ~ <span className="Price_amount">$ 388.32</span>
                        </span>
                        <span className="Description"> 
                            The Elle Drop golden earrings exude modern elegance with their sleek, drop-style design. Made from premium gold, these earrings feature a simple yet striking silhouette that gracefully complements any attire. Their subtle, refined look makes them perfect for both day and evening wear, adding a touch of sophistication and class to your jewelry collection.
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
export default Earing4;