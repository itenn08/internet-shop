import React, { useState } from "react";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Form from "../Form/Form";
import Field from "../Form/Field";
import { userLogin } from "../../services/auth";
import Message from "../Message/Message";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import styles from "./Auth.module.css";

const Login = () => {
  const { isLogin } = useSelector((state) => state.user);

  const [message, setMessage] = useState({
    text: false,
    type: "",
  });

  const [password, showPassword] = useState(false);

  const handleClickShowPassword = () => {
    showPassword((password) => !password);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validationSchema = Yup.object().shape({
    login: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string("Enter your password")
      .min(6, "Password should be of minimum 6 characters length")
      .required("Password is required"),
  });

  const initialValues = {
    login: "",
    password: "",
  };

  if (isLogin) {
    let history = useHistory();
    history.push("/");
  }

  return (
    <>
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          userLogin({
            username: values.login,
            password: values.password,
            onFailure: (text) => setMessage({ text, type: "error" }),
          });
        }}
        className={styles.container}
      >
        <Field
          variant="outlined"
          placeholder="Login"
          name="login"
          margin="none"
          fullWidth
          renderComponent={TextField}
        />
        <Field
          variant="outlined"
          placeholder="Password"
          name="password"
          type={password ? "text" : "password"}
          margin="none"
          fullWidth
          renderComponent={TextField}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {password ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Login
        </Button>
      </Form>
      {message.text && (
        <Message
          text={message.text}
          type={message.type}
          onClose={() => setMessage({ text: "", type: "" })}
        />
      )}
    </>
  );
};

export default Login;
