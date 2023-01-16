import { getInitialData } from "../utils/api";
// import { setAuthedUser } from "./authedUser";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";

// const authedID = "elliotfu";

export function receiveInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      // dispatch(setAuthedUser(authedUser));
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}
