import React from "react";
import { Card, Image } from "semantic-ui-react";
import { useSelector } from "react-redux";

const Leaderboard = () => {
  const users = useSelector((state) => Object.values(state.users));

  const orderedUsers = users
    .map((user) => ({
      id: user.id,
      avatar: user.avatarURL,
      name: user.name,
      pollsAdded: user.questions.length,
      pollsTaken: Object.keys(user.answers).length,
      totalScore: user.questions.length + Object.keys(user.answers).length,
    }))
    .sort((a, b) => b.totalScore - a.totalScore);
  // console.log(orderedUsers);

  return (
    <div>
      <h1 className="center">Leaderboard</h1>
      <Card.Group className="leaderboard-cards">
        {orderedUsers.map((user, index) => {
          let { id, avatar, name, pollsAdded, pollsTaken, totalScore } = user;
          return (
            <Card color="violet" key={id}>
              <Card.Content>
                {index === 0 ? (
                  <Image
                    label={{ corner: "left", content: "1st", color: "yellow" }}
                  />
                ) : index === 1 ? (
                  <Image
                    label={{ corner: "left", content: "2nd", color: "grey" }}
                  />
                ) : (
                  <Image
                    label={{ corner: "left", content: "3rd", color: "orange" }}
                  />
                )}
                <Card.Header>
                  <Image avatar src={avatar} />
                  {name}
                </Card.Header>
                <Card.Description>Polls taken: {pollsTaken}</Card.Description>
                <Card.Description>Polls added: {pollsAdded}</Card.Description>
                <Card.Description>Total polls: {totalScore}</Card.Description>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    </div>
  );
};

export default Leaderboard;
