import React from "react";
const CreateIncidentForm = React.lazy(() => import("./CreateIncidentForm"));

const CreateIncident: React.FC = props => {
  return (
    <div>
      <h2>This is the create incident page.</h2>
      <CreateIncidentForm />
    </div>
  );
};

export default CreateIncident;
