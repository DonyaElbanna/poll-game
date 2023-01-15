import React from "react";
import { useSelector } from "react-redux";
import Poll from "./Poll";

const NewPolls = () => {
    const state = useSelector((state) => state);
    
    const newPollIDs = Object.keys(state.questions)
    .filter(
      (q) =>
        !state.questions[q].optionOne.votes.includes(state.authedUser) &&
        !state.questions[q].optionTwo.votes.includes(state.authedUser)
    ).sort((a, b) => state.questions[b].timestamp - state.questions[a].timestamp);

    const newPolls = newPollIDs.map(ID => state.questions[ID])
  
    console.log(newPolls);
// console.log(polls)
  return (
    <div>
      <h2>TakenPolls</h2>
      {newPolls.map((poll, id) => (
        <div key={id}>
          <Poll poll={poll}/>
        </div>
      ))}
    </div>
  );
};

export default NewPolls;
