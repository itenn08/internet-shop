import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import sign from "../../services/sign";
import Message from "../Message/Message";
import { AuthContext } from "../../context/AuthContext";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./Auth.module.css";

const Register = () => {
  let history = useHistory();

  const [isAuthorized, setIsAuthorized] = useContext(AuthContext);

  const [error, setError] = useState("");
  const [messageState, showMessage] = useState(false);

  const request = "/register/";

  const SignupSchema = Yup.object().shape({
    login: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string("Enter your password")
      .min(6, "Password should be of minimum 6 characters length")
      .required("Password is required"),
    confirmPassword: Yup.string().when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
  });

  if (isAuthorized) {
    history.push("/");
  }

  return (
    <div>
      <Formik
        initialValues={{
          login: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          showMessage(true);
          sign(
            values.login,
            values.password,
            (value) => setIsAuthorized(value),
            (error) => setError(error),
            request
          );
        }}
      >
        {({ errors, touched, handleChange, handleBlur }) => (
          <Form className={styles.container}>
            <TextField
              id="login"
              name="login"
              label="login"
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.login && Boolean(errors.login)}
              helperText={touched.login && errors.login}
              className={styles.input}
            />
            <TextField
              id="password"
              name="password"
              label="password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              className={styles.input}
            />
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              label="confirm password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.confirmPassword && Boolean(errors.confirmPassword)}
              helperText={touched.confirmPassword && errors.confirmPassword}
              className={styles.input}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
            <Message
              message={error ? error : "Successfully register!"}
              messageState={messageState}
              onClose={() => showMessage(false)}
              type={error ? "error" : "success"}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
