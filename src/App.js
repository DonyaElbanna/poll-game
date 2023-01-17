import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(receiveInitialData());
  }, [dispatch]);

  const authedUser = useSelector((state) => state.authedUser);
  // console.log(authedUser);

  return (
    <Router>
      <div className="App">
        <Navigation />
        {!authedUser ? (
          <Login />
        ) : (
          <Routes>
            {["/", "/home"].map((path, i) => (
              <Route path={path} element={<Home />} key={i}/>
            ))}
            <Route path="/poll/:id" element={<TakePoll />} />
            <Route path="/poll-result/:id" element={<PollResult />} />
            <Route path="/add" exact element={<AddPoll />} />
            <Route path="/leaderboard" exact element={<Leaderboard />} />
            <Route path="*" element={<Error />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
