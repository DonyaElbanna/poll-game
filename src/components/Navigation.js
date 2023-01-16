import { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (e) => {
    setActiveItem(e.target.innerHTML);
  };

  return (
    <div>
      <Menu pointing secondary stackable>
        <Link to="/">
          <Menu.Item
            name="home"
            active={activeItem === "Home"}
            onClick={handleItemClick}
          />
        </Link>

        <Link to="/add">
          <Menu.Item
            name="Add Poll"
            active={activeItem === "Add Poll"}
            onClick={handleItemClick}
          />
        </Link>

        <Link to="/leaderboard">
          <Menu.Item
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
