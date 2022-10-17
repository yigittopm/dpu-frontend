import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeIsSearch, changeSearch} from "../../redux/product/productSlice";

function SearchBar() {
    const dispatch = useDispatch()
    const {isSearch} = useSelector(state => state.product)
  return (
    <div className={`${!isSearch ? "d-none d-md-block w-50" : "w-100 p-2"}`}>
      <div className="input-group">
        <input
          className="form-control w-75 "
          placeholder="Search in All Categories"
          onChange={(e) => dispatch(changeSearch((e.target.value).toLocaleUpperCase()))}
        />
          {
              isSearch ?
                  <button className="btn bg-warning text-dark " type="button" onClick={() => dispatch(changeIsSearch(!isSearch))}>
                    <i className="fa-solid fa-xmark"></i>
                    </button> :
                  <button className="btn bg-warning text-dark " type="button">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
          }


      </div>
    </div>
  );
}

export default SearchBar;
