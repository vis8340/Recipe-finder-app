import CreateAccount from "../components/CreateAccount";
import DeleteAccount from "../components/DeleteAccount";

const AccountPage = () => {
  const token = localStorage.getItem("token");
  return <>{!token ? <CreateAccount /> : <DeleteAccount />} </>;
};
export default AccountPage;
