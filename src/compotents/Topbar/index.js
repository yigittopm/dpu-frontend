import React from "react";
import SearchBar from "./SearchBar";
import Left from "./Left";
import Right from "./Right";
import Logo from "./Logo";

function TopBar() {
  return (
    <nav className="container-fluid justify-content-evenly navbar navbar-expand-lg navbar-dark bg-dark text-light">
      <Left />
      <Logo />
      <SearchBar />
      <Right />
    </nav>
  );
}

export default TopBar;
