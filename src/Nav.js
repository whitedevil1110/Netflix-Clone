import React, { useEffect, useState } from "react";
import './Nav.css'
import { useHistory} from "react-router-dom";
function Nav () {
const [show, handleShow] =useState(false);
const history = useHistory();

const transitionNavBar = () => {
    if (window.scrollY > 100) {
        handleShow(true);
    } else{
        handleShow(false);
    }
} 
useEffect(() => {
window.addEventListener("scroll",transitionNavBar);
return () => window.removeEventListener("scroll",transitionNavBar); 
},[]);
    return (  
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img
                onClick={() => history.push("/")} 
                    className="nav__logo" src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F153%2F31%2Fpng-transparent-netflix-macos-bigsur-icon.png&tbnid=1gwY9Dd6-NgAWM&vet=12ahUKEwjxmpzT9JqAAxUSp2MGHUgsCyAQMygEegUIARDhAQ..i&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dnetflix&docid=W81Fe0gWSDYflM&w=920&h=512&q=netflix%20transparent%20logo&hl=en&ved=2ahUKEwjxmpzT9JqAAxUSp2MGHUgsCyAQMygEegUIARDhAQ' alt="" />
           <img
            onClick={() => history.push("/profile")} 
            className="nav__avater"src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F0%2F0b%2FNetflix-avatar.png&tbnid=nZOFHtwea_quaM&vet=12ahUKEwj-uZGx9JqAAxWSzaACHTMTBigQMygAegUIARDCAQ..i&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANetflix-avatar.png&docid=giDSZ8hKlyMOLM&w=320&h=320&q=netflix%20avatar&hl=en&ved=2ahUKEwj-uZGx9JqAAxWSzaACHTMTBigQMygAegUIARDCAQ'alt=""/>
           </div>
        </div>
    );
}

export default Nav;