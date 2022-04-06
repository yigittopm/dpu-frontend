import React from "react";
import { Link } from "react-router-dom";
import { useSidebar } from "../../context/Sidebar";
import "./sidebar.css";

function Sidebar() {
  const { isOpen } = useSidebar();

  return (
    <>
      {isOpen && (
        <div className={`sidebar-container ${isOpen ? "opened" : "closed"}`}>
          <h2>Kategoriler</h2>
          <hr />
          <ul className="sidebar-ul">
            <li className="sidebar-item">Bilgisayar</li>
            <li className="sidebar-item">Giyim</li>
            <li className="sidebar-item">Elektronik</li>
            <li className="sidebar-item">Oyuncak</li>
            <li className="sidebar-item">Beyaz Eşya</li>
          </ul>
          <hr />
          <div
            style={{ bottom: 0, left: 0 }}
            className="d-flex justify-content-between align-items-center p-3"
          >
            <div className="d-flex justify-content-between align-items-center">
              <img
                alt="pp"
                height="50px"
                style={{ borderRadius: "50%", marginRight: "10px" }}
                src={require("../../assets/avatars/2.png")}
              />
              <p>Mert Yiğittop</p>
            </div>
            <div>
              <Link
                className="text-reset me-3 d-none d-md-block"
                to="/profile/edit"
              >
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
