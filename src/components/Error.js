import { useEffect } from "react";
import { Link } from "react-router-dom";

const Error = () => {
  useEffect(() => {
    document.getElementById("nav").style.display = "none";
  }, []);

const showNav = () => {
    document.getElementById("nav").style.display = "block";
}

  return (
    <div className="error-page">
      <h2>Page Not Found</h2>
      <p>What's worse, a hilaroius 404 page can't be found either.</p>
      <Link to="/home" className="go-home" onClick={showNav}>
        Go Home
      </Link>
    </div>
  );
};

export default Error;
