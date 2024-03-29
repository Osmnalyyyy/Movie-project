import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import useAuth from "../helper/zustand";
import { saveUser } from "../store/auth-slice";

const Form = (props) => {
  const { firstName, lastName, email, password } = props;
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const setAuth = useAuth((state) => state.setAuth);
  const setUser = useAuth((state) => state.setUser);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      ...(firstName && { firstName: "" }),
      ...(lastName && { lastName: "" }),
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      ...(firstName && {
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
      }),
      ...(lastName && {
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
      }),
    }),
    onSubmit: (values) => {
      if (!formik.values.firstName) {
        users.filter((item) => {
          console.log(
            item.email,
            formik.values.email,
            item.password,
            formik.values.password
          );
          if (
            item.email === formik.values.email &&
            item.password === formik.values.password
          ) {
            setAuth();
            setUser(item);
            navigate("/");
          }
        });
      } else {
        dispatch(saveUser(formik.values));
      }
      formik.resetForm();
    },
  });

  return (
    <div className="login-page">
      <div className="form">
        <form className="register-form" onSubmit={formik.handleSubmit}>
          {firstName && (
            <>
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="error">{formik.errors.firstName}</div>
              ) : null}

              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="error">{formik.errors.lastName}</div>
              ) : null}
            </>
          )}

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
