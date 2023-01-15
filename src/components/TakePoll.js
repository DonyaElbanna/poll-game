import { Button, Card } from "semantic-ui-react";
import { useState } from "react";
// import { useSelector } from "react-redux";

const TakePoll = ({ poll }) => {
  const { optionOne, optionTwo
    // , uservoteOne, userVoteTwo 
} = poll;
  const [vote, setVote] = useState("");
//   const state = useSelector((state) => state);
  const handleVote = (option) => {
    setVote(option);
    // if (option === optionOne) {
    //   uservoteOne.push(state.authedUser);
    // } else if (option === optionTwo) {
    //   userVoteTwo.push(state.authedUser);
    // }
  };
  console.log(poll, vote);

  //   if (vote === optionOne) {
  //     uservoteOne.push(state.authedUser);
  //   } else if (vote === optionTwo) {
  //     userVoteTwo.push(state.authedUser);
  //   } else {
  //     return;
  //   }

  return (
    <Card.Content>
      <Button basic color="violet" onClick={() => handleVote(optionOne)}>
        {optionOne}
      </Button>
      <br />
      <br />
      <div>Or</div>
      <br />
      <Button basic color="violet" onClick={() => handleVote(optionTwo)}>
        {optionTwo}
      </Button>
      {/* <Button basic color="pink" floated="right">
        Vote
      </Button> */}
    </Card.Content>
  );
};

export default TakePoll;
