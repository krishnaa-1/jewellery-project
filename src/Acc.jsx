import React,{ useState } from "react";
import Navbar from './Navbar.jsx'
import './Acc.css';

const Account = () => {
    const [password,setpassword] = useState("");
    const [showpassword,setshowpassword] = useState(false);

    const toggleshowpassword = () =>{
        setshowpassword(!showpassword);
    } 
    return(
        <div>
            <Navbar />
            <div className="Accpage">
            <span className="heading">Welcome to Luna d'Oro</span><br />
            <div className="Account_box">
                <span className="Emailid">Email ID</span>
                <div className="Email_input_div">
                <input type="text" className="Email_input" placeholder="Email ID..." />
                </div>
                <span className="Password">Password</span>
                <div className="Password_input_div">
                    <input 
                        type={showpassword ? "text" : "password"} 
                        className="Password_input"
                        id="password"
                        value={password}
                        onChange={(e)=>{setpassword(e.target.value)}}
                        placeholder="Password..."
                    />
                    <button type="button" onClick={toggleshowpassword} className="toggle_button">Hide</button>
                </div>
            </div>
            </div>

        </div>
    )
}
export default Account;