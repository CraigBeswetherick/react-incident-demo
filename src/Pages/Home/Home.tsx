import React from "react";
import Typography from "@material-ui/core/Typography";
import "typeface-roboto";

const Home: React.FC = props => {
  return (
    <div>
      <div>
        <Typography>This is the homepage.</Typography>
        <Typography>We can put any type of information here.</Typography>
      </div>
    </div>
  );
};

export default Home;
