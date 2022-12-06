import { Link } from "react-router-dom";
import { FavoritesLocalStorage } from "../../../LocalStorage";

import Title from "./Title";
import FavoritesTable from "./Table";

function Favorites() {
  const favorites = FavoritesLocalStorage();

  return (
    <div className="p-4 row">
      <Title length={favorites.length} />
      {favorites && favorites.length > 0 ? (
        <>
          <div className="col-lg-12 col-ms-12 mb-2">
            <FavoritesTable favorites={favorites} />
          </div>
        </>
      ) : (
        <div
          className="d-flex flex-wrap justify-content-center align-items-center"
          style={{ height: "300px" }}
        >
          <h2>Favoriler Boş, henüz favorilere ürün eklemediniz..</h2>
          <Link to="/">Ana Sayfa</Link>
        </div>
      )}
    </div>
  );
}

export default Favorites;
