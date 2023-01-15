import { Button, Card, Form, Checkbox, Image } from "semantic-ui-react";
import { useState } from "react";
import { handleAnswerQuestion } from "../actions/questions";
import { useDispatch, useSelector } from "react-redux";
import TakenPolls from "./TakenPolls";

const TakePoll = ({ poll }) => {
  const {
    author, avatar,
    optionOne,
    optionTwo,
    // , uservoteOne, userVoteTwo
  } = poll;
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser);
  const [vote, setVote] = useState("");
const [showTakenPoll, setShowTakenPoll] = useState(false)
  // const chooseOption = (e) => {
  //   setVote(e.target.value);
  // };
  console.log(vote);
  const handleVote = () => {
    dispatch(handleAnswerQuestion({ authedUser, qid: poll.id, answer: vote }));
  };

  return (
    <Card fluid color="grey">
    <Card.Content>
      <Image avatar floated="left" src={avatar} />
      <Card.Header>{author.name}</Card.Header>
      <Card.Meta>is asking:</Card.Meta>
      <Card.Description>
        <strong>Would you rather</strong>
      </Card.Description>
    </Card.Content>
    <Card.Content>
      <Form onSubmit={handleVote}>
        <Form.Field>
          Selected value: <b>{vote}</b>
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label={optionOne}
            name="checkboxRadioGroup"
            value="optionOne"
            checked={vote === "optionOne"}
            onChange={(e,data) => setVote(data.value)}
          />
          {/* <label>{optionOne}</label> */}
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label={optionTwo}
            name="checkboxRadioGroup"
            value="optionTwo"
            checked={vote === "optionTwo"}
            onChange={(e, data) => setVote(data.value)}
          />
          {/* <input
            type="radio"
            // label={optionOne}
            name="checkboxRadioGroup"
            value="optionTwo"
            checked={vote === "optionTwo"}
            onChange={(event) => setVote(event.target.value)}
          />
          <label>{optionTwo}</label> */}
        </Form.Field>

        <Button basic color="pink" floated="right" type="submit" >
          Vote
        </Button>
      </Form>
    </Card.Content>
    {/* {showTakenPoll ? <TakenPolls/> : null} */}
    </Card>
  );
};

export default TakePoll;
