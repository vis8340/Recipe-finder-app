import LoginForm from "./LoginForm";
const LoggedOut = () => {
  return (
    <div>
      <h1>Logout</h1>
      <div className="accountFormContainer">
        <p className="userMessage">You are logged out. To login:</p>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoggedOut;
