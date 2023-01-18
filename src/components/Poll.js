import { useSelector } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import { Button, Card, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Poll = ({ poll }) => {
  const state = useSelector((state) => state);

  poll = formatQuestion(poll, state.users[poll.author]);

  const {
    author,
    avatar,
    id,
    optionOne,
    optionTwo,
    userVoteOne,
    userVoteTwo,
    // votesOne,
    // votesTwo,
    // totalVotes,
  } = poll;

  return (
    <Card.Group>
      <Card color="grey" style={{ marginBottom: "10%" }}>
        <Card.Content>
          <Image avatar floated="left" src={avatar} alt="avatar"/>
          <Card.Header>{author.name}</Card.Header>
          <Card.Meta>is asking:</Card.Meta>
          <Card.Description>
            <strong>Would you rather</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <Button basic color="black">
            {optionOne}
          </Button>
          <div style={{ margin: "0.5rem 0" }}>Or</div>
          <Button basic color="black">
            {optionTwo}
          </Button>
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            {!(userVoteOne + userVoteTwo).includes(state.authedUser) ? (
              <Link to={`/poll/${id}`}>
                <Button animated color="violet">
                  <Button.Content visible>Take Poll</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Link>
            ) : (
              <Link to={`/poll-result/${id}`}>
                <Button animated color="violet">
                  <Button.Content visible>Show Poll</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Link>
            )}
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default Poll;
