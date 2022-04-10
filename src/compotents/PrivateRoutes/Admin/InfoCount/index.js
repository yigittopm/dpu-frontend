import React from "react";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";

function InfoCount({ name, to, color = 0 }) {
  const colors = [
    "linear-gradient(to right, #00b4db, #0083b0)",
    "linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114))",
    "linear-gradient(to right, #8360c3, #2ebf91)",
    "linear-gradient( 129.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% )",
  ];
  return (
    <Card
      style={{
        backgroundImage: colors[color],
        color: "white",
        borderRadius: "15px",
      }}
      className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-3 border-0 m-3"
    >
      <div>
        <h1>{name}</h1>
      </div>

      <hr />
      <div>
        <h3>Toplam: 35 Adet</h3>
      </div>
      <hr />
      <div>
        <Link className="btn w-100 text-white admin-btn-link" to={to}>
          Göster
        </Link>
      </div>
    </Card>
  );
}

export default InfoCount;
