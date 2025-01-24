import React, { useState } from "react";
import './Necklace1.css'
import Navbar from "./Navbar";

const Earing1 = () =>{
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
                    <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR03VKLOj_ZGVLhRNyl1FKUzInZZHyFtQSQg2Oac3BOcnWRgjroerxB8GjCfz8CKaj-mOhoi1MdMNYaHxNLhvqhOGRym-4dAxb1Gw8uHMOpIc-1pEzY1D757AtWc_XSUIffSH4Hgg&usqp=CAc" alt="necklace" className="Img1"/>
                    <span className="About">
                        <span className="title">
                            <span className="title_name">Diamond Jhumka</span>
                        </span><br />
                        <span className="Price">
                            Price ~ <span className="Price_amount">$ 1,272.12</span>
                        </span>
                        <span className="Description">
                            
                            The Diamond Jhumka earrings feature a captivating design that blends traditional craftsmanship with the elegance of diamonds. These stunning earrings are crafted to perfection, showcasing intricate details and a luxurious finish.
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
export default Earing1;