import React, { useState } from "react"
import "../style.css"
import { Link, Routes, Route } from 'react-router-dom'

export default function Header() {
    //using font-awesome hamburger
    const [click, setClick] = useState(false); 
    const handleClick = () => setClick(!click); //reverses the state
    const closeMobileMenu = () => setClick(false); //setting default close state for hamburger
    
    /*Uses HTML DOM Events*/
    /*window.addEventListener('')*/

    return (
        <header className="header">
            <nav className="nav">
                <div className="nav-container">
                    <Link to='/' className="logo">
                        <img className="logo" src={require("../Photos/smc.png")}/>
                    </Link>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                                    
                        <li className="nav-items">
                            <Link to="/CommonQuestions" className="nav-links" onClick={closeMobileMenu}>
                                Common Questions
                            </Link>
                        </li>

                        <li className="nav-items">
                            <Link to="/ProductFamily" className="nav-links" onClick={closeMobileMenu}>
                                Product Family
                            </Link>
                        </li>
                        
                        <li className="nav-items">
                            <Link to="/Components" className="nav-links" onClick={closeMobileMenu}>
                                Components
                            </Link>
                        </li>
                    </ul>

                    {/*using font-awesome hamburger*/}
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>

                </div>
            </nav>

        </header>
    )
}