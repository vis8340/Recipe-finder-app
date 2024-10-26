import { useDispatch } from "react-redux";
import { logoutSuccess, setMessage } from "../app/accountSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../app/config";
import "../styles/accountForm.css";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    const token = localStorage.getItem("token");

    //logout account from SQL
    const response = await axios.delete(`${url}/account/logout`, {
      headers: {
        token: token,
      },
    });
    console.log("Server response", response, "token", token);

    const status = response.data.status;
    console.log(status);

    if (status === 1) {
      //remove token and dispatch to the store
      localStorage.removeItem("token");
      dispatch(logoutSuccess());
      navigate("/loggedout");
    } else {
      //handle error messages from the server
      dispatch(setMessage("Logout failed, please try again"));
    }
  };

  return (
    <>
      <button className="logoutButton" type="submit" onClick={logout}>
        Logout
      </button>
    </>
  );
};

export default LogoutButton;
