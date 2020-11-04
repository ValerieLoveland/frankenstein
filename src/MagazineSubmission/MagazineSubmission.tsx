import React from "react";
import { Card } from "../shared/Card";
import "./MagazineSubmission.css";

export const MagazineSubmission = () => {
  return (
    <Card title="Poetry Submissions">
      <table className="submissions">
        <tbody>
          <tr>
            <th>Poem</th> <th>Magazine</th> <th>Date</th> <th>Submitted</th>
            <th />{" "}
          </tr>
          {submission("Frosties", "Poetry Magazine", "7/20/2020")}

          {submission("Slap Bracelets", "Kenyon Review", "08/15/2020")}

          {submission("Grabber", "American Poetry Review", "09/15/2020")}
        </tbody>
      </table>
    </Card>
  );
};

const submission = function (
  poem: string,
  magazine: string,
  startDate: string
) {
  let alteredStartDate = Date.parse(startDate);
  let currentDate = Date.now();
  console.log(`altered ${alteredStartDate} current ${currentDate}`);

  let daysOut = calculateDays(currentDate, alteredStartDate);

  if (daysOut > 30) {
    return (
      <tr>
        <td>{poem}</td>
        <td>{magazine}</td>
        <td>{startDate}</td>
        <td>{daysOut} days out*</td>
        <td>*Query {magazine}.</td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{poem}</td>
        <td>{magazine}</td>
        <td>{startDate}</td>
        <td>{daysOut} days out</td>
      </tr>
    );
  }
};

const calculateDays = (
  currentDate: number,
  alteredStartDate: number
): number => {
  let days = Math.floor((currentDate - alteredStartDate) / 86400000);
  console.log(days);
  return days;
};
