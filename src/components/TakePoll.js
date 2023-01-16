import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { formatQuestion } from "../utils/helpers";
import { handleAnswerQuestion } from "../actions/questions";
import { receiveInitialData } from "../actions/index";
import { Navigate, useParams } from "react-router-dom";
import { Button, Card, Form, Checkbox, Image } from "semantic-ui-react";

const TakePoll = () => {
  const pollID = useParams().id;

  const state = useSelector((state) => state);

  const poll = state.questions[pollID];

  const formattedPoll = formatQuestion(poll, state.users[poll.author]);
  // console.log(formattedPoll);

  const {
    author,
    avatar,
    // id,
    optionOne,
    optionTwo,
    // userVoteOne,
    // userVoteTwo,
    // votesOne,
    // votesTwo,
    // totalVotes,
  } = formattedPoll;

  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser);

  const [vote, setVote] = useState("");
  const [viewResults, setViewResults] = useState(false);
  const [toPollResult, setToPollResult] = useState(false);

  const handleVote = () => {
    dispatch(handleAnswerQuestion({ authedUser, qid: poll.id, answer: vote }));
    setVote("");
    setViewResults(true);
  };

  const handleGoToPollResult = (e) => {
    e.preventDefault();
    setToPollResult(true);
    dispatch(receiveInitialData());
  };

  if (toPollResult === true) {
    return <Navigate to={`/poll-result/${pollID}`} />;
  }

  return (
    <Card color="grey">
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
            <Checkbox
              radio
              label={optionOne}
              name="checkboxRadioGroup"
              value="optionOne"
              checked={vote === "optionOne"}
              onChange={(e, data) => setVote(data.value)}
            />
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
          </Form.Field>

          <div className="center-btn">
            <Button
              style={{ display: viewResults && "none" }}
              color="pink"
              type="submit"
            >
              Vote
            </Button>
            <Button
              style={{ display: !viewResults && "none" }}
              color="pink"
              onClick={handleGoToPollResult}
            >
              View Result
            </Button>
          </div>
        </Form>
      </Card.Content>
    </Card>
  );
};

export default TakePoll;
