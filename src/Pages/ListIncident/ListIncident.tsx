import React, { useEffect, useState, Suspense } from "react";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";
import { IncidentVO } from "../../Utils/IncidentVO";
import { getIncidents } from "../../Utils/FirebaseRead";
import { deleteIncident } from "../../Utils/FirebaseWrite";
import LoadingOverlay from "../../Utils/LoadingOverlay";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIncidentModal from "./EditIncidentModal";

const Incident = React.lazy(() => import("./Incident"));

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    fontSize: "large"
  }
}));

const ListIncident: React.FC = props => {
  const classes = useStyles();

  const [incidents, setIncidents] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIncident, setSelectedIncident] = useState();
  const [shouldModalBeOpen, setShouldModalBeOpen] = useState(false);

  const handleDelete = (id: string) => {
    deleteIncident(id).then(() => {
      updateIncidents();
    });
  };

  const updateIncidents = () => {
    setIncidents([]);
    setIsLoading(true);
    getIncidents().then((data: any) => {
      setIncidents(data);
      setIsLoading(false);
    });
  };

  const openModal = (incidentVO: IncidentVO) => {
    setSelectedIncident(incidentVO);
    setShouldModalBeOpen(true);
  };

  const editIncident = (incidentVO: IncidentVO) => {
    console.log("editing incident", +incidentVO.id);
  };

  useEffect(() => {
    updateIncidents();
  }, []);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <Suspense fallback={<LoadingOverlay />}>
      <div>
        <h2>This is the list incident page.</h2>
        <ul>
          {incidents?.map((incident: IncidentVO) => {
            return (
              <li key={incident.id}>
                <Incident incidentVO={incident} lockedFields={true} />
                <Button
                  className={classes.button}
                  onClick={() => {
                    handleDelete(incident.id);
                  }}
                >
                  <DeleteIcon /> Delete
                </Button>

                <Button
                  className={classes.button}
                  onClick={() => {
                    openModal(incident);
                  }}
                >
                  <EditIcon /> Edit
                </Button>
              </li>
            );
          })}
        </ul>

        <EditIncidentModal
          handleSubmit={editIncident}
          incident={selectedIncident}
          isOpen={shouldModalBeOpen}
          handleCloseButton={() => setShouldModalBeOpen(false)}
        />
      </div>
    </Suspense>
  );
};

export default ListIncident;
