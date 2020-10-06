import { Person } from "./CardDisplay";
import React from "react";

export const Card: React.FC<CardProps> = (props) => {
  const { person } = props;

  return (
    <div className="card">
      <div>
        {person.name} {person.lastName}
      </div>
      <div className="mb-5">{person.userName}</div>

      <img src={person.avatar} alt="headshot of person" />
    </div>
  );
};

export interface CardProps {
  person: Person;
}
