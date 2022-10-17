import React from "react";
import { useSidebar } from "../../context/Sidebar";
import { Link } from "react-router-dom";
function Logo() {
  const { isOpen, setIsOpen } = useSidebar();
  return (
    <div className="d-flex align-items-center justify-content-around p-2 sidebar-logo">
        <h5>Kategoriler</h5>
      <hr/>
    </div>
  );
}

export default Logo;
