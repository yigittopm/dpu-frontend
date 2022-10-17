import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AuthLocalStorage } from "../../LocalStorage";
import { logout } from "../../redux/auth/authSlice";

function ProfileTab() {
  const dispatch = useDispatch();
  const { refreshToken } = AuthLocalStorage();
  return (
    <div className="d-flex justify-content-between align-items-center p-3  profile-tab">
      <div className="d-flex justify-content-between align-items-center">
        <img
          alt="pp"
          height="40px"
          style={{ borderRadius: "50%" }}
          src={require("../../assets/avatars/2.png")}
        />
          <p>Mert Yiğittop</p>
      </div>
      <div>
        <Link
          className="text-reset me-3"
          onClick={() => dispatch(logout(refreshToken))}
          to="/"
        >
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </Link>
      </div>
    </div>
  );
}

export default ProfileTab;
