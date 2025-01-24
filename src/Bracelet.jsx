import React,{useState} from "react";
import Jewellcard from "./jewellcard";
import './Bracelet.css';
import Navbar from "./Navbar";
import Braceletcard from "./Braceletcard";

const Braceletlist = () =>{
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
        <div className="Braceletlist">
            <Navbar cartcount={addtocart} favcount={addtofav} />
            <Braceletcard 
                Img_url="https://d25g9z9s77rn4i.cloudfront.net/uploads/product/265/1661190684_0429d9ea23405e6d0325.jpg"
                Title="Sleek-Strip Bracelets"
                Price="200"
                onaddtocart={handleaddtocart}
                onaddtofav={handleaddtofav}
            />
            <Braceletcard
                Img_url="https://pachchigarjewellers.com/wp-content/uploads/sites/554/2023/06/BRG_1394__2023-06-14-18-27-04-1-scaled.jpg"
                Title="Rudraksha Bracelet"
                Price="240.13"
                onaddtocart={handleaddtocart}
                onaddtofav={handleaddtofav}
            />
            <Braceletcard 
                Img_url="https://www.shreelaxmijewellers.in/live/img/business_product/cCpszIwno5_20230831114805.jpg"
                Title="Versace"
                Price="754.19"
                onaddtocart={handleaddtocart}
                onaddtofav={handleaddtofav}
            />
            <Jewellcard 
                Img_url="https://images.jdmagicbox.com/quickquotes/images_main/mens-gold-bracelet-for-party-2221919160-yklj15vm.jpg"
                Title="Men's Chain Bracelet"
                Price="170.42"
                onaddtocart={handleaddtocart}
                onaddtofav={handleaddtofav}
            />
        </div>
    )
}

export default Braceletlist;