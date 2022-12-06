import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AuthLocalStorage,
  FavoritesLocalStorage,
  ShopCartLocalStorage,
} from "../../LocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authSlice";
import { changeIsSearch } from "../../redux/product/productSlice";

function Right() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { isSearch } = useSelector((state) => state.product);
  const { isAuth, isAdmin, refreshToken, image } = AuthLocalStorage();
  const shopCart = ShopCartLocalStorage();
  const favorites = FavoritesLocalStorage();

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
          <Link
            className="text-reset me-3 d-none d-md-block"
            onClick={() => dispatch(logout(refreshToken))}
            to="/"
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </Link>

          <Link
            className="text-reset me-3 d-none d-md-block"
            to="/profile/favorites"
          >
            <i class="fa-sharp fa-solid fa-heart"></i>
            {favorites.length > 0 && (
              <span className="badge rounded-pill badge-notification bg-danger">
                {favorites.length}
              </span>
            )}
          </Link>

          <Link
            className="text-reset me-3 d-none d-md-block"
            to="/profile/shop-cart"
          >
            <i className="fas fa-shopping-cart"></i>
            {shopCart.length > 0 && (
              <span className="badge rounded-pill badge-notification bg-danger">
                {shopCart.length}
              </span>
            )}
          </Link>

          <Link to="/profile/edit" className="d-none d-md-block">
            <img
              src={image}
              style={{ borderRadius: "50%" }}
              className="rounded-circle"
              height="30"
              width="30"
              alt="Profil"
              loading="lazy"
            />
          </Link>

          {!isSearch && (
            <button
              className=" btn btn-dark text-light d-md-none"
              type="button"
              onClick={() => dispatch(changeIsSearch(!isSearch))}
            >
              <i
                style={{ fontSize: "1.3rem" }}
                className="fa-solid fa-magnifying-glass"
              ></i>
            </button>
          )}
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
