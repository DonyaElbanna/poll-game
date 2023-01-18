import "./App.css";
import Navigation from "./components/Navigation";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PollResult from "./components/PollResult";
import TakePoll from "./components/TakePoll";
import AddPoll from "./components/AddPoll";
import Leaderboard from "./components/Leaderboard";
import Login from "./components/Login";
import { receiveInitialData } from "./actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "./components/Error";
import { PacmanLoader } from "react-spinners";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(receiveInitialData());
  }, [dispatch]);

  const state = useSelector((state) => state);
  // console.log(Object.values(state.questions).length);
  const override: CSSProperties = {
    position: "absolute",
    top: "40%",
    left: "50%",
  };
  return (
    <Router>
      <div className="App">
        {Object.values(state.questions).length === 0 ? (
          <PacmanLoader color="#6435c9" cssOverride={override} size={30} speedMultiplier={1.5}/>
        ) : !state.authedUser ? (
          <>
            <Navigation />
            <Login/>
          </>
        ) : (
          <>
            <Navigation />
            <Routes>
              {["/", "/home"].map((path, i) => (
                <Route path={path} element={<Home />} key={i} />
              ))}
              <Route path="/poll/:id" element={<TakePoll />} />
              <Route path="/poll-result/:id" element={<PollResult />} />
              <Route path="/add" exact element={<AddPoll />} />
              <Route path="/leaderboard" exact element={<Leaderboard />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
