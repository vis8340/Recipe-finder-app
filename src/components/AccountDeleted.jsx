import AccountForm from "./AccountForm";
import "../styles/accountForm.css";

const AccountDeleted = () => {
  return (
    <div>
      <h1>Delete your Account</h1>
      <div className="accountFormContainer">
        <p className="userMessage"> We are sorry to see you go. </p>
        <p className="userMessage"> Your Account has been deleted.</p>
      </div>
      <div>
        <h2>To create a new account, fill in the form:</h2>
        <AccountForm />
      </div>
    </div>
  );
};

export default AccountDeleted;
