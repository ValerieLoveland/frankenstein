import { Person } from "./Users";
import React from "react";
import { Card } from "../shared/Card";

export const PersonCard: React.FC<PersonCardProps> = (props) => {
  const { person } = props;

  return (
    <Card>
      <div>
        {person.name} {person.lastName}
      </div>
      <div className="mb-5">{person.userName}</div>

      <img src={person.avatar} alt="headshot of person" />
    </Card>
  );
};

export interface PersonCardProps {
  person: Person;
}
