import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/product/productSlice";
import LoadingPage from "../Pages/LoadingPage";

function Categories() {
  const dispatch = useDispatch();
  const { categories, success } = useSelector((state) => state.product);
  const [isLoading, setIsLoading] = useState(success);
  const [categoriesData, setCategoriesData] = useState(categories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  useEffect(() => {
    setIsLoading(success);
    setCategoriesData(categories);
  }, [categories, success]);
  return (
    <div className="bg-light">
      {isLoading ? (
        <ul className="list-group list-group-horizontal justify-content-around overflow-hidden">
          {categoriesData.map((category, index) => (
            <li key={index} className="list-group-item">
              {category}
            </li>
          ))}
        </ul>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}

export default Categories;
