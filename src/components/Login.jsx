import LoginForm from "./LoginForm";
import LoggedIn from "./LoggedIn";

const Login = () => {
  const token = localStorage.getItem("token");

  return <> {!token ? <LoginForm /> : <LoggedIn />}</>;
};
export default Login;
