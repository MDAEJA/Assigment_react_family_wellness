import React from "react";
import  '../components/Headerstyle.css'

function Header(){
    return(
        <>
        <header>
            <div className="nav-container">

                <div className="hearder-text">
                    <strong style={{color:'pink',fontStyle:'oblique',fontWeight:'bold',lineHeight:'30px',fontSize:'2rem'}}>Family Wellness</strong>
                <span style={{fontStyle:'oblique',marginLeft:'20px',lineHeight:'30px'}}>MASSAGE THERAPY</span>
                </div>
                
                <div  className="inner-div-header">
                    <ul className="header-unorder-list">
                        <li style={{backgroundColor:'red',textAlign:'center',width: '80px',padding: '5px 5px'}}>Home</li>
                        <li className="header-list">About</li>
                        <li className="header-list">Services</li>
                        <li className="header-list">FAQ</li>
                        <li className="header-list">Contact</li>
                    </ul>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header;