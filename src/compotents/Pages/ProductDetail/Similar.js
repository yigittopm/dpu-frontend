import React, {useEffect} from "react";
import {Card} from "reactstrap";
import Product from "../../Product";
import {getProductsByCategories} from "../../../redux/product/productSlice";
import {useDispatch, useSelector} from "react-redux";

function Similar({ productDetail }) {
    const dispatch = useDispatch()
    const { products, success } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(getProductsByCategories("LAPTOP"));
    }, [dispatch]);

    return (
        <div className="mt-4">
            <h4>Benzer Ürünler</h4>
            <div className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                {products?.map((product) => (
                    <Product key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Similar;
