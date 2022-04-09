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
      to: "/categories/Headphone",
      isActive: false,
    },
    {
      name: "Mobile Phones",
      to: "/categories/MobilePhone",
      isActive: false,
    },
    {
      name: "TV",
      to: "/categories/TV",
      isActive: false,
    },
    {
      name: "Laptops",
      to: "/categories/Laptop",
      isActive: false,
    },
    {
      name: "Smart Watchs",
      to: "/categories/SmartWatch",
      isActive: false,
    },
    {
      name: "Headphones",
      to: "/categories/Headphone",
      isActive: false,
    },
    {
      name: "Mobile Phones",
      to: "/categories/MobilePhone",
      isActive: false,
    },
    {
      name: "TV",
      to: "/categories/TV",
      isActive: false,
    },
    {
      name: "Laptops",
      to: "/categories/Laptop",
      isActive: false,
    },
    {
      name: "Smart Watchs",
      to: "/categories/SmartWatch",
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
