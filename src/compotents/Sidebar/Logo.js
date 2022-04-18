import React from "react";
import { useSidebar } from "../../context/Sidebar";
import { Link } from "react-router-dom";
function Logo() {
  const { isOpen, setIsOpen } = useSidebar();
  return (
    <div className="d-flex align-items-center justify-content-around p-2 sidebar-logo">
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
      <button
        className=" btn btn-dark text-light"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i style={{ fontSize: "1.4rem" }} className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
}

export default Logo;
