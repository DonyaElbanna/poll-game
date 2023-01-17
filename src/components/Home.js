import { useSelector } from "react-redux";
import NewPolls from "./NewPolls";
import TakenPolls from "./TakenPolls";
import { Tab, Label, Menu } from "semantic-ui-react";

const Home = () => {
  const state = useSelector((state) => state);

  const newPolls = Object.values(state.questions)
    .filter(
      (poll) =>
        !poll.optionOne.votes.includes(state.authedUser) &&
        !poll.optionTwo.votes.includes(state.authedUser)
    )
    .sort((a, b) => b.timestamp - a.timestamp);

  const takenPolls = Object.values(state.questions)
    .filter(
      (poll) =>
        poll.optionOne.votes.includes(state.authedUser) ||
        poll.optionTwo.votes.includes(state.authedUser)
    )
    .sort((a, b) => b.timestamp - a.timestamp);

  // console.log(newPolls);

  const panes = [
    {
      menuItem: (
        <Menu.Item key="new">
          New Polls<Label color="pink">{newPolls.length}</Label>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane>
          <NewPolls polls={newPolls} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: (
        <Menu.Item key="taken">
          Taken Polls<Label>{takenPolls.length}</Label>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane>
          <TakenPolls polls={takenPolls} />
        </Tab.Pane>
      ),
    },
  ];

  //   console.log(takenPolls);

  return (
    <Tab
      menu={{ fluid: true, color: "violet", vertical: true, tabular: true }}
      panes={panes}
    />
  );
};

export default Home;
