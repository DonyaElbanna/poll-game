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
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(receiveInitialData());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/poll/:id" element={<TakePoll />} />
          <Route path="/poll-result/:id" element={<PollResult />} />
          <Route path="/add" exact element={<AddPoll />} />
          <Route path="/leaderboard" exact element={<Leaderboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
