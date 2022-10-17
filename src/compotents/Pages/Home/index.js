import React from "react";
import Products from "./Products";
import CarouselPage from "./CarouselPage";
import {useSelector} from "react-redux";

function HomePage() {
    const {search} = useSelector(state => state.product)
  return (
    <div className="">
        {
            search.length < 1 && <CarouselPage />
        }
      <Products />
    </div>
  );
}

export default HomePage;
