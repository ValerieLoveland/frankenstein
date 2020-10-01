import React from "react";

export const MagSub = () => {
  return (
    <>
      <h1>Magazines to Query</h1>
      <table>
        <thead>
          <tr>
            <th>Poem</th> <th>Magazine</th> <th>Date</th> <th>Submitted </th>
          </tr>
        </thead>
        <tbody>
          {submission("Frosties", "Poetry Magazine", "7/20/2020")}

          {submission("Slap Bracelets", "Kenyon Review", "08/15/2020")}

          {submission("Grabber", "American Poetry Review", "09/15/2020")}
        </tbody>
      </table>
    </>
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
      <>
        <tr>
          <td>{poem}</td>
          <td>{magazine}</td>
          <td>{startDate}</td>
          <td>{daysOut}</td>
        </tr>
        <tr>
          <td colSpan={4}>
            Query {magazine} about "{poem}." It has been out {daysOut} days.
          </td>
        </tr>
      </>
    );
  } else {
    return (
      <tr>
        <td>{poem}</td>
        <td>{magazine}</td>
        <td>{startDate}</td>
        <td>{daysOut}</td>
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
