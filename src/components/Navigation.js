import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAuthedUser } from "../actions/authedUser";
import { Menu, Image } from "semantic-ui-react";
import { Link, Navigate } from "react-router-dom";

const Navigation = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const dispatch = useDispatch();
  const authedUserID = useSelector((state) => state.authedUser);
  const users = useSelector((state) => state.users);
  // console.log(users[authedUserID]);

  const handleItemClick = (e) => {
    setActiveItem(e.target.innerHTML);
  };

  const handleLogOut = () => {
    dispatch(removeAuthedUser());
  };

  const authedUser = useSelector((state) => state.authedUser);
  // console.log(authedUser);

  const handleAlert = () => {
    if (!authedUser) {
      alert("You gotta login first!");
      return <Navigate to="/" />;
    }
  };

  return (
    <div id="nav">
      <Menu pointing secondary stackable color="violet" size="massive">
        <Link to="/home" onClick={handleAlert}>
          <Menu.Item
            as="li"
            name="home"
            active={activeItem === "Home"}
            onClick={handleItemClick}
          />
        </Link>

        <Link to="/add" onClick={handleAlert}>
          <Menu.Item
            as="li"
            name="Add Poll"
            active={activeItem === "Add Poll"}
            onClick={handleItemClick}
          />
        </Link>

        <Link to="/leaderboard" onClick={handleAlert}>
          <Menu.Item
            as="li"
            name="Leaderboard"
            active={activeItem === "Leaderboard"}
            onClick={handleItemClick}
          />
        </Link>

        <Menu.Menu position="right">
          {authedUserID ? (
            <span className="login-info">
              <Image avatar src={users[authedUserID].avatarURL} />
              <Menu.Item>{users[authedUserID].name}</Menu.Item>
            </span>
          ) : null}

          <Menu.Item
            disabled={!authedUser}
            as={Link}
            to="/"
            onClick={handleLogOut}
            style={{ color: "#6435c9" }}
            name="logout"
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Navigation;
