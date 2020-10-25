import React from 'react';
import amazon from '../Images/amazon.png';

function Navbar() {

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="text-center">
                <div style = {{display: "inline-block",textAlign: "center",padding: "24px 48px 12px"}}>
                    <img src = { amazon } alt = "logo" width = "40" height = "40"/>
                </div>
            </div>
        </nav>
    );

}

export default Navbar;