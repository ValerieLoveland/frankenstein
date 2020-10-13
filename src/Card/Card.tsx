import { Person } from "../CardDisplay";
import React from "react";
import "./Card.css";
import { LayoutColor } from "../shared/Layout";

export const Card: React.FC<CardProps> = (props) => {
  const { person } = props;

  return (
    <LayoutColor>
      <div className="ul-style card">
        <div>
          {person.name} {person.lastName}
        </div>
        <div className="mb-5">{person.userName}</div>

        <img src={person.avatar} alt="headshot of person" />
      </div>
    </LayoutColor>
  );
};

export interface CardProps {
  person: Person;
}
