import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getOrders} from "../../../redux/user/userSlice";
import LoadingPage from "../Loading";
import OrderTable from "./OrderTable";

import {AuthLocalStorage} from "../../../LocalStorage";

function Orders() {
  const { accessToken } = AuthLocalStorage();
  const dispatch = useDispatch();
  const { success, orders } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(success);
  const [allOrders, setAllOrders] = useState(orders);

  useEffect(() => {
    dispatch(getOrders(accessToken));
  }, [dispatch, accessToken]);

  useEffect(() => {
    setAllOrders(orders);
    setIsLoading(success);
  }, [success, orders]);

  return <>{isLoading ? <OrderTable orders={allOrders} /> : <LoadingPage />}</>;
}

export default Orders;
