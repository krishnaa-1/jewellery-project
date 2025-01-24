import React, { useState } from "react";
import './Necklace1.css'
import Navbar from "./Navbar";

const Earing3 = () =>{
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
                    <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHQ76rgKQBUZeL9LachyX2J6vYnrizZzUxj5wx57z4sNSzyMKBDeVmY7fII5ffQq4Kh6LWzXmkNt6PstxfpNjsQ1uNP6etDoOy7ea42tvAM-jO9VSSDvzm-oz9rOsQ8SEG7_nKORA&usqp=CAc" alt="necklace" className="Img1"/>
                    <span className="About">
                        <span className="title">
                            <span className="title_name">Asyrah Ornate</span>
                        </span><br />
                        <span className="Price">
                            Price ~ <span className="Price_amount">$ 346.5</span>
                        </span>
                        <span className="Description">  
                            The Asyrah Ornate golden earrings showcase intricate craftsmanship and elegant design. Made from high-quality gold, these earrings blend tradition with modern flair, perfect for both special occasions and everyday wear. Their detailed patterns add sophistication and timeless charm to any look.
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
export default Earing3;