import { useSelector } from "react-redux";
import { useState } from "react";
import { formatQuestion } from "../utils/helpers";
import { Navigate, useParams } from "react-router-dom";
import {
  Button,
  Card,
  Checkbox,
  Label,
  Icon,
  Progress,
  Image,
} from "semantic-ui-react";

const PollResult = () => {
  const pollID = useParams().id;

  const state = useSelector((state) => state);

  const poll = state.questions[pollID];
  //   formatQuestion(poll, state.users[poll.author]);

  const formattedPoll = formatQuestion(poll, state.users[poll.author]);
  // console.log(formattedPoll);

  const {
    author,
    avatar,
    // id,
    optionOne,
    optionTwo,
    userVoteOne,
    userVoteTwo,
    votesOne,
    votesTwo,
    totalVotes,
  } = formattedPoll;

  const [goBack, setGoBack] = useState(false);

  const handleGoBack = () => {
    setGoBack(true);
  };

  if (goBack === true) {
    return <Navigate to="/" />;
  }

  const LabelOne = (
    <Label basic color="violet" image>
      {optionOne}
    </Label>
  );

  const LabelTwo = (
    <Label basic color="violet" image>
      {optionTwo}
    </Label>
  );

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
        {userVoteOne.includes(state.authedUser) && (
          <Label color="pink" ribbon="right">
            You Chose
          </Label>
        )}
        <div >
          <Checkbox radio label={LabelOne} name="checkboxRadioGroup" />
          <Progress
            color="violet"
            value={votesOne}
            total={totalVotes}
            progress="ratio"
          />
        </div>

        <div style={{ margin: "0.5rem 0" }}>Or</div>
        {userVoteTwo.includes(state.authedUser) && (
          <Label color="pink" ribbon="right">
            You Chose
          </Label>
        )}

        <div>
          <Checkbox radio label={LabelTwo} name="checkboxRadioGroup" />
          <Progress
            color="violet"
            value={votesTwo}
            total={totalVotes}
            progress="ratio"
          />
        </div>

        <div className="center-btn">
          <Button animated color="pink" onClick={handleGoBack}>
            <Button.Content visible>Go Back</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow left" />
            </Button.Content>
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default PollResult;
