import { useState } from "react";
import { useSelector } from "react-redux";
import { Menu } from "semantic-ui-react";
import { Link, Navigate } from "react-router-dom";

const Navigation = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (e) => {
    setActiveItem(e.target.innerHTML);
  };

  const authedUser = useSelector((state) => state.authedUser);
  console.log(authedUser);

  const handleAlert = () => {
    if (!authedUser) {
      alert("You gotta login first!")
    }
  }

  return (
    <div>
      <Menu pointing secondary stackable onClick={handleAlert}>
        <Link to={authedUser ? "/home" : "/"}>
          <Menu.Item
            as="li"
            name="home"
            active={activeItem === "Home"}
            onClick={handleItemClick}
          />
        </Link>

        <Link to={authedUser ? "/add" : "/"}>
          <Menu.Item
            as="li"
            name="Add Poll"
            active={activeItem === "Add Poll"}
            onClick={handleItemClick}
          />
        </Link>

        <Link to={authedUser ? "/leaderboard" : "/"}>
          <Menu.Item
            as="li"
            name="Leaderboard"
            active={activeItem === "Leaderboard"}
            onClick={handleItemClick}
          />
        </Link>

        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Navigation;
