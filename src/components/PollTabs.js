// import { Label, Menu, Tab } from "semantic-ui-react";
// import NewPolls from "./NewPolls";
// import TakenPolls from "./TakenPolls";

// const panes = (TakenPollsLength) => {
//   return [
//     {
//       menuItem: (
//         <Menu.Item key="newpolls">
//           New Polls<Label>{TakenPollsLength}</Label>
//         </Menu.Item>
//       ),
//       render: () => (
//         <Tab.Pane>
//           <NewPolls />
//         </Tab.Pane>
//       ),
//     },
//     {
//       menuItem: <Menu.Item key="takenpolls">Taken Polls</Menu.Item>,
//       render: () => (
//         <Tab.Pane>
//           <TakenPolls />
//         </Tab.Pane>
//       ),
//     },
//   ];
// };

// const PollTabs = ({ newPollsLength }) => (
//   <Tab
//     menu={{ fluid: true, color: "violet", tabular: true, vertical: true }}
//     panes={panes(newPollsLength)}
//     defaultActiveIndex={0}
//   />
// );

// export default PollTabs;
