import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import { register } from "../../../redux/auth/authSlice";
import { useDispatch } from "react-redux";
import { AuthLocalStorage } from "../../../LocalStorage";
import { toast } from "react-toastify";

function RegisterPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userData = AuthLocalStorage();

  const validateForm = Yup.object().shape({
    username: Yup.string().min(4, "Min 4").max(32, "Max 32").required(),
    email: Yup.string()
      .min(12, "Min 12")
      .max(64, "Max 64")
      .email("Invalid email")
      .required(),
    password: Yup.string().min(6, "Min 6").max(512, "Max 512").required(),
  });

  useEffect(() => {
    if (userData.success) {
      toast.success("Login success!");
      setTimeout(() => {
        history.push("/profile/edit");
      });
    }
  });

  return (
    <div className="d-flex justify-content-center mt-3 row m-0">
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={validateForm}
        onSubmit={async (values) => {
          await dispatch(register(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="col-lg-3 col-md-6 col-sm-8 col-xs-10"
          >
            <h4 className="mt-2 mb-2 text-center">Register</h4>

            <div className="form-group form-outline mb-1 mt-3">
              <label className="form-label" id="username">
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="MertY"
                className={`form-control ${
                  errors.username && touched.username && "is-invalid"
                }`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              {errors.username && touched.username && (
                <small className="text-danger">{errors.username}</small>
              )}
            </div>

            <div className="form-group form-outline mb-1">
              <label className="form-label" id="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="yigittopm@hotmail.com"
                className={`form-control ${
                  errors.email && touched.email && "is-invalid"
                }`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </div>

            <div className="form-group form-outline mb-3">
              <label className="form-label" id="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className={`form-control ${
                  errors.password && touched.password && "is-invalid"
                }`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && (
                <small className="text-danger">{errors.password}</small>
              )}
            </div>
            <small>
              Already have an account ? <Link to="/login">Login</Link>
            </small>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-warning form-control mt-3"
            >
              Register
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterPage;
