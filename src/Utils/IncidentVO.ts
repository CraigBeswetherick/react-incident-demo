export interface IncidentVOInterface {
  id: string;
  dateTime?: string;
  description?: string;
  personEmail?: string;
}

export class IncidentVO {
  public id: string;
  public dateTime?: string;
  public description?: string;
  public personEmail?: string;

  constructor(props: IncidentVOInterface) {
    this.id = props.id;
    this.dateTime = props.dateTime;
    this.description = props.description;
    this.personEmail = props.personEmail;
  }
}
