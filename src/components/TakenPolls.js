import React from "react";
import { useSelector } from "react-redux";
import Poll from "./Poll";

const TakenPolls = () => {
  const state = useSelector((state) => state);

  const takenPollIDs = Object.keys(state.questions)
    .filter(
      (q) =>
        state.questions[q].optionOne.votes.includes(state.authedUser) ||
        state.questions[q].optionTwo.votes.includes(state.authedUser)
    )
    .sort(
      (a, b) => state.questions[b].timestamp - state.questions[a].timestamp
    );

  const takenPolls = takenPollIDs.map((ID) => state.questions[ID]);

  // console.log(takenPolls.length);
  // console.log(polls)
  return (
    <div>
      <h2>Taken Polls</h2>
      {takenPolls.map((poll, id) => (
        <div key={id}>
          <Poll poll={poll} />
        </div>
      ))}
    </div>
  );
};

export default TakenPolls;
