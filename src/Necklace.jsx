import React,{useState} from "react";
import Jewellcard from "./jewellcard";
import './Necklace.css';
import Navbar from "./Navbar";
import Necklacecard from "./Necklacecard";

const Necklacelist = () =>{
    const [addtocart,setaddtocart] = useState(0);
        const [addtofav,setaddtofav] = useState(0);
    
        const handleaddtocart = () => {
            setaddtocart(addtocart + 1);
            console.log("const ki value :", addtocart);
        }
        const handleaddtofav = () => {
            setaddtofav(addtofav + 1);
            console.log("fav ki value :", addtofav);}
    return(
        <div className="Necklacelist">
            <Navbar cartcount={addtocart} favcount={addtofav} />
            <Necklacecard 
                Img_url="https://tse4.mm.bing.net/th?id=OIP.4GUqTiZY4iPErt-pe3Xc-gHaHa&pid=Api&P=0&h=180"
                Title="Royale Choker "
                Price="618.46"
                onaddtocart={handleaddtocart}
                onaddtofav={handleaddtofav}
            />
            <Necklacecard
                Img_url="https://tse2.mm.bing.net/th?id=OIP.tdgq2eTQELExWkTwJ4TmjQHaE8&pid=Api&P=0&h=180"
                Title="Heart Pendant"
                Price="431.75"
                onaddtocart={handleaddtocart}
                onaddtofav={handleaddtofav}
            />
            <Necklacecard 
                Img_url="https://tse3.mm.bing.net/th?id=OIP.KiuZwAyyzP5ThoH8_wxxbwHaHa&pid=Api&P=0&h=180"
                Title="Phoebus Necklace"
                Price="1024.12"
                onaddtocart={handleaddtocart}
                onaddtofav={handleaddtofav}
            />
            <Necklacecard 
                Img_url="https://rukminim2.flixcart.com/image/850/1000/kxdl3m80/necklace-chain/r/o/x/1-slgoldc-000228n-necklace-s-l-gold-original-imag9ukhueqhezat.jpeg?q=90&crop=false"
                Title="Petal Necklace"
                Price="484.28"
                onaddtocart={handleaddtocart}
                onaddtofav={handleaddtofav}
            />
        </div>
    )
}

export default Necklacelist;