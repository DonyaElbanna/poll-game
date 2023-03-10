import {
  RECEIVE_QUESTIONS,
  ANSWER_QUESTION,
  ADD_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ANSWER_QUESTION:
      // console.log(action)
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([
              state.authedUser,
            ]),
          },
        },
      };
    case ADD_QUESTION:
      // console.log(action);
      return {
        ...state,
        [action.question.id]: action.question,
      };
    default:
      return state;
  }
}
