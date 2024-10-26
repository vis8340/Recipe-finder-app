import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validate } from "../validation/index";
import { loginSuccess } from "../app/accountSlice";
import axios from "axios";
import { setMessage } from "../app/accountSlice";
import { url } from "../app/config";
import "../styles/accountForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const login = async (e) => {
    e.preventDefault();
    const result = await validate({ email, password }, "login");
    const user = { email, password };

    if (!result) {
      //send the validation result to the backend
      const response = await axios.post(`${url}/account/login`, {
        email,
        password,
      });

      console.log("server response", response);
      const status = response.data.status;
      const errorType = response.data.reason;

      if (status === 1) {
        //add token and dispatch to the store
        localStorage.setItem("token", response.data.token);
        dispatch(loginSuccess(user));
        navigate("/loggedin");
      } else if (errorType) {
        dispatch(setMessage(errorType));
      } else {
        //handle error messages from the server
        dispatch(setMessage("Login failed, please try again."));
      }
    }
    setErrors(result);
  };

  return (
    <div>
      {" "}
      <h1>Login</h1>
      <div className="accountFormContainer">
        <form className="accountForm" onSubmit={login}>
          <div className="emailFormContainer">
            <label>Email: </label>
            <input
              className="emailInput"
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {errors && <p>{errors.email}</p>}
          </div>

          <div className="passwordFormContainer">
            <label>Password: </label>
            <input
              className="passwordInput"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {errors && <p>{errors.password}</p>}
          </div>

          <button className="submitButton" type="submit">
            Login{" "}
          </button>
          {errors && (
            <div className="error-message">
              <p>{errors}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
