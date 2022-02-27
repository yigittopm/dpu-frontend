import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { login } from "../../redux/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

function LoginPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  console.log(user);
  const validateForm = Yup.object().shape({
    email: Yup.string()
      .min(12, "Min 12")
      .max(64, "Max 64")
      .email("Invalid email")
      .required(),
    password: Yup.string().min(6, "Min 6").max(512, "Max 512").required(),
  });

  return (
    <div className="d-flex justify-content-center mt-3 row m-0">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validateForm}
        onSubmit={async (values) => {
          await dispatch(login(values));
          toast.success("Success");
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
            <h4 className="mt-2 mb-2 text-center">Login</h4>

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
              Don't have an account ? <Link to="/register">Sign up</Link>
            </small>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-warning form-control mt-3"
            >
              Login
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default LoginPage;
