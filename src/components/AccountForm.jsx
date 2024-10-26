import { useState } from "react";
import {
  setStoreEmail,
  setStorePassword,
  createAccount,
  setMessage,
  loginSuccess,
} from "../app/accountSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validate } from "../validation/index";
import axios from "axios";
import { url } from "../app/config";
import "../styles/accountForm.css";

const AccountForm = () => {
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

  const register = async (e) => {
    e.preventDefault();

    const result = await validate({ email, password }, "createAccount");
    const user = { email, password };

    if (!result) {
      dispatch(setStoreEmail(email));
      dispatch(setStorePassword(password));
      dispatch(createAccount(user));

      //create account in SQL
      const response = await axios.post(`${url}/account/register`, {
        email,
        password,
      });
      console.log("server response", response);
      const status = response.data.status;
      const errorType = response.data.reason;

      //toasts
      if (status === 1) {
        //login user in the backend
        const response2 = await axios.post(`${url}/account/login`, {
          email,
          password,
        });
        console.log("server response", response2);

        //add token and dispatch to the store
        localStorage.setItem("token", response2.data.token);
        dispatch(loginSuccess(user));

        //redirect to new account page
        navigate("/new");
      } else if (errorType) {
        dispatch(setMessage(errorType));
      } else {
        dispatch(setMessage("Account not created, please try again."));
      }
    }

    setErrors(result);
  };

  return (
    <div>
      <form className="accountForm" onSubmit={register}>
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
          Create Account{" "}
        </button>
      </form>
    </div>
  );
};

export default AccountForm;
