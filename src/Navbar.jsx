import React from "react";
import './Navbar.css'
import img1 from './images/SJ_logo.png'
import img2 from './images/cart.png'
import img3 from './images/fav.png'
import img4 from './images/Facebook_logo.jpeg'
import img5 from './images/Insta_logo.jpeg'
import img6 from './images/Twitter_logo.jpeg'
import { Link, useNavigate } from "react-router-dom";


const Navbar = ({cartcount,favcount}) => {
    console.log("cart ki value :",cartcount)
    console.log("fav ki value :",favcount)
    const navigate = useNavigate();
    return(
        <div className="Navbar">
            <div className="div1">
                <img src={img1} alt="logo" className="Logo" onClick={()=>{navigate("/")}} />
                <span className="Title" onClick={()=>{navigate("/")}}>Luna d'Oro</span>
                <img src={img6} alt="Twitter_logo" className="Twitter_logo" />
                <img src={img4} alt="facebook_logo" className="Facebook_logo" />
                <img src={img5} alt="insta_logo" className="Insta_logo"/>
            </div>
            <hr />
            <div className="div2">
                <div className="div2_first">
                    <div className="search-container">
                        <input type="text" className="searchbox" placeholder="Search..."/>
                        <button className="searchbutton">
                            <img src="https://img.icons8.com/ios-filled/50/000000/search.png" alt="" className="searchicon"/>
                        </button>
                    </div>

                    
                        <Link to='/cart' className="link">
                        <span className="Navi_cart_icon" onClick >
                            <img src={img2} alt="cart" className="cartimg" /><div className="cartcount">{cartcount}</div>
                        </span>
                        </Link>
            
                    <Link to='/fav'className="link">
                    <span className="Navi_Fav_icon"  >
                        <img src={img3} alt="favourite" className="favimg" /><div className="favcount">{favcount}</div>
                    </span>
                    </Link>
                    <Link to='/account'className="link"><span className="Account_page" >Account</span></Link>
                
                </div>
                    <hr />
                <div className="ebng">
                    <Link to='/earing'className="link"><span className="Earing_page" >Earing</span></Link>
                    <Link to='/bracelet'className="link"><span className="Bracelet_page" >Bracelet</span></Link>
                    <Link to='/necklace'className="link"><span className="Necklace_page" >Necklace</span></Link>
                    <Link to='/gift_card'className="link"><span className="Giftcard_page">Gift Card</span></Link>
                </div>    
            </div>
        </div>
    )
}

export default Navbar;