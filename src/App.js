import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {receiveInitialData} from "./actions/index"
import Navigation from "./components/Navigation"
import PollTabs from "./components/PollTabs";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(receiveInitialData());
  }, [dispatch]);

  const state = useSelector((state) => state);
    
  const newPollIDs = Object.keys(state.questions)
  .filter(
    (q) =>
      !state.questions[q].optionOne.votes.includes(state.authedUser) &&
      !state.questions[q].optionTwo.votes.includes(state.authedUser)
  );


  // console.log(newPollIDs);

  return <div className="App">
    <Navigation/>
    <PollTabs newPollsLength={newPollIDs.length}/>
  </div>;
}

export default App;
