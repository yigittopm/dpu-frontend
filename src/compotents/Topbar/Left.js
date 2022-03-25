import React from "react";

function Left() {
  return (
    <div className="">
      <button
        className=" btn btn-dark text-light"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i style={{ fontSize: "1.4rem" }} className="fa-solid fa-bars"></i>
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li className="dropdown-title">Categories</li>
        <li>
          <a className="dropdown-item" href="/">
            Action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Another action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Something else here
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Another action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Something else here
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Another action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Something else here
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Left;
