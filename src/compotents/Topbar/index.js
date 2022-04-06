import React from "react";
import SearchBar from "./SearchBar";
import Left from "./Left";
import Right from "./Right";
import Logo from "./Logo";
import Sidebar from "../Sidebar";

function TopBar() {
  return (
    <nav className="container-fuild">
      <div className="justify-content-evenly navbar navbar-expand-lg navbar-dark bg-dark text-light">
        <Left />
        <Logo />
        <SearchBar />
        <Right />
      </div>
      <div>
        <Sidebar />
      </div>
    </nav>
  );
}

export default TopBar;
