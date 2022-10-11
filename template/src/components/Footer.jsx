import React from "react";
import Copywrite from "./Copywrite";
import RedesSociais from "./RedesSocias";

function Footer(){
    return(
        <footer className="ftr">
            <h3>Vem pra Labenu!</h3>
            <RedesSociais/>
            <Copywrite/>
        </footer>
    )
}

export default Footer;