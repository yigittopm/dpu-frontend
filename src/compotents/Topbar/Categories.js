import React from "react";
import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    {
      name: "All",
      to: "/",
      isActive: true,
    },
    {
      name: "Headphones",
      to: "/products/categories/Headphone",
      isActive: false,
    },
    {
      name: "Mobile Phones",
      to: "/",
      isActive: false,
    },
    {
      name: "TV",
      to: "/",
      isActive: false,
    },
    {
      name: "Laptops",
      to: "/",
      isActive: false,
    },
    {
      name: "Smart Watchs",
      to: "/",
      isActive: false,
    },
    {
      name: "Headphones",
      to: "/",
      isActive: false,
    },
    {
      name: "Mobile Phones",
      to: "/",
      isActive: false,
    },
    {
      name: "TV",
      to: "/",
      isActive: false,
    },
    {
      name: "Laptops",
      to: "/",
      isActive: false,
    },
    {
      name: "Smart Watchs",
      to: "/",
      isActive: false,
    },
  ];

  return (
    <div className="bg-light list-div">
      <ul className="list-group list-group-horizontal list-ul">
        {categories.map((item, index) => (
          <Link
            key={index}
            className={`list-group-item list-li  ${item.isActive && "active"}`}
            to={item.to}
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
