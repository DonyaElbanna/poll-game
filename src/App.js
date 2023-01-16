import "./App.css";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { receiveInitialData } from "./actions/index";
// import { handleAnswerQuestion } from "./actions/questions";

import Navigation from "./components/Navigation";
// import PollTabs from "./components/PollTabs";
// import NewPolls from "./components/NewPolls";
// import TakenPolls from "./components/TakenPolls";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PollResult from "./components/PollResult";
import TakePoll from "./components/TakePoll";
// import NewPolls from "./components/NewPolls";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/poll-result/:id" element={<PollResult />} />
          <Route path="/poll/:id" element={<TakePoll />} />
        </Routes>
        {/* <PollResult/> */}
      </div>
    </Router>
  );
}

export default App;
