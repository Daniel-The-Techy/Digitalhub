import React from 'react'
import {Menuitems} from './Menuitems'
import {useState} from 'react'
import './Navbar.css';
import { Outlet, Link } from "react-router-dom";


function Navbar() {
    const [MenuIcon, setMenuicon] = useState(false)

    const HandleClick = () =>{
        setMenuicon(!MenuIcon)
    }
    return (
        <div>
           <nav className="Menu-items">
            
               <h3 className="Menu-logo"><span class="red">Digitalhub</span> Agency</h3>
               <div className="Menu-icons" onClick={HandleClick}>
               <i className={MenuIcon ? "fas fa-times":"fas fa-bars"}></i>
               </div>
            
               <ul className={MenuIcon ? "Nav-item active" : "Nav-item"}>
                   
                      <li >
                    <Link className="Nav-links" to='/'>Home</Link>

                          </li>
                
                          <li>
                    <Link className="Nav-links"  to="/Service">Service</Link>

                          </li>
                
                          <li   >
                    <Link className="Nav-links" to="/About">About Us</Link>

                          </li>
                
                          <li>
                    <Link className="Nav-links"  to="/Privacy">Privacy/Policy</Link>

                          </li>

<li>
                    <Link className="Nav-link-Mobile" to="/Contact">Contact Us</Link>
                </li>

               </ul>
             <button className="btn">Contact Us</button>
              
           </nav>
           
        </div>
    )
}




export default Navbar
