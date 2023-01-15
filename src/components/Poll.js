import { useSelector } from "react-redux";
import { formatQuestion } from "../utils/helpers";

const Poll = ({ poll }) => {
  const state = useSelector((state) => state);

  poll = formatQuestion(poll, state.users[poll.author]);

  // console.log(poll);

  return (
    <div>
      <span>
        <img
          src={poll.avatar}
          alt={`Avatar of ${poll.name}`}
          width="60"
          height="60"
        />
        <h3>{poll.name}</h3> is asking:
        <p>Would you rather</p>
        <div>
          <input
            type="checkbox"
            checked={poll.userVoteOne.includes(state.authedUser)}
            readOnly
          />
          <label>{poll.optionOne}</label>
        </div>
        Or
        <div>
          <input
            type="checkbox"
            checked={poll.userVoteTwo.includes(state.authedUser)}
            readOnly
          />
          <label>{poll.optionTwo}</label>
        </div>
      </span>
    </div>
  );
};

export default Poll;
