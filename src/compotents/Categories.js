import React from "react";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="bg-light">
      <ul className="list-group list-group-horizontal justify-content-around overflow-hidden">
        <li className="list-group-item">
          <Link to="/giyim"> Giyim</Link>
        </li>
        <li className="list-group-item">Araba</li>
        <li className="list-group-item">Bilgisayar</li>
        <li className="list-group-item">Beyaz Eşya</li>
        <li className="list-group-item">Telefon</li>
      </ul>
    </div>
  );
}

export default Categories;
