import React from "react";

function Title({ length }) {
  return (
    <div className="mb-3">
      <h2>Favorilerim {length < 1 ? null : <>({length} Ürün)</>}</h2>
    </div>
  );
}

export default Title;
