//import axios from "axios";
import React from "react";
//import { useDispatch } from "react-redux";
//import { getAllProducts } from "../../../redux/product/productSlice";
//import { Rings } from "react-loader-spinner";
import LoadingPage from "../LoadingPage";
import Products from "./Products";

function HomePage() {
  //const dispatch = useDispatch();
  //const productSlice = useSelector((state) => state.product);
  //const [products, setProducts] = useState([]);
  //const [loading, setLoading] = useState(true);
  const loading = true;

  // useEffect(() => {
  //   dispatch(getAllProducts());
  // }, []);

  return <div className="">{loading ? <Products /> : <LoadingPage />}</div>;
}

export default HomePage;
