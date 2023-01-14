import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";

export function receiveInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}
