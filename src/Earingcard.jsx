import React from "react";
import { useNavigate } from "react-router-dom";
import "./Jewellcard.css";

const Earingcard = ({ Title, Price, Img_url, onaddtocart, onaddtofav,routelink}) => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(routelink);
        console.log("krosh")
    };

    return (
        <div className="jewellcard" onClick={handleNavigation}>
            <img src={Img_url} alt="img" className="jewellcard_img" />
            <div className="jewellcard_name_price">
                <span className="jewellcard_name">{Title}</span><br />
                <span><span className="jewellcard_price">Price ~ </span>$ {Price}</span>
            </div>
            <div className="jewellcard_cart_fav">
                <button className="jewellcard_cartbutton" onClick={(e) => { e.stopPropagation(); onaddtocart(); }}>Add to Cart</button>  
                <button className="jewellcard_favbutton" onClick={(e) => { e.stopPropagation(); onaddtofav(); }}>Add to Favourite</button>
            </div>                
        </div>
    );
};

export default Earingcard;
