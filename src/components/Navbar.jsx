import React from "react";

function Navbar() {
    return (
        <div className="Navbar">
          <div className="logoNav">
            <img src="./logo.png" alt="" srcset="" />
          </div>
          <div className="navigation">
            <div>Accounts</div>
            <div>Crypto</div>
            <div>NFT's</div>
          </div>
        </div>
    );
}
export default Navbar;