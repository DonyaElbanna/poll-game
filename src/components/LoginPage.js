import { Dropdown } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { useState } from "react";

const LoginPage = () => {
  const usersInfo = Object.values(useSelector((state) => state.users));

  const [user, setUser] = useState("");

  const handleUser = (e, {value}) => {
    setUser(value)
  }
  console.log(user);
  return (
    <Dropdown
      // button
      style={{ width: "50%", margin: "5rem auto" }}
      button
      className="icon"
      floating
      labeled
      icon="user outline"
      selection
      placeholder= "Select a user"
      onChange={handleUser}
      options={usersInfo.map((user) => (
        <Dropdown.Item
          key={user.id}
          value={user.id}
          image={user.avatarURL}
          text={user.name}
          
        />
      ))}
    ></Dropdown>
  );
};

export default LoginPage;
