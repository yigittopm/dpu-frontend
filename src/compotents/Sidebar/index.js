import React from "react";
import {useSidebar} from "../../context/Sidebar";
import Logo from "./Logo";
import List from "./List";
import "./sidebar.css";
import ProfileTab from "./ProfileTab";
import {Card} from "reactstrap";

function Sidebar() {
  const { isOpen } = useSidebar();

  return (
    <Card className={`sidebar-container bg-dark text-muted ${isOpen ? "opened": "closed"} position-fixed rounded-0`}>
      <Logo />
      <List />
      <ProfileTab />
    </Card>
  );
}

export default Sidebar;
