import React from "react";
function TopBar() {
  return (
    <nav className="navbar navbar-dark bg-dark text-light">
      <div className="d-flex justify-content-around navbar-collapse collapse">
        <div>
          <h2>Ecommerce</h2>
        </div>
        <div>
          <a style={{ color: "#fff", textDecoration: "none" }} href="/">
            Profile
          </a>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
