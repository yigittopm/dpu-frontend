import React, {useEffect, useState} from "react";
import Product from "../../Product";
import {getProductsByCategories} from "../../../redux/product/productSlice";
import {useDispatch, useSelector} from "react-redux";
import LoadingPage from "../Loading";

function Similar({ productDetail }) {
    const dispatch = useDispatch()
    const { products, success } = useSelector((state) => state.product);
    const [fetchData, setFetchData] = useState(products)
    const [isLoading, setIsLoading] = useState(success)

    useEffect(() => {
        dispatch(getProductsByCategories("TV"));
    }, [dispatch]);

    useEffect(() => {
        setFetchData(products);
        setIsLoading(success)
    }, [products,success]);


    return (
        <div className="mt-4">
            <h4>Benzer Ürünler</h4>
            <div className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                { isLoading ?
                    fetchData?.map((product) => (
                    <Product key={product._id} product={product} />
                )): <LoadingPage />
                }
            </div>
        </div>
    );
}

export default Similar;
