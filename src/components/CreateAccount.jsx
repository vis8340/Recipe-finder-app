import AccountForm from "./AccountForm";
import NewAccount from "./NewAccount";

const CreateAccount = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      {" "}
      {!token ? (
        <>
          <h2> Create an Account</h2>
          <div className="accountFormContainer">
            <AccountForm />
          </div>
        </>
      ) : (
        <>
          <NewAccount />
        </>
      )}
    </>
  );
};
export default CreateAccount;
