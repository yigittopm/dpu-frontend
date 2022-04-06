import React from "react";
import { useSidebar } from "../../context/Sidebar";

function Left() {
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <div>
      <button
        className=" btn btn-dark text-light"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <i style={{ fontSize: "1.4rem" }} className="fa-solid fa-xmark"></i>
        ) : (
          <i style={{ fontSize: "1.4rem" }} className="fa-solid fa-bars"></i>
        )}
      </button>
    </div>
  );
}

export default Left;
