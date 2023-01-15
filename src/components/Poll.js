import { useSelector } from "react-redux";
import { useState } from "react";
import { formatQuestion } from "../utils/helpers";
import { Button, Card, Image, Icon } from "semantic-ui-react";
import ShowPoll from "./ShowPoll";
import TakePoll from "./TakePoll";

const Poll = ({ poll }) => {
  const state = useSelector((state) => state);

  poll = formatQuestion(poll, state.users[poll.author]);

  const {
    author,
    avatar,
    // id,
    optionOne,
    optionTwo,
    userVoteOne,
    userVoteTwo,
    // votesOne,
    // votesTwo,
    // totalVotes,
  } = poll;

  // console.log(poll);

  const [showPoll, setShowPoll] = useState(false);
  const handleShowPoll = (e) => {
    e.preventDefault();
    setShowPoll(true);
  };

  const [takePoll, setTakePoll] = useState(false);
  const handeTakePoll = (e) => {
    e.preventDefault();
    setTakePoll(true);
  };

  return (
    <Card.Group>
      <Card fluid color="grey">
        <Card.Content>
          <Image avatar floated="left" src={avatar} />
          <Card.Header>{author.name}</Card.Header>
          <Card.Meta>is asking:</Card.Meta>
          <Card.Description>
            <strong>Would you rather</strong>
          </Card.Description>
        </Card.Content>
        {showPoll ? (
          <ShowPoll setShowPoll={setShowPoll} poll={poll} />
        ) : takePoll ? (
          <TakePoll poll={poll} />
        ) : (
          <Card.Content>
            <Button basic color="violet">
              {optionOne}
            </Button>
            <br />
            <br />
            <div>Or</div>
            <br />
            <Button basic color="violet">
              {optionTwo}
            </Button>

            {!(userVoteOne + userVoteTwo).includes(state.authedUser) ? (
              <Button
                animated
                basic
                color="pink"
                floated="right"
                onClick={handeTakePoll}
              >
                <Button.Content visible>Take Poll</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
            ) : (
              <Button
                animated
                basic
                color="pink"
                floated="right"
                onClick={handleShowPoll}
              >
                <Button.Content visible>Show Poll</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
            )}
          </Card.Content>
        )}
      </Card>
    </Card.Group>
  );
};

export default Poll;
