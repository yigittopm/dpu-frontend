import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddresses, getOrders } from "../../../redux/user/userSlice";
import LoadingPage from "../Loading";

import { AuthLocalStorage } from "../../../LocalStorage";
import AddressTable from "./OrderTable";

function Addresses() {
  const { accessToken } = AuthLocalStorage();
  const dispatch = useDispatch();
  const { addresses, success } = useSelector((state) => state.user);
  const [allAddress, setAllAddress] = useState(addresses);
  const [isLoading, setIsLoading] = useState(success);

  useEffect(() => {
    dispatch(getOrders(accessToken));
    dispatch(getAddresses(accessToken));
  }, [dispatch, accessToken]);

  useEffect(() => {
    setAllAddress(addresses);
    setIsLoading(success);
  }, [dispatch, addresses, success]);

  return (
    <>
      {isLoading ? (
        <AddressTable addresses={addresses} accessToken={accessToken} />
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default Addresses;
