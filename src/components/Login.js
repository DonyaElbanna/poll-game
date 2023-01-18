import React from "react";
import { Image, Dropdown, Button } from "semantic-ui-react";
import { useState } from "react";
import { setAuthedUser } from "../actions/authedUser";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const users = [
  {
    key: "jennyhess",
    text: "Jenny Hess",
    value: "jennyhess",
    image: {
      alt: "avatar",
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/large/stevie.jpg",
    },
  },
  {
    key: "mattfeliciano",
    text: "Matt Feliciano",
    value: "mattfeliciano",
    image: {
      alt: "avatar",
      avatar: true,
      src: "https://semantic-ui.com/images/avatar/large/joe.jpg",
    },
  },
  {
    key: "elliotfu",
    text: "Elliot Fu",
    value: "elliotfu",
    image: {
      alt: "avatar",
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    },
  },
];

const Login = () => {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const handleUser = (e, { value }) => {
    setUser(value);
  };

  const handleLogin = () => {
    dispatch(setAuthedUser(user));
  };

  let location = useLocation();

  // console.log(user);
  return (
    <>
      <Image
        size="medium"
        src="https://i.postimg.cc/B6dbsbLf/wydpic.png"
        alt="app-logo"
      />
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
          title="login"
        />
        <Button
          as={Link}
          to={location.pathname}
          basic
          color="violet"
          disabled={!user}
          onClick={handleLogin}
        >
          Log in
        </Button>
      </div>
    </>
  );
};

export default Login;
