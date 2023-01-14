import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {receiveInitialData} from "./actions/index"

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(receiveInitialData());
  }, [dispatch]);

  // console.log(state);

  return <div className="App">App</div>;
}

export default App;
