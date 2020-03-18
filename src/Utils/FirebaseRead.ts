import { IncidentVO } from "./IncidentVO";
import * as firebase from "firebase/app";

export const getIncidents = () => {
  const incidents: any = [];
  return new Promise((res, rej) => {
    firebase
      .database()
      .ref("incidents/")
      .once("value")
      .then(function(snapshot) {
        snapshot.forEach(child => {
          const incident: IncidentVO = {
            id: child.key || "",
            personEmail: child.val().personEmail,
            dateTime: child.val().dateTime,
            description: child.val().description
          };
          incidents.push(incident);
        });

        return res(incidents);
      });
  });
};
