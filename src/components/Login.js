import React from "react";
import { Dropdown, Button } from "semantic-ui-react";
import { useState } from "react";
import { setAuthedUser } from "../actions/authedUser";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

const users = [
  {
    key: "jennyhess",
    text: "Jenny Hess",
    value: "jennyhess",
    image: {
      avatar: false,
      src: "https://react.semantic-ui.com/images/avatar/large/stevie.jpg",
    },
  },
  {
    key: "mattfeliciano",
    text: "Matt Feliciano",
    value: "mattfeliciano",
    image: {
      avatar: false,
      src: "https://semantic-ui.com/images/avatar/large/joe.jpg",
    },
  },
  {
    key: "elliotfu",
    text: "Elliot Fu",
    value: "elliotfu",
    image: {
      avatar: false,
      src: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    },
  },
];

const Login = () => {

  console.log(useParams())

  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const handleUser = (e, { value }) => {
    setUser(value);
  };

  const handleLogin = () => {
    dispatch(setAuthedUser(user));
  };
  // console.log(user);
  return (
    <div className="dropdown">
      <Dropdown
        style={{ width: "30rem" }}
        button
        className="icon"
        floating
        labeled
        icon="user outline"
        selection
        placeholder="Select a user"
        fluid
        options={users}
        onChange={handleUser}
      />
      <Button as={Link} to="/home" basic color="violet" disabled={!user} onClick={handleLogin}>
        Log in
      </Button>
    </div>
  );
};

export default Login;
