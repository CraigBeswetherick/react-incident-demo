import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { TextField, Button } from "@material-ui/core";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Formik, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import { OPEN_LIST_INCIDENT } from "../../Utils/Constants";
import DateFnsUtils from "@date-io/date-fns";
import history from "../../Utils/History";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_EMAIL,
  DEFAULT_TIME,
  EMAIL,
  DESCRIPTION,
  TIME
} from "../../Utils/Constants";
import { IncidentVO, IncidentVOInterface } from "../../Utils/IncidentVO";
import { writeIncident } from "../../Utils/FirebaseWrite";
import LoadingOverlay from "../../Utils/LoadingOverlay";

const CreateIncidentForm: React.FC = props => {
  const [selectedDate, handleDateChange] = useState(new Date().toISOString());
  const [isLoading, setLoading] = useState(false);

  const onSubmit = (values: IncidentVO) => {
    console.warn(
      "%c Submitting Incident",
      "background: #222; color: #bada55; padding: 10px; border-radius:2px"
    );

    console.warn(
      "Email: " +
        values.personEmail +
        "\n Date: " +
        selectedDate +
        "\n Description: " +
        values.description
    );

    values.dateTime = selectedDate;
    setLoading(true);
    writeIncident(values).then(() => {
      setLoading(false);
      history.push(OPEN_LIST_INCIDENT);
    });
  };

  const useStyles = makeStyles(theme => ({
    textField: {
      marginTop: theme.spacing(3)
    },
    button: {
      fontSize: "large",
      marginTop: theme.spacing(1),
      padding: theme.spacing(1)
    }
  }));

  const initialValues: IncidentVOInterface = {
    id: "",
    personEmail: DEFAULT_EMAIL,
    description: DEFAULT_DESCRIPTION,
    dateTime: DEFAULT_TIME
  };

  const classes = useStyles();

  return (
    <div>
      {isLoading ? <LoadingOverlay /> : null}
      <Formik
        initialValues={new IncidentVO(initialValues)}
        onSubmit={values => {
          onSubmit(values);
        }}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form>
            <div>
              <TextField
                label={EMAIL}
                fullWidth
                variant="filled"
                placeholder={EMAIL}
                name={EMAIL}
                onChange={handleChange}
                onBlur={handleBlur}
                className={classes.textField}
              />
            </div>
            <div>
              <TextField
                fullWidth
                label={DESCRIPTION}
                variant="filled"
                multiline
                rows="4"
                placeholder={DESCRIPTION}
                name={DESCRIPTION}
                onChange={handleChange}
                onBlur={handleBlur}
                className={classes.textField}
              />
            </div>
            <div>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimePicker
                  label={TIME}
                  fullWidth
                  className={classes.textField}
                  name={TIME}
                  value={new Date()}
                  onChange={(e: any) => {
                    console.log(e);
                    handleDateChange(e);
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div>
              <Button
                fullWidth
                className={classes.button}
                type="submit"
                color="primary"
                onSubmit={() => {
                  onSubmit(values);
                }}
              >
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateIncidentForm;
