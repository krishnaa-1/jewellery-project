import React from "react";
import { Component } from "react";
import "./Jewellcard.css";

class Braceletcard extends Component {
    render(){
        const {Title,Price,Img_url,onaddtocart,onaddtofav} = this.props;
        return(
            <div className="jewellcard">
                <img src={Img_url} alt="img" className="jewellcard_img"/>
                <div className="jewellcard_name_price">
                    <span className="jewellcard_name">{Title}</span><br />
                    <span><span className="jewellcard_price">Price ~ </span>$ {Price}</span>
                </div>
                <div className="jewellcard_cart_fav">
                    <button className="jewellcard_cartbutton"onClick={onaddtocart}>Add to Cart</button>   <button className="jewellcard_favbutton"onClick={onaddtofav}>Add to Favourite</button>
                </div>                
            </div>
        );
    };
};

export default Braceletcard;