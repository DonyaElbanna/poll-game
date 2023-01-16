import { saveQuestionAnswer, saveQuestion } from "../utils/api";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAnswerQuestion(info) {
  return (dispatch) => {
    dispatch(answerQuestion(info));

    return saveQuestionAnswer(info).catch((e) => {
      console.warn("Error in handlingAddingAnswer: ", e);
      alert("An error occured submitting your poll. Please try again.");
    });
  };
}

export function handleAddQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    // console.log(getState())
    return saveQuestion({
      author: authedUser,
      optionOneText: optionOne,
      optionTwoText: optionTwo,
    }).then((question) => dispatch(addQuestion(question)))
    .catch((e) => {
      console.warn("Error in handlingAddingQuestion: ", e);
      alert("An error occured submitting your poll. Please try again.");
    });
  };
}
