import React from "react";

function SearchBar() {
  return (
    <div className="w-50 d-none d-md-block">
      <div className="input-group">
        <input
          className="form-control w-75 "
          placeholder="Search in All Categories"
        />
        <button className="btn bg-warning text-dark " type="button">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
