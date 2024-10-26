import Login from "../components/Login";
import Logout from "../components/Logout";
const LoginPage = () => {
  const token = localStorage.getItem("token");

  return <> {!token ? <Login /> : <Logout />}</>;
};
export default LoginPage;
