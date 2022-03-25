import React from "react";
import pp from "../../assets/avatars/1-small.png";
import { Link, useLocation } from "react-router-dom";
import { AuthLocalStorage } from "../../LocalStorage";

function Right() {
  const { pathname } = useLocation();
  const { isAuth, isAdmin } = AuthLocalStorage();

  return (
    <div className="d-flex align-items-center">
      {isAuth ? (
        <>
          {isAdmin && (
            <>
              <Link
                className="nav-link text-warning d-none d-md-block"
                to="/admin"
              >
                Admin
              </Link>
            </>
          )}
          <Link className="text-reset me-3 d-none d-md-block" to="/">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </Link>

          <Link className="text-reset me-3 d-none d-md-block" to="/shop-cart">
            <i className="fas fa-shopping-cart"></i>
            <span className="badge rounded-pill badge-notification bg-danger">
              0
            </span>
          </Link>

          <div className="dropdown">
            <Link
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={pp}
                className="rounded-circle"
                height="30"
                alt="Profil"
                loading="lazy"
              />
            </Link>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
            </ul>
          </div>
        </>
      ) : (
        <div className="">
          <ul className="navbar-nav mr-0 mb-lg-0">
            {pathname === "/login" ? (
              <li className="nav-item">
                <Link
                  className={`nav-link ${pathname === "/register" && "active"}`}
                  to="/register"
                >
                  Register
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link
                  className={`nav-link ${pathname === "/login" && "active"}`}
                  to="/login"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Right;
