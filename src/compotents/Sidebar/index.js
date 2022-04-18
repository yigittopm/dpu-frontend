import React from "react";
import { useSidebar } from "../../context/Sidebar";
import Logo from "./Logo";
import List from "./List";
import "./sidebar.css";
import ProfileTab from "./ProfileTab";

function Sidebar() {
  const { isOpen } = useSidebar();

  return (
    <>
      {isOpen && (
        <div className={`sidebar-container ${isOpen ? "opened" : "closed"}`}>
          <Logo />
          <List />
          <ProfileTab />
        </div>
      )}
    </>
  );
}

export default Sidebar;
