import React, { SVGProps } from "react"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import {AboutUsPage} from "../../Pages/About-us/Index"
import {ContactPage}  from "../../Pages/Contact/Index"
import {HomePage}  from "../../Pages/Home/Index"
import "../../Style.css"
import { HomeIcon,AboutIcon, ContactIcon } from "../IconHandler/Index"

export const Header = () => {
    return (
        <div id="Header-Container">
            <Router>
                <div id="Header-Inner-Container">
                    <div id="Header-Icon"> THIS IS MADE FOR ICON</div>
                    <div id="Header-Pages-Container">
                        
                            <Link id="Header-Home-Link" to="/">
                                <HomeIcon style={{height: "20px", fill: "#194569"}}/>
                                Hem
                            </Link>
                       
                            <Link id="Header-About-Link" to="/about-us">
                                <AboutIcon style={{height: "20px", fill: "#194569"}}/>
                                
                                Om oss
                            </Link>
                       
                            <Link id="Header-Contact-Link" to="/contact">
                                <ContactIcon style={{ height: "20px", fill: "#194569"}}/>
                                Kontakt
                            </Link>
                        

                    </div>

                </div>


                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/about-us" element={<AboutUsPage/>} />
                    <Route path="/contact" element={<ContactPage/>} />
                </Routes>
            </Router>
        </div>
    )
}

