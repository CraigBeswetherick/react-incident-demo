import * as React from "react";
import { IncidentVO } from "../../Utils/IncidentVO";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface InterfaceProps {
  incidentVO: IncidentVO;
  lockedFields: boolean;
}

const useStyles = makeStyles(theme => ({
  textField: {
    marginTop: theme.spacing(3)
  }
}));

const Incident: React.FC<InterfaceProps> = (props: InterfaceProps) => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <TextField
          className={classes.textField}
          fullWidth
          variant="outlined"
          label="Incident ID: "
          defaultValue={props.incidentVO.id}
          InputProps={{
            readOnly: true
          }}
        />
      </div>
      <div>
        <TextField
          className={classes.textField}
          fullWidth
          variant="outlined"
          label="Incident Date: "
          defaultValue={props.incidentVO.dateTime}
          InputProps={{
            readOnly: props.lockedFields
          }}
        />
      </div>
      <div>
        <TextField
          className={classes.textField}
          fullWidth
          variant="outlined"
          label="Incident Email: "
          defaultValue={props.incidentVO.personEmail}
          InputProps={{
            readOnly: props.lockedFields
          }}
        />
      </div>
      <div>
        <TextField
          className={classes.textField}
          fullWidth
          variant="outlined"
          label="Incident Description: "
          defaultValue={props.incidentVO.description}
          InputProps={{
            readOnly: props.lockedFields
          }}
        />
      </div>
    </div>
  );
};

export default Incident;
