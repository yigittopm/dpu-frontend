import React, {useEffect} from "react";
import UserCard from "./UserCard";
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../../../redux/admin/adminSlice";
import {AuthLocalStorage} from "../../../../LocalStorage";

function Users() {
      const dispatch = useDispatch()
      const {refreshToken} = AuthLocalStorage();
      const {users} = useSelector(state => state.admin)


      useEffect(() => {
            dispatch(getAllUsers(refreshToken))
      }, [dispatch,refreshToken])


  return (
      <div className={"row m-3 row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5"}>
            {users.map((data, index) => {
                  return (
                      <UserCard data={data} key={index}/>
                  )
            })}
      </div>)
}

export default Users;
