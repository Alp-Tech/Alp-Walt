import React from "react";
import { Link } from "react-router-dom";

export default class Navbar {
  render() {
    return (
      <React.Fragment>
        <Link to="accounts">Accounts</Link>
        <Link to="crypto">Crypto</Link>
        <Link to="nft">NFT's</Link>
      </React.Fragment>
    );
  }
}
