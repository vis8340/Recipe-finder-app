import LogoutButton from "./LogoutButton";
import LoggedOut from "./LoggedOut";

const Logout = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      {!token ? (
        <LoggedOut />
      ) : (
        <>
          <h1>Logout</h1>
          <div className="accountFormContainer">
            <p className="userMessage">To logout, hit the button:</p>
            <LogoutButton />
          </div>
        </>
      )}
    </>
  );
};
export default Logout;
