import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "typeface-roboto";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 500
  }
}));

interface PropInterface {
  text: string;
  url: string;
}

const Navigate: React.FC<PropInterface> = props => {
  const classes = useStyles();

  return (
    <Link to={props.url}>
      <MenuItem className={classes.root}>
        <Button>{props.text}</Button>
      </MenuItem>
    </Link>
  );
};

export default Navigate;
