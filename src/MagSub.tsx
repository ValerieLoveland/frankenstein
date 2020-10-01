import React from "react";

export const MagSub = () => {
  return (
    <>
      <h1>Magazines to Query</h1>
      <table className="table">
        <div className="ul-style form">
          <div className="sub">
            <tr>
              {" "}
              <th>Poem</th> <th>Magazine</th> <th>Date</th> <th>Submitted </th>
            </tr>
          </div>
          <tbody>
            <ul>
              <tr>
                <li>
                  {submission("Frosties", "Poetry Magazine", "7/20/2020")}
                </li>
              </tr>
              <li>
                {submission("Slap Bracelets", "Kenyon Review", "08/15/2020")}
              </li>
              <li>
                {submission("Grabber", "American Poetry Review", "09/15/2020")}
              </li>
            </ul>
          </tbody>
        </div>
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
        <div>
          <table>
            <tbody>
              <tr className="table">
                <td>{poem}</td>
                <td>{magazine}</td>
                <td>{startDate}</td>
                <td>{daysOut}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          Query {magazine} about "{poem}." It has been out {daysOut} days.
        </div>
      </>
    );
  } else {
    return (
      <div>
        {poem} {magazine}
        {startDate}
        {daysOut}
      </div>
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
