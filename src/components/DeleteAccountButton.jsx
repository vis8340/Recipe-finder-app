import { deleteAccount, setMessage } from "../app/accountSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../app/config";
import "../styles/accountForm.css";

const DeleteAccountButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const unregister = async (e) => {
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(
        setMessage("To delete your account, please go to settings and login.")
      );
    }

    //delete account from SQL
    const response = await axios.delete(`${url}/account/`, {
      headers: {
        token: token,
      },
    });
    console.log("server response", response);

    const status = response.data.status;

    if (status === 1) {
      //dispatch to the store
      localStorage.removeItem("token");
      dispatch(deleteAccount());
      navigate("/deleted");
    } else {
      //handle error messages from the server
      dispatch(
        setMessage(
          "There was a problem deleting your account, please try again."
        )
      );
    }
  };

  return (
    <>
      <button className="submitButton" type="submit" onClick={unregister}>
        Delete Account
      </button>
    </>
  );
};

export default DeleteAccountButton;
