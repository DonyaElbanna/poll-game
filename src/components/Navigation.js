import { useState } from "react";
import { Menu } from "semantic-ui-react";

const Navigation = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (e) => {
    setActiveItem(e.target.innerHTML);
  };

  return (
    <div>
      <Menu pointing secondary stackable>
        <Menu.Item
          name="home"
          active={activeItem === "Home"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Add Poll"
          active={activeItem === "Add Poll"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Leaderboard"
          active={activeItem === "Leaderboard"}
          onClick={handleItemClick}
        />
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
