import { getInitialData } from "../utils/api";
import { setAuthedUser } from "./authedUser";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";

const authedID = "johndoe";

export function receiveInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(setAuthedUser(authedID));
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}
