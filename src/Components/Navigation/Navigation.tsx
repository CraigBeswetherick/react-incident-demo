import * as React from "react";
import {
  OPEN_HOME,
  OPEN_LIST_INCIDENT,
  OPEN_CREATE_INCIDENT,
  HOME,
  LIST_INCIDENTS,
  CREATE_INCIDENT
} from "../../Utils/Constants";
import Navigate from "../Buttons/Navigate/Navigate";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";

interface PropInterface {}

const Navigation: React.FC<PropInterface> = props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <ButtonGroup>
          <Navigate url={OPEN_HOME} text={HOME}></Navigate>

          <Navigate url={OPEN_LIST_INCIDENT} text={LIST_INCIDENTS}></Navigate>

          <Navigate
            url={OPEN_CREATE_INCIDENT}
            text={CREATE_INCIDENT}
          ></Navigate>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
