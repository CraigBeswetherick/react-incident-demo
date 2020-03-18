import React, { Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { IncidentVO } from "../../Utils/IncidentVO";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import LoadingOverlay from "../../Utils/LoadingOverlay";
const Incident = React.lazy(() => import("./Incident"));

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  button: {
    margin: theme.spacing(1),
    padding: theme.spacing(1, 1),
    fontSize: "large"
  }
}));

interface InterfaceProps {
  handleSubmit: Function;
  incident: IncidentVO;
  isOpen: boolean;
  handleCloseButton: Function;
}

const EditIncidentModal: React.FC<InterfaceProps> = props => {
  const classes = useStyles();

  const handleClose = () => {
    props.handleCloseButton();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={props.isOpen}>
          <div className={classes.paper}>
            <Suspense fallback={<LoadingOverlay />}>
              <h1>Edit the Incident</h1>
              <Incident incidentVO={props.incident} lockedFields={false} />
              <Button
                className={classes.button}
                onClick={() => {
                  handleClose();
                  props.handleSubmit(props.incident);
                }}
              >
                <EditIcon /> Edit
              </Button>
              <Button
                className={classes.button}
                onClick={() => {
                  handleClose();
                }}
              >
                <CloseIcon /> Close
              </Button>
            </Suspense>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default EditIncidentModal;
