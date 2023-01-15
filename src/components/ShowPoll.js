import { useSelector } from "react-redux";

import {
  Button,
  Card,
  Checkbox,
  Label,
  Icon,
  Progress,
} from "semantic-ui-react";

const ShowPoll = ({ setShowPoll, poll }) => {
  const state = useSelector((state) => state);

  const handleHidePoll = (e) => {
    e.preventDefault();
    setShowPoll(false);
  };

  const {
    optionOne,
    optionTwo,
    userVoteOne,
    userVoteTwo,
    votesOne,
    votesTwo,
    totalVotes,
  } = poll;

  const LabelOne = (
    <Label
      basic
      color="violet"
      image
    >
      {optionOne}
    </Label>
  );

  const LabelTwo = (
    <Label
      basic
      color="violet"
      image
    >
      {optionTwo}
    </Label>
  );

  return (
    <Card.Content>
      {userVoteOne.includes(state.authedUser) && (
        <Label color="pink" ribbon>
          You Chose
        </Label>
      )}
      <Checkbox radio label={LabelOne} name="checkboxRadioGroup" />

      <Progress
        color="violet"
        value={votesOne}
        total={totalVotes}
        progress="ratio"
      />
      <div>Or</div>
      <br/>
      {userVoteTwo.includes(state.authedUser) && (
        <Label color="pink" ribbon>
          You Chose
        </Label>
      )}
      <Checkbox radio label={LabelTwo} name="checkboxRadioGroup" />

      <Progress
        color="violet"
        value={votesTwo}
        total={totalVotes}
        progress="ratio"
      />
      <Button
        animated
        basic
        color="pink"
        floated="right"
        onClick={handleHidePoll}
      >
        <Button.Content visible>Go Back</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow left" />
        </Button.Content>
      </Button>
    </Card.Content>
  );
};

export default ShowPoll;
