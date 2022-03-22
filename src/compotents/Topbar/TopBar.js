import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authSlice";
import { Link, useLocation } from "react-router-dom";
import pp from "../../assets/avatars/2-small.png";
import { AuthLocalStorage } from "../../LocalStorage";

function TopBar() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { isAuth, isAdmin, refreshToken } = AuthLocalStorage();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2 text-light">
      <div className="container-fluid justify-content-between">
        {/** Left Toggle and Logo */}
        <div className="">
          <button
            className="dropdown-toggle btn btn-dark text-light"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
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
          <Link className="" to="/">
            {/* Ecommerce */}
            <img
              className="pt-1"
              src="https://m.media-amazon.com/images/G/41/logos/desktop/images/.com.tr_rev_half.svg"
              height="25"
              alt="Ecommerce-logo"
              loading="lazy"
            />
          </Link>
        </div>

        {/* * Search Bar */}
        <div className="input-group w-50">
          <input
            className="form-control-sm w-75 d-none d-sm-block"
            placeholder="Search in All Categories"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline bg-warning text-dark btn-sm d-none d-md-block"
              type="button"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

        {/** Rigth Bar */}
        <div className="d-flex align-items-center">
          {isAuth ? (
            <>
              {isAdmin && (
                <>
                  <Link className="nav-link text-warning" to="/admin">
                    Admin
                  </Link>
                </>
              )}
              <Link
                className="text-reset me-3"
                to="/"
                onClick={() => dispatch(logout(refreshToken))}
              >
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </Link>

              <Link className="text-reset me-3" to="/shop-cart">
                <i className="fas fa-shopping-cart"></i>
                <span className="badge rounded-pill badge-notification bg-danger">
                  0
                </span>
              </Link>

              <div className="dropdown">
                <Link
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  to="/profile"
                >
                  <img
                    src={pp}
                    className="rounded-circle"
                    height="25"
                    alt="Profil"
                    loading="lazy"
                  />
                </Link>
              </div>
            </>
          ) : (
            <div className="d-none d-lg-block">
              <ul className="navbar-nav mr-0 mb-lg-0 ">
                {!false && (
                  <>
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${
                          pathname === "/login" && "active"
                        }`}
                        to="/login"
                      >
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${
                          pathname === "/register" && "active"
                        }`}
                        to="/register"
                      >
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
