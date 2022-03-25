import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link className="" to="/">
      {/* Ecommerce */}
      <img
        className="pt-1"
        src="https://m.media-amazon.com/images/G/41/logos/desktop/images/.com.tr_rev_half.svg"
        height="30"
        alt="Ecommerce-logo"
        loading="lazy"
      />
    </Link>
  );
}

export default Logo;
