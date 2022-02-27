import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const products = [
    {
      id: 1,
      name: "Televizyon",
      price: 20000,
    },
    { id: 2, name: "Televizyon", price: 20000 },
    { id: 3, name: "Televizyon", price: 20000 },
    { id: 4, name: "Televizyon", price: 20000 },
    { id: 5, name: "Televizyon", price: 20000 },
    { id: 6, name: "Televizyon", price: 20000 },
    { id: 7, name: "Televizyon", price: 20000 },
    { id: 8, name: "Televizyon", price: 20000 },
    { id: 9, name: "Televizyon", price: 20000 },
    { id: 10, name: "Televizyon", price: 20000 },
  ];

  return (
    <div className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4  m-3">
      {products.map((product) => (
        <div key={product.id} className="col mb-4">
          <div className="card">
            <img
              src="https://images.samsung.com/is/image/samsung/p6pim/tr/ue70au7100uxtk/gallery/tr-uhd-au7000-382891-ue70au7100uxtk-417074815?$720_576_PNG$"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.price} TL</p>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Link to="/" className="btn btn-primary w-100">
                Buy
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
