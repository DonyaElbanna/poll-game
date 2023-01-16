// import { useSelector } from "react-redux";
// // import { Navigate } from "react-router-dom";

// import {
//   Button,
//   Card,
//   Checkbox,
//   Label,
//   Icon,
//   Progress,
//   Image
// } from "semantic-ui-react";

// const ShowPoll = ({ setShowPoll, poll }) => {
//   const state = useSelector((state) => state);

//   const handleHidePoll = (e) => {
//     e.preventDefault();
//     setShowPoll(false);
//   };
  

//   const {
//     author,
//     avatar,
//     optionOne,
//     optionTwo,
//     userVoteOne,
//     userVoteTwo,
//     votesOne,
//     votesTwo,
//     totalVotes,
//   } = poll;

//   const LabelOne = (
//     <Label basic color="violet" image>
//       {optionOne}
//     </Label>
//   );

//   const LabelTwo = (
//     <Label basic color="violet" image>
//       {optionTwo}
//     </Label>
//   );

//   return (
//     <Card color="grey">
//       <Card.Content>
//         <Image avatar floated="left" src={avatar} />
//         <Card.Header>{author.name}</Card.Header>
//         <Card.Meta>is asking:</Card.Meta>
//         <Card.Description>
//           <strong>Would you rather</strong>
//         </Card.Description>
//       </Card.Content>
//       <Card.Content>
//         {userVoteOne.includes(state.authedUser) && (
//           <Label color="pink" ribbon>
//             You Chose
//           </Label>
//         )}
//         <Checkbox radio label={LabelOne} name="checkboxRadioGroup" />

//         <Progress
//           color="violet"
//           value={votesOne}
//           total={totalVotes}
//           progress="ratio"
//         />
//         <div>Or</div>
//         <br />
//         {userVoteTwo.includes(state.authedUser) && (
//           <Label color="pink" ribbon>
//             You Chose
//           </Label>
//         )}
//         <Checkbox radio label={LabelTwo} name="checkboxRadioGroup" />

//         <Progress
//           color="violet"
//           value={votesTwo}
//           total={totalVotes}
//           progress="ratio"
//         />
//         <Button
//           animated
//           basic
//           color="pink"
//           floated="right"
//           onClick={handleHidePoll}
//         >
//           <Button.Content visible>Go Back</Button.Content>
//           <Button.Content hidden>
//             <Icon name="arrow left" />
//           </Button.Content>
//         </Button>
//       </Card.Content>
//     </Card>
//   );
// };

// export default ShowPoll;
