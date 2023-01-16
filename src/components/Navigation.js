import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeAuthedUser } from "../actions/authedUser";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const dispatch = useDispatch();

  const handleItemClick = (e) => {
    setActiveItem(e.target.innerHTML);
  };

  const handleLogOut = () => {
    dispatch(removeAuthedUser());
  };

  // const authedUser = useSelector((state) => state.authedUser);
  // console.log(authedUser);

  // const handleAlert = () => {
  //   if (!authedUser) {
  //     alert("You gotta login first!")
  //   }
  // }

  return (
    <div>
      <Menu
        pointing
        secondary
        stackable
        // onClick={handleAlert}
      >
        <Link to="/home">
          <Menu.Item
            as="li"
            name="home"
            active={activeItem === "Home"}
            onClick={handleItemClick}
          />
        </Link>

        <Link to="/add">
          <Menu.Item
            as="li"
            name="Add Poll"
            active={activeItem === "Add Poll"}
            onClick={handleItemClick}
          />
        </Link>

        <Link to="/leaderboard">
          <Menu.Item
            as="li"
            name="Leaderboard"
            active={activeItem === "Leaderboard"}
            onClick={handleItemClick}
          />
        </Link>

        <Menu.Menu position="right">
          <Menu.Item
            as={Link}
            to="/"
            name="logout"
            active={activeItem === "logout"}
            onClick={handleLogOut}
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Navigation;
