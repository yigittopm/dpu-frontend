import React from "react";
import SearchBar from "./SearchBar";
import Right from "./Right";
import Logo from "./Logo";
import Left from "./Left";
import {useSelector} from "react-redux";

function TopBar() {
    const {isSearch} = useSelector(state => state.product)
  return (
    <nav className="container-fuild fixed-top">
      <div className="justify-content-around navbar navbar-expand-lg navbar-dark bg-dark text-light">
          <Left/>
          <Logo />
        <SearchBar />
        <Right />
      </div>
        {/*<Categories/>*/}
    </nav>
  );
}

export default TopBar;
