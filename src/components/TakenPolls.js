import React from "react";
// import { useSelector } from "react-redux";
import Poll from "./Poll";
import { Grid } from "semantic-ui-react";
// import { useParams } from "react-router-dom";

const TakenPolls = ({polls}) => {

  return (
    <div>
      <h2 className="title">Taken Polls</h2>
      <Grid padded style={{margin: "auto"}}>
        {polls.map((poll, id) => (
          <div key={id}>
            <Poll poll={poll} />
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default TakenPolls;
