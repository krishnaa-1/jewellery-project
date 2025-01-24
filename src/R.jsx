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
const diamond_jhumka = React.lazy(()=>import('./Earing1'))


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
                <Route path="/diamond_jhumka" element={<diamond_jhumka/>}/>
             </Routes>
        </Router>
    )
}
export default R;