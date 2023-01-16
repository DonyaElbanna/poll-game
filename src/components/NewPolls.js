import Poll from "./Poll";
import { Grid } from "semantic-ui-react";

const NewPolls = ({ polls }) => {
  return (
    <div>
      <h2 className="title">New Polls</h2>
      <Grid padded>
        {polls.map((poll, id) => (
          <div key={id}>
            <Poll poll={poll} />
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default NewPolls;
