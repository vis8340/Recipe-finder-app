import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="pageNotFoundContainer">
        <h1> Page Not Found </h1>
        <Link className="link" to={"/home"}>
          <p className="userMessage">Go back to Homepage</p>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
