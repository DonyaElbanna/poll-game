import { Card, Input, Button, Form } from "semantic-ui-react";
import { useState } from "react";
import { handleAddQuestion } from "../actions/questions";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

const AddPoll = () => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  const handleSubmitPoll = (e) => {
    e.preventDefault();
    // console.log(optionOne, optionTwo);
    dispatch(handleAddQuestion(optionOne, optionTwo));
    setSubmitted(true);
  };

  if (submitted === true) {
    return <Navigate to="/" />;
  }

  return (
    <Card color="grey">
      <Card.Content>
        <Card.Header>Add a Poll</Card.Header>
      </Card.Content>
      <Card.Content>
        <p>Would you rather</p>
        <Form>
          <Form.Field>
            <Input
              placeholder="Option One..."
              value={optionOne}
              onChange={(e) => setOptionOne(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <p>Or</p>
          </Form.Field>
          <Form.Field>
            <Input
              placeholder="Option Two..."
              value={optionTwo}
              onChange={(e) => setOptionTwo(e.target.value)}
            />
          </Form.Field>
        </Form>
      </Card.Content>
      <Card.Content className="center-btn">
        <Button disabled={!optionOne || !optionTwo} onClick={handleSubmitPoll}>
          Submit
        </Button>
      </Card.Content>
    </Card>
  );
};

export default AddPoll;
