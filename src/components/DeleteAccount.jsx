import DeleteAccountButton from "./DeleteAccountButton";
import LoginForm from "./LoginForm";
import "../styles/accountForm.css";

const DeleteAccount = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      {!token ? (
        <>
          <h1>Delete your Account</h1>
          <div className="accountFormContainer">
            <p className="userMessage">To delete your account, first log in:</p>
            <LoginForm />
          </div>
        </>
      ) : (
        <>
          <h1>Delete your Account</h1>
          <div className="accountFormContainer">
            <p className="userMessage">
              To delete your account, hit the button:
            </p>
            <DeleteAccountButton />
          </div>
        </>
      )}
    </>
  );
};

export default DeleteAccount;
