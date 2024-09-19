import {NavLink} from "react-router-dom";
import logo from "../../assets/images/icons/logo.png"

import '../../styles/navbar.css'
function Navbar() {

    return (
        <>
            <nav>
                <img src={logo} alt="Sweet Crums logo" className="logo"/>
                <NavLink className={(e)=>{return e.isActive?"brown":""}} to="/">Home</NavLink>
                <NavLink className={(e)=>{return e.isActive?"brown":""}} to="/about">About Us</NavLink>
                <NavLink className={(e) => { return e.isActive ? "brown" : "" }} to="/login">Login</NavLink>
 
            </nav>
            
        </>
    )


}

export default Navbar;