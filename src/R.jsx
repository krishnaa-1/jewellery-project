import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

const Jewellist = React.lazy(() => import("./Jewellist"));
const Cart = React.lazy(() => import("./Cart"));
const Fav = React.lazy(() => import("./Fav"));
const Acc = React.lazy(() => import("./Acc"));
const Earing = React.lazy(()=> import('./Earing'))
const Bracelet = React.lazy(()=> import('./Bracelet'))
const Necklace = React.lazy(()=> import('./Necklace'))
const Gift = React.lazy(()=> import('./Gift card'))
const Earing1 = React.lazy(()=>import('./Earing1'))
const Earing2 = React.lazy(()=>import('./Earing2'))
const Earing3 = React.lazy(()=>import('./Earing3'))
const Earing4 = React.lazy(()=>import('./Earing4'))


const R = () => {
    return(
        <Router>
             <Routes>
                <Route path="/" element={<Jewellist/>}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/Fav" element={<Fav />}/>
                <Route path="/account" element={<Acc />}/>
                <Route path="/earing" element={<Earing/>}/>
                <Route path="/necklace" element={<Necklace/>}/>
                <Route path="/bracelet" element={<Bracelet/>}/>
                <Route path="/gift_card" element={<Gift/>}/>
                <Route path="/diamond_jhumka" element={<Earing1 />}/>
                <Route path="/earing_2" element={<Earing2 />}/>
                <Route path="/earing_3" element={<Earing3 />}/>
                <Route path="/earing_4" element={<Earing4 />}/>
             </Routes>
        </Router>
    )
}
export default R;