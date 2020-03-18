import { IncidentVO } from "./IncidentVO";
import * as firebase from "firebase/app";

export function writeIncident(data: IncidentVO) {
  return firebase
    .database()
    .ref("incidents/")
    .push(
      {
        personEmail: data.personEmail,
        description: data.description,
        dateTime: data.dateTime
      },
      function(error) {
        if (error) {
          console.log("The write failed...", error);
        } else {
          console.log("Data saved successfully!");
        }
      }
    );
}

export function deleteIncident(id: string) {
  const ref = firebase.database().ref("incidents/" + id);
  return ref
    .remove()
    .then(function() {
      console.log("Remove succeeded.");
    })
    .catch(function(error) {
      console.warn("Remove failed: " + error.message);
    });
}
